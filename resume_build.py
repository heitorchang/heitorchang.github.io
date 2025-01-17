# Generate resume.html

# PROFESSIONAL_CONTENT format
# Company name, internal_id, [role, time, [responsibilities]]

professional_items = [
    {
        "company": "Belgingur, LLC., Reykjavik, Iceland (Remote)",
        "id": "belgingur",
        "roles": [
            {
                "title": "Senior Back-End Engineer",
                "time": "Jan. 2024 &ndash; present",
                "responsibilities": [
                    "Improved the flexibility of the Weather On Demand Python system by expanding the number of available configuration files.",
                    "Completed a linear regression model for forecasting weather variables based on the closest grid points.",
                    "Converted scientific Fortran code that models volcanic activity to Python modules that leverage NumPy and NetCDF libraries.",
                ]
            }
        ],
    },

    ("Freelance Software Engineer, São Paulo, SP" "freelance",
     ["Senior Full-Stack Developer", "Mar. 2023 &ndash; Dec. 2023",
      ["Created REST APIs in Python with FastAPI and backed by PostgreSQL to read time series data for various scenarios and deployed them to Google Cloud.",
       "Developed a static site generator in Python to mirror documents in a local directory and add a practical navigation interface.",
    ]]),
]

# Copy rest of items from resume-scm-final.html

def format_professional_items() -> str:
    template = '''<div>
    <h3>{company}
    '''

template = '''<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="resume_maven_web.css">
        <title>Heitor Chang - Resume</title>
    </head>
    <body>
      <h1>Heitor Chang</h1>

      <div id="contact">
        heitorchang@gmail.com &bull; https://heitorchang.github.io/
      </div>

      <div id="professional">
        <h2>Professional Experience</h2>
        <div>
          {professional_content}
        </div>
      </div>

      <div id="education">
        <h2>Education</h2>
        <div>
          {education_content}
        </div>
      </div>

      <div id="languages">
        <h2 class="skills">Skills</h2>
        <ul>
          <li>Advanced knowledge of <strong>Python</strong>.</li>
          <li>Intermediate knowledge of <strong>JavaScript</strong>, <strong>CSS</strong>, <strong>HTML</strong>, <strong>Django</strong>, and <strong>PostgreSQL</strong>.</li>
          <li>Fluent in <strong>English</strong> and <strong>Brazilian Portuguese</strong>.</li>
          <li>Intermediate knowledge of <strong>Italian</strong>.</li>
        </ul>
      </div>
    </body>
</html>
'''

if __name__ == "__main__":
    with open('resume.html', 'w') as outf:
        print(template.format(
            professional_content="PROFESSIONAL",
            education_content="EDUCATION",
        ), file=outf)
