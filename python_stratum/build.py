"""
Run this script with
python3 build.py

it will read HTML files in raw/ defined at the bottom (the chapters variable) and generate the front-end HTML files.

Description:

Place contents of a single line in a specified HTML tag.

Example:
$h1 My Cool Page

$p This is a paragraph with some content.


Text inside backticks `this is an expression` is converted to <code>this is an expression</code>.

pre blocks begin with @py and end with @end

@py
Python code
More code
@end

A raw HTML block is marked with !html and ends with !end

!html
<table>
  <tr><td>A</td><td>B</td></tr>
  <tr><td>10</td><td>20</td></tr>
</table>
!end
"""

import re

book_title = "Python Stratum"

HEADER = f'''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="ui.css">
    <link rel="stylesheet" href="repl.css">
    <link rel="stylesheet" href="jquery.terminal.css">
    <title>{book_title}</title>
  </head>

  <body>

    <div id="loading">
      Loading...
      <span style="animation: loadblink 1s steps(1, end) 64;">|</span>
    </div>

    <div class="grid">
      <div id="repl">
        <strong>Code editor</strong>
        <button style="margin-bottom: 0.5rem;" onclick="clearInput()">Clear</button>
<!-- NOTE: while developing, in build.py, comment out the loading div above and init_pyodide.js to save from running it and having to wait -->
        <div id="input-area">
          <textarea id="replInput" rows="4" cols="72" autofocus># Loading...</textarea>
          <div id="pyError"></div>
          <button style="margin-top: 0.25rem;" onclick="pyEval(input)">Evaluate</button>
        </div>
      </div>

      <div id="content">
        <strong><a href="index.html">Table of Contents</a></strong>
        <div id="book">
'''

FOOTER = '''
        </div>
      </div>
      <div id="consoleWrapper" class="pyReady"><pre id="py-console"># Loading...<span style="animation: loadblink 1s steps(1, end) 64;">|</span></pre></div>
    </div>

    <script src="repl.js"></script>

    <script src="jquery.min.js"></script>
    <script src="jquery.terminal.js"></script>
    <script src="unix_formatting.js"></script>
    <script src="matchbrackets.js"></script>

    <script src="init_pyodide.js"></script>

  </body>
</html>
'''


INDEX_TEMPLATE_HEADER = f'''
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../resources/css/livro.css">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="ui.css">
    <title>{book_title}</title>
  </head>
  <body>
    <div style="text-align: center;">
    <div style="font-family: sans-serif; max-width: 60rem; margin: auto; text-align: left;">

<h1 style="margin-top: 2rem;">{book_title}</h1>
<p class="index-p">
by <a href="https://heitorchang.github.io/" target="_blank">Heitor Chang</a>
</p>
'''


INDEX_TEMPLATE_FOOTER = '''
<p class="index-p">
<a href="credits.html" class="home-chapter-link">Credits</a>
</p>
    </div>
    </div>
  </body>
</html>
'''


def generate_index_chapter_link(n, idx):
    with open(f"raw/{n}.html") as f:
        for line in f:
            header = line
            break
    n_name = header.replace("$h1 ", "")

    return f'''
    <p class="index-p">
      <a href="{n}.html" class="home-chapter-link">{idx}. {n_name}</a>
    </p>
    '''


def generate_index(chapters):
    print(f"Generating index")
    with open(f"index.html", 'w') as index_f:
        print(INDEX_TEMPLATE_HEADER, file=index_f)
        for i, n in enumerate(chapters, 1):
            print(n)
            print(generate_index_chapter_link(n, i), file=index_f)
        print(INDEX_TEMPLATE_FOOTER, file=index_f)


def replace_html_special_chars(line):
    line = line.replace(" <<< ", "&lt;&lt;&lt;")
    line = line.replace(" >>> ", "&gt;&gt;&gt;")
    line = line.replace(" < ", " &lt; ")
    line = line.replace(" > ", " &gt; ")
    line = line.replace(" & ", " &amp; ")
    return line


def convert_line(line, chapter_number):
    if line[0] != '$':
        line = '$p ' + line
    tagname, *rest = line.split()
    tagname = tagname[1:]  # remove initial $
    chapter_label = ""
    if tagname == 'h1':
        chapter_label = str(chapter_number) + '. '
    backtick_template = re.compile(r'`([^`]*?)`')
    contents = replace_html_special_chars(' '.join(rest))
    contents = re.sub(backtick_template, r'<code>\1</code>', contents)
    return f"<{tagname}>{chapter_label}{contents}</{tagname}>"


