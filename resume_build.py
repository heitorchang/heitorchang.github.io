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
                    "Completed a closest points linear regression model for weather forecasting",
                    "Converted scientific Fortran code that models volcanic activity to Python modules that leverage NumPy and NetCDF libraries.",
                ]
            },
        ],
    },

    # {
    #     "company": "Freelance Software Engineer, São Paulo, SP",
    #     "id": "freelance",
    #     "roles": [
    #         {
    #             "title": "Senior Full-Stack Developer",
    #             "time": "Mar. 2023 &ndash; Dec. 2023",
    #             "responsibilities": [
    #                 "Created REST APIs in Python with FastAPI and backed by PostgreSQL to read time series data for various scenarios and deployed them to Google Cloud.",
    #                 "Developed a static site generator in Python to mirror documents in a local directory and add a practical navigation interface.",
    #             ]
    #         },
    #     ],
    # },

    {
        "company": "Mediafly, Inc., Chicago, IL (Remote)",
        "id": "mediafly",
        "roles": [
            {
                "title": "Senior Software Engineer, Data and Client Squad",
                "time": "Aug. 2022 &ndash; Feb. 2023",
                "responsibilities": [
                    "Extended a Python back-end service handling customer integration with Salesforce's API to allow the creation of new custom objects holding metadata.",
                    "Improved the Python video call processing pipeline, filtering out unwanted blocks of silence.",
                    "Corrected multiple occurrences of temporary files not being cleared and other data inconsistencies in the Python pipeline code.",
                ]
            },
        ],
    },

    {
        "company": "Tempo OK Tecnologia em Meteorologia Ltd., São Paulo, SP",
        "id": "tempook",
        "roles": [
            {
                "title": "Senior Full-Stack Developer",
                "time": "June 2020 &ndash; Aug. 2022",
                "responsibilities": [
                    "Built and administered the public-facing website with Django, including custom user management and authentication with a JWT extension.",
                    "Built FastAPI endpoints to communicate with a PostgreSQL database using Google Cloud Functions and Cloud Run, leveraging Docker containers and Continuous Deployment.",
                    "Created a geospatial dashboard containing satellite imagery overlays computed from NASA's scientific data and weather stations' historical data, obtained by accessing their public APIs.",
                ]
            },
        ],
    },

]


education_items = [
    # {
    #     "university": "New York University, New York, NY",
    #     "majors": [
    #         "M.S. in Financial Mathematics",
    #     ],
    # },
    {
        "university": "Stanford University, Stanford, CA",
        "majors": [
            "M.S. in Materials Science and Engineering",
            "B.S. in Applied Mathematics",
        ],
    },
]

def format_role(role):
    template = """
    <div>
      <div class="prof-header-container">
        <div class="prof-header-title">{title}</div>
        <div class="prof-header-dates">{time}</div>
      </div>
      <ul>
        {responsibilities_formatted}
      </ul>
    </div>
    """
    return template.format(**role, responsibilities_formatted=format_responsibilities(role['responsibilities']))


def format_responsibilities(responsibilities):
    return "\n".join(f"<li>{r}</li>" for r in responsibilities)


def create_professional_item(company_dict):
    template = """
    <div>
      <h3 id="{id}">{company}</h3>
    {roles_formatted}
    </div>
    """
    roles_formatted = ""
    for role in company_dict['roles']:
        roles_formatted += format_role(role)

    return template.format(**company_dict, roles_formatted=roles_formatted)


def format_professional_items() -> str:
    template = """<div>
    {professional_formatted}
    </div>
    """
    professional_formatted = ""
    for item in professional_items:
        professional_formatted += create_professional_item(item)
    return template.format(professional_formatted=professional_formatted)


def format_majors(majors):
    return "\n".join(f'<div class="major">{major}</div>' for major in majors)


def format_education_item(education_item):
    return """<div>
    <h3 class="education">{university}</h3>
      <div>
        {formatted_majors}
      </div>
    </div>
    """.format(**education_item, formatted_majors=format_majors(education_item['majors']))


def format_education():
    return "\n".join(format_education_item(e) for e in education_items)


template = """<!DOCTYPE html>
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
          {professional_content}
      </div>

      <div id="education">
        <h2>Education</h2>
          {education_content}
      </div>

      <div id="languages">
        <h2 class="skills">Skills</h2>
        <ul>
          <li>Advanced knowledge of <strong>Python</strong>.</li>
          <li>Intermediate knowledge of <strong>JavaScript</strong>, <strong>CSS</strong>, <strong>HTML</strong>, <strong>Django</strong>, and <strong>PostgreSQL</strong>.</li>
          <li>Fluent in <strong>English</strong> and <strong>Brazilian Portuguese</strong>. Intermediate knowledge of <strong>Italian</strong>.</li>
        </ul>
      </div>
    </body>
</html>
"""

if __name__ == "__main__":
    with open('resume.html', 'w') as outf:
        print(template.format(
            professional_content=format_professional_items(),
            education_content=format_education(),
        ), file=outf)
