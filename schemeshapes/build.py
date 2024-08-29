"""
To run this script:
python3 build.py

it will read HTML files in raw/ defined at the bottom (the chapters variable) and generate the front-end HTML files.

Writing raw files:
Begin each line with $TAG_NAME, then write the contents in a single line.

If TAG_NAME is omitted, a <p> will be created.

Example:
$h1 My Cool Page

This is a paragraph with some content.
(end of example)


Text inside backticks `this is an expression` is converted to <code>this is an expression</code>.

Code can be written as

$pre (a-function param-1)

or with pre blocks, which begin and end with <pre> and </pre>

<pre>
(define pre-content ...)
</pre>

Code written in these two methods will be evaluated automatically. To skip evaluation, write

$skip (a-function param-1)

or

<pre class="skip">
(code-to-skip-evaluation)
</pre>

A raw HTML block is marked with !html and ends with !end

!html
<table>
  <tr><td>A</td><td>B</td></tr>
  <tr><td>10</td><td>20</td></tr>
</table>
!end
"""

import re

book_title = "SCREEN 7"

HEADER = f'''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="repl.css">
    <title>SCREEN 7</title>
    <script src="mathjax/tex-chtml.js" id="MathJax-script" async></script>
  </head>
  <body>
    <script src="biwascheme-0.8.0-custom.js"></script>
    <div id="content">
      <div class="grid">
        <div id="editor">
          <div id="input-area">
            <textarea id="replInput" rows="4" cols="43" autofocus></textarea>
          </div>
        </div>

        <div id="consoleWrapper" class="biwaReady">
          <div id="bs-console"></div>
        </div>

        <div id="graphicsout">
          <canvas id="canvas" width="360" height="360"></canvas>
        </div>

        <div id="book" class="ltYellow">
          <div style="text-align: center;"><strong><a href="index.html">Table of Contents</a></strong></div>
'''

FOOTER = '''
          <div style="text-align: center;"><strong><a href="index.html">Table of Contents</a></strong></div>
        </div>
      </div>
    </div>

    <script src="repl.js"></script>
    <script src="app.js"></script>
    <script src="onload.js"></script>
    <script type="text/biwascheme">
    (load "api2d.scm")
    </script>
  </body>
</html>
'''


INDEX_TEMPLATE_HEADER = f'''
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="style.css">
    <title>{book_title}</title>
  </head>
  <body class="indexDiv ltYellow">
    <div style="font-family: sans-serif; max-width: 60rem; margin: auto; padding: 2.5rem; text-align: left;">

<h1 style="margin-top: 2rem;">{book_title}</h1>
<p class="index-subtitle">
  <em>An introductory book on programming, using the Scheme language and 2-D graphics.</em>
<br><br>
by <a href="https://heitorchang.github.io/" target="_blank">Heitor Chang</a>
</p>
<p class="index-p">
<a href="credits.html" class="home-chapter-link">Credits and License</a>
</p>
<p>&nbsp;</p>
'''

INDEX_TEMPLATE_FOOTER = '''
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


def generate_index(parts):
    print(f"Generating index")
    with open(f"index.html", 'w') as index_f:
        print(INDEX_TEMPLATE_HEADER, file=index_f)
        chapter_num = 1
        for part in parts:
            print(f"<h2>{part}</h2>", file=index_f)
            for n in parts[part]:
                print(n)
                print(generate_index_chapter_link(n, chapter_num), file=index_f)
                chapter_num += 1
        print(INDEX_TEMPLATE_FOOTER, file=index_f)


def replace_html_special_chars(line):
    line = line.replace(" < ", " &lt; ")
    line = line.replace(" > ", " &gt; ")
    line = line.replace("(<", "(&lt;")
    line = line.replace("(>", "(&gt;")
    line = line.replace("->", "-&gt;")
    line = line.replace("=>", "=&gt;")
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
    extra_attr = ""
    if tagname == 'pre':
        extra_attr = ' class="codeBlock"'
    elif tagname == 'skip':
        extra_attr = ' class="skip"'
        tagname = 'pre'
    backtick_template = re.compile(r'`([^`]*?)`')
    contents = replace_html_special_chars(' '.join(rest))
    contents = re.sub(backtick_template, r'<code>\1</code>', contents)
    return f"<{tagname}{extra_attr}>{chapter_label}{contents}</{tagname}>"

def wrap_pre_block(lines, cls_name="codeBlock"):
    textarea_contents = ''
    textarea_contents += f'''<pre class="{cls_name}">'''
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
              <a href="{prev}.html"> &lt; {idx-1}. {prev_name}</a>
            </td>
        '''

    if next_name:
        next_link = f'''
            <td class="next-ch-link">
              <a href="{nxt}.html">{idx+1}. {next_name} &gt; </a>
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
    in_pre_block = False
    pre_block = []

    in_html_block = False
    html_block = []

    backtick_template = re.compile(r'`([^`]*?)`')

    for raw_line in contents.splitlines():
        if not in_pre_block and not in_html_block and len(raw_line) == 0:
            continue
        if raw_line.startswith("<pre"):  # cover <pre> and <pre class="skip">
            in_pre_block = True
            pre_class = "codeBlock"
            if "skip" in raw_line:
                pre_class = "skip"
        elif raw_line.startswith("</pre>"):
            print(wrap_pre_block(pre_block, pre_class), file=converted_file)
            pre_block = []
            in_pre_block = False
        elif in_pre_block:
            converted_line = replace_html_special_chars(raw_line)
            converted_line = re.sub(backtick_template, r'<code>\1</code>', converted_line)
            pre_block.append(converted_line)
        elif raw_line.startswith("!html"):
            in_html_block = True
        elif raw_line.startswith("!end"):
            print('\n'.join(html_block), file=converted_file)
            html_block = []
            in_html_block = False
        elif in_html_block:
            converted_line = replace_html_special_chars(raw_line)
            converted_line = re.sub(backtick_template, r'<code>\1</code>', converted_line)
            html_block.append(converted_line)
        else:
            print(convert_line(raw_line, chapter_number), file=converted_file)
            print(file=converted_file)


if __name__ == '__main__':
    idx = 1

    parts = {
        "The Scheme Language": [
            'printing-and-drawing', 'arithmetic-functions', 'strings-variables', 'cartesian-plane', 'lists', 'conditionals', 'first-class-functions', 'recursion',
        ],
        # "Part II: Algebra": ['quadratic-equations'],
        "Reference": [
            'api_reference',
        ]
    }

    generate_index(parts)
    chapters = []
    for part in parts:
        for c in parts[part]:
            chapters.append(c)
    for cur, prev, nxt in zip(chapters, [None] + chapters[:-1], chapters[1:] + [None]):
        convert_raw(cur, prev, nxt, idx)
        idx += 1