BLOCK_ID = 0
def generate_incrementing_id():
    global BLOCK_ID
    BLOCK_ID += 1
    return f'block{BLOCK_ID}'


def wrap_py_block(lines):
    textarea_id = generate_incrementing_id()
    textarea_contents = ''
    textarea_contents += f'''<pre onclick="sendPre(event)">'''
    for line in lines:
        textarea_contents += line + '\n'
    textarea_contents = textarea_contents[:-1]  # remove final newline
    textarea_contents += f'''</pre>'''

    return textarea_contents


def generate_chapter_links(prev, nxt, idx):
    # get chapter titles
    prev_name = ''
    prev_link = ''
    try:
        with open(f"raw/{prev}.html") as prev_f:
            for line in prev_f:
                prev_name = line.replace("<h1>", "").replace("</h1>", "")
                break
    except:
        pass

    next_name = ''
    next_link = ''
    try:
        with open(f"raw/{nxt}.html") as next_f:
            for line in next_f:
                next_name = line.replace("<h1>", "").replace("</h1>", "")
                break
    except:
        pass

    prev_name = prev_name.replace("$h1 ", "")
    next_name = next_name.replace("$h1 ", "")

    if prev_name:
        prev_link = f'''
            <td class="prev-ch-link">
              <a href="{prev}.html"> &lt;&lt;&lt; {idx-1}. {prev_name}</a>
            </td>
        '''

    if next_name:
        next_link = f'''
            <td class="next-ch-link">
              <a href="{nxt}.html">{idx+1}. {next_name} &gt;&gt;&gt; </a>
            </td>
        '''

    return f'''
        <table class="ch-links">
          <tr>
            {prev_link}
            {next_link}
          </tr>
        </table>
    '''


def convert_raw(cur, prev, nxt, idx):
    raw_filename = f'raw/{cur}.html'
    print("Converting raw file", raw_filename)
    destination_filename = raw_filename.replace('raw/', '')
    filename_only = raw_filename.split('/')[-1]
    chapter_links = generate_chapter_links(prev, nxt, idx)

    try:
        with open(raw_filename.replace("cap_", "ex_", 1).replace(".html", ".js")) as handle_exercises_file:
            handle_exercises_content = handle_exercises_file.read()
    except FileNotFoundError:
        handle_exercises_content = ""

    with open(raw_filename) as raw_file, open(destination_filename, 'w') as converted_file:
        print(HEADER, file=converted_file)
        print(chapter_links, file=converted_file)
        convert_raw_contents(raw_file.read(), idx, converted_file)
        print(chapter_links, file=converted_file)
        print(FOOTER.format(handle_exercises_js = handle_exercises_content), file=converted_file)


def tagify(line, chapter_number):
    """Wrap the line inside a tag with the given tagname.
    $tagname My content
    => <tagname>My content</tagname>
    """
    if line[0] == '$':
        tagname, *rest = line.split()
        tagname = tagname[1:]  # remove initial $
        chapter_label = ""
        if tagname == 'h1':
            chapter_label = str(chapter_number) + '. '
        return f"<{tagname}>{chapter_label}{replace_html_special_chars(' '.join(rest))}</{tagname}>"
    raise ValueError("Line must start with $ to tagify it.")


def convert_raw_contents(contents, chapter_number, converted_file):
    in_py_block = False
    py_block = []

    in_html_block = False
    html_block = []

    for raw_line in contents.splitlines():
        if not in_py_block and not in_html_block and len(raw_line) == 0:
            continue
        if raw_line.startswith("@py"):
            in_py_block = True
        elif raw_line.startswith("@end"):
            print(wrap_py_block(py_block), file=converted_file)
            py_block = []
            in_py_block = False
        elif in_py_block:
            py_block.append(raw_line)
        elif raw_line.startswith("!html"):
            in_html_block = True
        elif raw_line.startswith("!end"):
            print('\n'.join(html_block), file=converted_file)
            html_block = []
            in_html_block = False
        elif in_html_block:
            html_block.append(raw_line)
        else:
            print(convert_line(raw_line, chapter_number), file=converted_file)
            print(file=converted_file)


if __name__ == '__main__':
    chapters = [
        'introduction',
        'tutorial',
        'primitive_types',
        'functions',
        'control_flow',
        'sequence_types',
        'dictionaries',
        'sets',
        'collections',
        'classes',
    ]

    print()
    print(f"Converting {len(chapters)} chapters.")
    print()

    generate_index(chapters)

    idx = 1
    for cur, prev, nxt in zip(
        chapters, [None] + chapters[:-1], chapters[1:] + [None]
    ):
        convert_raw(cur, prev, nxt, idx)
        idx += 1
