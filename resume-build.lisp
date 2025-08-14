;; Generate heitorchang.github.io Resume HTML

(ql:quickload "cl-who")

(defparameter *output-file* #P"/home/hcbel/code/heitorchang.github.io/resume.html")
(defparameter *professional-items*
  '((:company "Belgingur, LLC., Reykjavik, Iceland (Remote)"
     :id "belgingur"
     :roles ((:title "Senior Back-End Engineer"
              :period "Jan. 2024 &ndash; present"
              :responsibilities
              ("Developed an automated Python system that processes raw radar data to be assimilated into wind and precipitation forecasts."
               "Implemented a closest points linear regression model to reduce bias and statistical error."
               "Converted scientific Fortran code that models volcanic activity to Python modules that leverage NumPy and NetCDF libraries."))))

    (:company "Freelance Software Developer, São Paulo, SP"
     :id "freelance-2024"
     :roles ((:title "Senior Full-Stack Developer"
              :period "Mar. 2023 &ndash; Dec. 2023"
              :responsibilities
              ("Created REST APIs in Python with FastAPI and backed by PostgreSQL to read time series data for various scenarios and deployed them to Google Cloud."
               "Developed a static site generator in Python to mirror documents with a practical navigation system."))))

    (:company "Mediafly, Inc., Chicago, IL (Remote)"
     :id "mediafly"
     :roles ((:title "Senior Software Engineer, Data and Client Squad"
              :period "Aug. 2022 &ndash; Feb. 2023"
              :responsibilities
              ("Extended a Python back-end service handling customer integration with Salesforce's API to allow the creation of new objects with custom metadata."
               "Corrected data inconsistencies in the Python pipeline code and upgraded the audio processor to attenuate noise and remove segments of silence."))))

    (:company "Tempo OK Tecnologia em Meteorologia Ltd., São Paulo, SP"
     :id "tempook"
     :roles ((:title "Senior Full-Stack Developer"
              :period "June 2020 &ndash; Aug. 2022"
              :responsibilities
              ("Architected the company website in Django with custom user management and JWT authentication."
               "Built FastAPI endpoints to communicate with a PostgreSQL database using Google Cloud Functions and Cloud Run, leveraging Docker containers and cloud Continuous Deployment."
               "Created a geospatial dashboard containing satellite imagery overlays computed from NASA's scientific data and weather stations' historical data, obtained by accessing their public APIs."))))))

(defun build-resume ()
  (setf (cl-who:html-mode) :html5)
  (setf cl-who:*attribute-quote-char* #\")

  (with-open-file (out *output-file*
                       :direction :output
                       :if-exists :supersede)
    (cl-who:with-html-output (out nil :prologue t :indent 4)
      (:html
       :lang "en"
       (:head
        (:meta :charset "utf-8")
        (:meta :name "description" :content "Generated with resume-build")
        (:meta :name "viewport" :content "width=device-width, initial-scale=1")
        (:link :rel "stylesheet" :href "resume_maven_web.css")
        (:title "Heitor Chang - Resume"))
       (:body
        (:h1 "Heitor Chang")

        (:div :id "contact"
              "heitorchang@gmail.com &bull; https://heitorchang.github.io/")

        (:div :id "professional"
              (:h2 "Professional Experience")
              (:div
               (dolist (pro-item *professional-items*)
                 (cl-who:htm
                  (:div
                   (:h3
                    :id (getf pro-item :id)
                    (cl-who:str (getf pro-item :company)))
                   (dolist (role (getf pro-item :roles))
                     (cl-who:htm
                      (:div
                       (:div :class "prof-header-container"
                             (:div :class "prof-header-title"
                                   (cl-who:str (getf role :title)))
                             (:div :class "prof-header-dates"
                                   (cl-who:str (getf role :period))))
                       (:ul
                        (dolist (responsibility (getf role :responsibilities))
                          (cl-who:htm
                           (:li (cl-who:str responsibility)))))))))))))

        (:div :id "education"
              (:h2 "Education")
              (:div
               (:h3 :class "education" "Stanford University, Stanford, CA")
               (:div :class "major" "M.S. in Materials Science and Engineering, B.S. in Mathematical and Computational Science")))

        (:div :id "languages"
              (:h2 :class "skills" "Skills")
              (:ul
               (:li "Advanced knowledge of "
                    "Python. "
                    "Intermediate knowledge of "
                    "JavaScript, "
                    "Django, "
                    "and "
                    "PostgreSQL.")
               (:li "Fluent in "
                    "English "
                    "and "
                    "Brazilian Portuguese. "
                    "Intermediate knowledge of "
                    "Italian."))))))))
