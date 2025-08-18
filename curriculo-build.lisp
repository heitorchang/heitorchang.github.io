;; Generate heitorchang.github.io Curriculo HTML

(ql:quickload "cl-who")

(setf (cl-who:html-mode) :html5)
(setf cl-who:*attribute-quote-char* #\")

(defparameter *output-file* #P"/home/hcbel/code/heitorchang.github.io/curriculo.html")
(defparameter *professional-items*
  '((:company "Belgingur, LLC., Reykjavik, Islândia (Remoto)"
     :id "belgingur"
     :roles
     ((:title
       "Desenvolvedor Backend Sênior"
       :period "Jan. 2024 &ndash; atual"
       :responsibilities
       ("Desenvolvi um sistema automatizado em Python que processa dados brutos de radares para serem assimilados em previsões de vento e precipitação."
        "Implementei um modelo de regressão por pontos mais próximos para reduzir viés e erro estatístico."
        "Converti código científico em Fortran, que modela a atividade vulcânica, em módulos Python que incluem as bibliotecas NumPy e NetCDF."))))

    (:company "Desenvolvedor Freelance, São Paulo, SP"
     :id "freelance-2024"
     :roles
     ((:title
       "Desenvolvedor Fullstack Sênior"
       :period "Mar. 2023 &ndash; Dez. 2023"
       :responsibilities
       ("Criei APIs REST em Python com FastAPI e integradas a um banco de dados PostgreSQL para ler dados de séries temporais em diversos cenários e as implantei no Google Cloud."
        "Desenvolvi um gerador de sites estáticos em Python para espelhar documentos com um sistema de navegação prático."))))

    (:company "Mediafly, Inc., Chicago, IL (Remoto)"
     :id "mediafly"
     :roles
     ((:title
       "Desenvolvedor Backend Sênior, Equipe de Dados e Clientes"
       :period "Ago. 2022 &ndash; Fev. 2023"
       :responsibilities
       ("Ampliei um serviço back-end em Python que gerencia a integração de clientes com a API do Salesforce para permitir a criação de novos objetos com metadados personalizados."
        "Corrigi inconsistências de dados no código do pipeline Python e atualizei o processador de áudio para atenuar ruídos e remover trechos de silêncio."))))

    (:company "Tempo OK Tecnologia em Meteorologia Ltda., São Paulo, SP"
     :id "tempook"
     :roles
     ((:title
       "Desenvolvedor Fullstack Sênior"
       :period "Jun. 2020 &ndash; Ago. 2022"
       :responsibilities
       ("Projetei o site institucional em Django com gerenciamento de usuários customizado e autenticação baseado em JWT."
        "Desenvolvi endpoints em FastAPI para comunicação com um banco de dados PostgreSQL usando Google Cloud Functions e Cloud Run, aproveitando contêineres Docker e implantação contínua."
        "Criei um painel geoespacial contendo a renderização de imagens de satélite calculadas a partir de dados científicos da NASA e de estações meteorológicas obtidos das APIs públicas."))))))

(defun build-curriculo ()
  (with-open-file (out *output-file*
                       :direction :output
                       :if-exists :supersede)
    (cl-who:with-html-output (out nil :prologue t :indent 4)
      (:html
       :lang "en"
       (:head
        (:meta :charset "utf-8")
        (:meta :name "description" :content "Generated with curriculo-build")
        (:meta :name "viewport" :content "width=device-width, initial-scale=1")
        (:link :rel "stylesheet" :href "resume_maven_web.css")
        (:title "Heitor Chang - Currículo"))
       (:body
        (:h1 "Heitor Chang")

        (:div :id "contact"
              "heitorchang@gmail.com &bull; https://heitorchang.github.io/")

        (:div :id "professional"
              (:h2 "Experiência Profissional")
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
              (:h2 "Formação Acadêmica")
              (:div
               (:h3 :class "education" "Stanford University, Stanford, CA")
               (:div :class "major" "Graduado em Matemáticas Aplicadas e Pós-graduado em Ciências e Engenharia de Materiais")))

        (:div :id "languages"
              (:h2 :class "skills" "Habilidades")
              (:ul
               (:li "Conhecimento avançado de "
                    "Python. "
                    "Conhecimento intermediário de "
                    "JavaScript, "
                    "Django, "
                    "e "
                    "PostgreSQL.")
               (:li "Fluente em "
                    "inglês "
                    "e "
                    "português. "
                    "Conhecimento intermediário de "
                    "italiano."))))))))
