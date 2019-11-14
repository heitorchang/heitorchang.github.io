from collections import namedtuple
from generate_projects import PROJECTS
from generate_resume import print_cv


TAILWIND_DIR = "tailwind/"
CONTENT = ["index_tailwind.html"]

CV_HEADER = TAILWIND_DIR + "cv_header.html"
HEADER = TAILWIND_DIR + "tailwind_navbar.html"
FOOTER = TAILWIND_DIR + "tailwind_footer.html"


if __name__ == "__main__":
    # Index
    for fname in CONTENT:
        with open(fname, 'w', encoding="utf-8") as fout:
            print(open(HEADER, encoding="utf-8").read(), file=fout)
            print(open(TAILWIND_DIR + fname, encoding="utf-8").read(), file=fout)
            print(open(FOOTER, encoding="utf-8").read(), file=fout)

            
    # Projects
    with open("projects.html", 'w', encoding='utf-8') as fout:
        print(open(HEADER, encoding="utf-8").read(), file=fout)
        
        for project in PROJECTS:
            print(project.title, file=fout)

        print(open(FOOTER, encoding="utf-8").read(), file=fout)

            
    # Resume
    with open("cv.html", 'w', encoding='utf-8') as fout:
        print(open(HEADER, encoding="utf-8").read(), file=fout)

        print("""
<div>
    <div class="flex bg-white rounded-lg p-6 max-w-sm mx-auto shadow-lg mt-8">
        <img class="h-24 w-24 rounded-full m-auto" src="img/heitor_profile.jpg" alt="profile">
        <div class="text-left">
            <h2 class="text-lg">Heitor Chang</h2>
            <div class="text-indigo-800">Desenvolvedor Full-Stack</div>
            <div class="text-gray-600"><a href="mailto:heitorpontual@gmail.com">heitorpontual@gmail.com</a></div>
            <div class="text-gray-600">(11) 99907-4867</div>
        </div>
    </div>
        """, file=fout)

        print_cv(fout)

        print("""</div> <!-- content -->""", file=fout)

        print(open(FOOTER, encoding="utf-8").read(), file=fout)


    # Resume printable
    with open("cv_print.html", 'w', encoding='utf-8') as fout:
        print(open(CV_HEADER, encoding="utf-8").read(), file=fout)

        print("""
<div>
    <div class="gent max-w-3xl text-2xl mx-auto mt-2 text-teal-900 px-8">
        <h2 class="text-center uppercase">Heitor Chang</h2>
    </div>

    <div class="gent max-w-3xl mx-auto mt-2 text-gray-900 text-center px-8">

        <div class="w-auto border-solid border-b border-gray-500 pb-2">
        heitorpontual@gmail.com &nbsp;&diams;&nbsp; (11) 3312-8845 &nbsp;&diams;&nbsp; (11) 99907-4867 &nbsp;&diams;&nbsp; https://heitorchang.github.io/
        </div>
    </div>

        """, file=fout)

        print_cv(fout, False)

        print("""
        <div class="mb-8">&nbsp;</div>
        </div></body></html> <!-- content -->""", file=fout)


    print("Manually add page break in cv_print.html with")
    print("""
    <p style="page-break-after: always;">&nbsp;</p>
    <p style="page-break-before: always;">&nbsp;</p>
    """)
