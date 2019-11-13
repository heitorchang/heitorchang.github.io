TAILWIND_DIR = "tailwind/"
CONTENT = ["index_tailwind.html", "home.html", "cv.html", "projects.html"]

HEADER = TAILWIND_DIR + "tailwind_navbar.html"
FOOTER = TAILWIND_DIR + "tailwind_footer.html"


if __name__ == "__main__":
    for fname in CONTENT:
        with open(fname, 'w', encoding="utf-8") as fout:
            print(open(HEADER, encoding="utf-8").read(), file=fout)
            print(open(TAILWIND_DIR + fname, encoding="utf-8").read(), file=fout)
            print(open(FOOTER, encoding="utf-8").read(), file=fout)
                
