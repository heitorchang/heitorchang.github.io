from collections import namedtuple
from generate_projects import PROJECTS
from generate_resume import SECTIONS


TAILWIND_DIR = "tailwind/"
CONTENT = ["index_tailwind.html"]

HEADER = TAILWIND_DIR + "tailwind_navbar.html"
FOOTER = TAILWIND_DIR + "tailwind_footer.html"


if __name__ == "__main__":
    # Index and CV
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
    <div class="flex bg-white rounded-lg p-6 max-w-sm mx-auto shadow-lg">
        <img class="h-24 w-24 rounded-full m-auto" src="img/heitor_profile.jpg">
        <div class="text-left">
            <h2 class="text-lg">Heitor Chang</h2>
            <div class="text-indigo-800">Desenvolvedor Full-Stack</div>
            <div class="text-gray-600">heitorpontual@gmail.com</div>
            <div class="text-gray-600">(11) 99907-4867</div>
        </div>
    </div>
    <div class="gent max-w-3xl mx-auto mt-8 text-gray-800 px-8">        
        """, file=fout)
        
        for section in SECTIONS:
            print(f"""
        <h2 class="text-xl text-teal-800 mt-6 uppercase">{section.name}</h2>
            """, file=fout)

            for company in section.companies:
                print(f"""
            <h3 class="text-lg text-teal-700 mt-3 uppercase">{company.name}</h3>
                """, file=fout)

                for job in company.jobs:
                    print(f"""
        <div class="flex items-stretch border-solid border-b border-gray-500 mt-2">
            <div class="flex-1 text-left italic">{job.title}</div>
            <div class="flex-1 text-right italic">{job.dates}</div>
        </div>
                    
        <ul class="list-disc ml-8">
        """, file=fout)

                    for item in job.items:
                        print(f"""
            <li class="mt-3">{item}</li>
                        """, file=fout)

                    print("""
        </ul>
                    """, file=fout)

                    
        print("</div>", file=fout)
        print(open(FOOTER, encoding="utf-8").read(), file=fout)
            
