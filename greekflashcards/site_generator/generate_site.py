# Take filenames in wordlists/ and produce index.html, practice_WORDLIST.html

import os
import glob
import re
from pathlib import Path


INDEX_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/greekflashcards/{version}/style_v2.css">
    <title>Greek Flashcards</title>
  </head>
  <body>
    <h3>Greek Flashcards (version {version})</h3>

<h4>Word lists</h4>

    <ul>
{li_items}
    </ul>
<br><br><br><br><br>
  </body>
</html>
"""


PRACTICE_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style_v2.css">
    <title>Greek Flashcards</title>
  </head>
  <body>

    <h4><a href="index.html">&lt;&lt; Choose another word list</a></h4>

    <h3>{pretty}</h3>
    <p>
The words used are in <a href="table_{filename}.html">this table</a>
    </p>

    <div>
      <button onclick="replay()">Restart</button>
    </div>

    <div id="flashcard">
      <div id="greeksection" style="margin-right: 2rem;">
      </div>
      <div id="englishsection" class="white"></div>


      <div id="ui" class="hidden">
        <div style="margin-top: 1rem;">
          Your translation:
          <input type="text" id="guess" size="10" onkeyup="checkguess()">
          <br>
          <span id="message">&nbsp;</span>
        </div>

        <div style="margin-top: 1rem;">
<button id="revealbutton" onclick="reveal()">Reveal English</button>
&nbsp;&nbsp;&nbsp;
<button id="nextbutton" onclick="next()">Next word(s)</button>
        </div>
      </div>
    </div>
    <span id="ansholder" style="color: white;"></span>
    <script src="wordlists/{filename}.js"></script>
    <script src="app.js"></script>
    <script src="practice_v3.js"></script>
    <script>
    replay();
    </script>
  </body>
</html>
"""

TABLE_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style_v2.css">
    <title>Greek Flashcards</title>
  </head>
  <body>
    <h3><a href="practice_{filename}.html">Back to Practice</a></h3>

    <table id="tableelem">
    </table>

    <script src="wordlists/{filename}.js"></script>
    <script src="app.js"></script>
    <script>
    populateTable();
    </script>
  </body>
</html>
"""

GREEK_ONLY_TEMPLATE = """
<!DOCTYPE html>
<html lang="el">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style_v2.css">
    <title>Greek Flashcards</title>
  </head>
  <body>
    <h3><a href="practice_{filename}.html">Άσκηση</a></h3>
{greek_words}
  </body>
</html>
"""


def pretty_filename(f):
    return f.title().replace("_", " ")


def generate_index_word_links(version, filenames):
    """ Convert filenames into list of <li>...</li> """
    output = ""
    for f in filenames:
        output += f"<li><a href='/greekflashcards/{version}/practice_{f}.html'>{pretty_filename(f)}</a></li>\n"
    return output


def generate_site():
    VERSION = "ver_athens"

    GEN_DIR = Path(os.path.dirname(__file__))
    WORDLISTS_DIR = GEN_DIR.parent / VERSION / "wordlists"
    HOME_DIR = GEN_DIR.parent

    greek_rx = re.compile(r'\[\s*"([^"]*)"')

    filenames = []
    for wordlist_file in glob.glob(str(WORDLISTS_DIR) + "/*.js"):
        filenames.append(os.path.basename(wordlist_file)[:-3])  # remove .js extension

    filenames = sorted(filenames)
    with open(HOME_DIR / VERSION / "index.html", "w") as index_out:
        print(INDEX_TEMPLATE.format(version=VERSION, li_items=generate_index_word_links(VERSION, filenames)), file=index_out)

    for f in filenames:
        with open(HOME_DIR / VERSION / f"practice_{f}.html", "w") as practice_out:
            print(PRACTICE_TEMPLATE.format(version=VERSION, filename=f, pretty=pretty_filename(f)), file=practice_out)

        with open(HOME_DIR / VERSION / f"table_{f}.html", "w") as table_out:
            print(TABLE_TEMPLATE.format(version=VERSION, filename=f), file=table_out)

        '''
        with open(HOME_DIR / f"greek_only_{f}.html", "w") as greek_only_out:
            with open(WORDLISTS_DIR / f"{f}.js") as wordlist_in:
                greek_words = ""
                for line in wordlist_in:
                    if len(line) < 5 or line[0] != " ":
                        continue
                    match = greek_rx.search(line)
                    if match:
                        first = match.group(1)
                        greek_words += "<p>" + first + "</p>"
                print(GREEK_ONLY_TEMPLATE.format(filename=f, greek_words=greek_words), file=greek_only_out)
        '''

    # write index.html to top level as well
    with open(HOME_DIR / "index.html", "w") as index_out:
        print(INDEX_TEMPLATE.format(version=VERSION, li_items=generate_index_word_links(VERSION, filenames)), file=index_out)


if __name__ == "__main__":
    generate_site()
