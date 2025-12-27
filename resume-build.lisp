;; Generate heitorchang.github.io Resume HTML

(ql:quickload "cl-who")

(setf (cl-who:html-mode) :html5)
(setf cl-who:*attribute-quote-char* #\")

(defparameter *output-file* #P"/home/hcbel/code/heitorchang.github.io/resume-staging.html")
(defparameter *professional-items*
  '((:company "Belgingur, LLC., Reykjavik, Iceland (Remote)"
     :id "belgingur"
     :roles ((:title "Senior Back-End Engineer"
              :period "Jan. 2024 &ndash; present"
              :responsibilities
                     ("Modernized a meteogram chart and map widget by refactoring it as a Lit-based web component with TypeScript, improving maintainability and reusability."
                      "Developed and implemented an automated Python pipeline to process raw radar data and assimilate it with wind and precipitation forecasts."
                      "Implemented a closest points linear regression model with SciPy in Python to reduce bias and statistical error."
                      "Migrated critical portions of a Fortran library for volcanic activity modeling into the main Python application, leveraging NumPy and NetCDF functionalities."))))

    (:company "Freelance Software Developer, São Paulo, SP"
     :id "freelance-2024"
     :roles ((:title "Senior Full-Stack Developer"
              :period "Mar. 2023 &ndash; Dec. 2023"
              :responsibilities
                     ("Created REST APIs in Python with FastAPI, backed by PostgreSQL, and deployed to Google Cloud to compare time series data between observed and forecasted precipitation."
                      "Developed a static site generator in Python to render and display documents with a practical navigation system."))))

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
              :period "Jun. 2020 &ndash; Aug. 2022"
              :responsibilities
                     ("Architected the company website in Django with custom user management and JWT authentication."
                      "Built FastAPI endpoints to communicate with a PostgreSQL database using Google Cloud Functions and Cloud Run, leveraging Docker containers and cloud Continuous Deployment."
                      "Created a geospatial dashboard containing satellite imagery overlays computed from NASA's scientific data and weather stations' historical data, obtained by accessing their public APIs."))))

    (:company "Pontual Export &amp; Import Ltd., São Paulo, SP"
     :id "pontual_update"
     :roles ((:title "Full-Stack Developer"
              :period "Jan. 2014 &ndash; Jun. 2020"
              :responsibilities
                     ("Used MA (Moving Average) indicators in a Django project to predict the demand for 600 products and calculate ideal amounts for restocking."
                      "Created a REST API with the PHP Slim framework for consumption by a React app in the client-facing website."))))))

(defun build-resume ()
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
        (:link :rel "stylesheet" :href "resume_build_v1.css")
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
               (:ul
                (:li "B.S. in Mathematical and Computational Science &mdash; Stanford University, CA.")
                (:li "Fluent in English and Brazilian Portuguese. Intermediate knowledge of Italian.")))))))))
