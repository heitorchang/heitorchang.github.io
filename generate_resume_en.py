# Generate printable version of English resume

TAILWIND_DIR = "tailwind/"
CV_HEADER = TAILWIND_DIR + "cv_header.html"

class Job:
    def __init__(self, title, dates, items):
        self.title = title
        self.dates = dates
        self.items = items


class Stanford:
    def __init__(self, title, dates, title2, dates2):
        self.title = title
        self.dates = dates
        self.title2 = title2
        self.dates2 = dates2
    
        
class Company:
    def __init__(self, name, jobs):
        self.name = name
        self.jobs = jobs


class ResumeSection:
    def __init__(self, name, companies):
        self.name = name
        self.companies = companies
        
        
pontual = Company("Pontual Export &amp; Import Ltd., São Paulo, SP",
                  [Job("Full-Stack Developer",
                       "Jan. 2014 &mdash; now",                       
                       ["Use MA (Moving Average) indicators in a Django and Python project to predict the demand of 600 products and calculate an adequate amount for restocking.",
                        "Create a REST API with the Slim micro framework (PHP) to be consumed by a React app that renders the company's website, <a href=\"http://pontualimportbrindes.com.br/\" target=\"_blank\">http://pontualimportbrindes.com.br/</a>",
                        "Visualize historical sales with NumPy and Pandas, reporting averages and outliers for each product.",
                        "Create a Single-Page App with AngularJS and Firebase to organize the reservations by client and salesperson in real time."]),

                   Job("Administrative Assistant",
                       "Nov. 2011 &mdash; Dec. 2013",
                       ["Fulfill client orders and reservations and formalize them upon delivery.",
                        "Prepare sales forecasts in Excel for the bestselling products and summarize important statistics."])])


merrill = Company("Merrill Lynch &amp; Co., Inc., New York, NY",
                  [Job("Summer Associate, Global Research",
                       "June 2008 &mdash; Aug. 2008",
                       ["Modeled the prepayment speeds of mortgage revenue bonds and calculated their prices and risk profiles.",
                        "Backtested the performance of a cash-collaterized portfolio of futures as a potential new product.",
                        "Compared the returns and volatility of crude oil futures relative to large-cap refinery equities."])])


stux = Company("Stux Capital Management, LLC, New York, NY",
               [Job("Estagiário, Investimentos em Ações",
               "Feb. 2008 &mdash; Abr. 2008",
               ["Consolidar, otimizar e checar erros em planilhas de rendas mensais.",
                "Desenvolver uma interface visual que comunica em tempo real com um banco de dados para ver o lucro de um fundo de investimentos, aumentando a produtividade e minimizando erros."])])


adair = Company("Adair Capital, LLC, New York, NY",
                [Job("Estagiário, Fundo de Fundos de Cobertura",
                "Set. 2007 &mdash; Jan. 2008",
                ["Calcular níveis de risco entre fundos, correlacionando estratégias de fundos de cobertura com fatores de risco macroeconômicos para prever os lucros de fundos específicos.",
                 "Desenvolver um GUI no Matlab que implementa um processo Brownian Bridge para medir a exposição de fundos de cobertura a índices de referência e detectar possíveis mudanças nas suas estratégias de investimento."])])

                 
COMPANIES = [pontual, merrill] # , stux, adair]


stan_ug = Company("Stanford University, Stanford, CA",
                  [Stanford("M.S. in Materials Science and Engineering, GPA 3.6/4.0",
                            "Sept. 2005 &mdash; June 2007",
                            "B.S. in Mathematical and Computational Sciences, GPA 3.7/4.0",
                            "Sept. 2001 &mdash; June 2005")])


grad_school = Company("Pós-graduação: Stanford University, Stanford, CA",
                      [Job("Ciência e Engenharia de Materiais",
                           "Set. 2005 &mdash; Jun. 2007",
                           ["Master of Science, GPA 3.6/4.0"])])

nyu = Company("New York University, New York, NY",
              [Job("M.S. in Mathematics in Finance, GPA 3.4/4.0",
                   "Sept. 2007 &mdash; Jan. 2009", [])])

SCHOOLS = [nyu, stan_ug]


materiais = Company("Departamento de Ciência e Engenharia de Materiais, Stanford University, Stanford, CA",
                    [Job("Assistente de Pesquisas de Propriedades Mecânicas, Prof. R. H. Dauskardt",
                         "Jun. 2005 &mdash; Fev. 2007",
                         ["Construir simulações de fratura para prever a estabilidade de nanomateriais porosos inovadores.",
                          "Otimizar scripts Matlab em programas C, acelerando cálculos que demoravam um dia para aproximadamente duas horas."])])


carnegie = Company("Carnegie Institution for Science, Stanford, CA",
                   [Job("Assistente de Pesquisas Genéticas, Dra. Susan S. Thayer",
                        "Mar. 2004 &mdash; Jun. 2004",
                        ["Realizar análises de regressão em SAS para identificar correlações estatisticamente significativas entre oito conjuntos de dados."])])


ACADEMICA = [materiais, carnegie]


criar = Company("Criar &amp; Criar Art Design, São Paulo, SP",
                [Job("Web Designer",
                     "Out. 2017 &mdash; Dez. 2017",
                     ["Atualizar e manter o catálogo de produtos decorativos e sustentáveis no Blogspot."])])

oca = Company("OCA Escola Cultural, Carapicuíba, SP",
              [Job("Manutenção de Sistema, Ubuntu Linux",
                   "Set. 2017",
                   ["Configurar e instalar o gerenciador de bibliotecas Biblivre 5 dentro de um ambiente em nuvem."])])

VOLUNTARIO = [criar, oca]


polylexis = Company("Polylexis.com",
                    [Job("Desenvolvedor Full-Stack",
                         "Ago. 2019 &mdash; atual",
                         ["Desenvolver e manter o site Django com vocabulário, testes e um mini-dicionário do grego moderno."])])


hellokey = Company("Hello Key English",
                   [Job("Designer e Desenvolvedor Full-Stack",
                        "Out. 2019 &mdash; Nov. 2019",
                        ["Gerenciar uma lista de alunos e um calendário de aulas particulares de inglês com o site Django.",
                        "Desenhar uma interface otimizada para celular com o framework Bootstrap 4."])])


PESSOAIS = [polylexis, hellokey]

# Sections

experiencia_profissional = ResumeSection("Professional Experience",
                                         COMPANIES)

formacao_academica = ResumeSection("Education",
                                   SCHOOLS)

experiencia_academica = ResumeSection("Experiência Acadêmica", ACADEMICA)

trabalho_voluntario = ResumeSection("Trabalho Voluntário", VOLUNTARIO)

projetos_pessoais = ResumeSection("Projetos Pessoais", PESSOAIS)


SECTIONS = [experiencia_profissional, formacao_academica] # , experiencia_academica, trabalho_voluntario, projetos_pessoais]


def print_cv(fout, print_pdf=True):

    try:
        print("""
    <div class="gent max-w-3xl mx-auto mt-2 text-gray-800 px-8">
""", file=fout)

        if print_pdf:
            print("""
        <!-- PDF icon -->
        <div class="flex bg-white p-2 mx-auto">
        <a href="resume/HeitorChang_pt.pdf">
        <img src="img/pdficon.png" alt="PDF">
        </a>
        </div>

        """, file=fout)

        for section in SECTIONS:
            if not print_pdf:
                section_mt = "mt-4"
                company_mt = "mt-3"
                li_mt = "mt-1"
            else:
                section_mt = "mt-4"
                company_mt = "mt-6"
                li_mt = "mt-3"
                
                
            print(f"""
        <h2 class="text-xl text-teal-800 {section_mt} uppercase">{section.name}</h2>
            """, file=fout)

            for company in section.companies:
                print(f"""
            <h3 class="text-lg text-teal-700 {company_mt} border-solid border-b border-gray-500 uppercase">{company.name}</h3>
                """, file=fout)

                for job in company.jobs:

                    if isinstance(job, Job):
                        print(f"""
                        <div class="flex items-stretch mt-2">
                        <div class="w-2/3 text-left italic">{job.title}</div>
                        <div class="w-1/3 text-right italic">{job.dates}</div>
                        </div>
                        
                        <ul class="list-disc ml-8">
                        """, file=fout)
                        for item in job.items:
                            print(f"""
                            <li class="{li_mt}">{item}</li>
                            """, file=fout)
                            
                        print("""
                        </ul>
                        """, file=fout)
                    else:
                        print(f"""
                        <div class="flex items-stretch mt-2">
                        <div class="w-2/3 text-left italic">{job.title}</div>
                        <div class="w-1/3 text-right italic">{job.dates}</div>
                        </div>

                        <div class="flex items-stretch mt-2">
                        <div class="w-2/3 text-left italic">{job.title2}</div>
                        <div class="w-1/3 text-right italic">{job.dates2}</div>
                        </div>

                        """, file=fout)



        # Idiomas
        IDIOMAS = (('Fluent in <b>English</b> and <b>Portuguese</b>. Intermediate knowledge of <b>Mandarin</b>, <b>Spanish</b> and <b>French</b>.', ''),
                   ('Advanced knowledge of <b>Python 3</b> and <b>JavaScript (ES6)</b>.', ''),
                   ('Intermediate knowledge of <b>PHP 7</b> and <b>Java 8</b>.', ''))
        
        
        
        print("""        <h2 class="text-xl text-teal-800 mt-4 uppercase">Languages</h2>""", file=fout)

        print("""

        <ul class="list-disc ml-8">
        """, file=fout)

        for idioma in IDIOMAS:
            print(f"""
          <li class="mt-1">
            <div class="flex w-auto">
              <div class="w-full">{idioma[0]}</div>
            </div>
          </li>
            """, file=fout)
            
        print("""
        </ul>
        """, file=fout)


        print("""    </div> <!-- CV gent font -->""", file=fout)

    except Exception as e:
        print("An exception occurred", e)


if __name__ == "__main__":
    with open("cv_en_print.html", 'w', encoding='utf-8') as fout:
        print(open(CV_HEADER, encoding="utf-8").read(), file=fout)

        print("""
<div>
    <div class="gent max-w-3xl text-2xl mx-auto mt-2 text-teal-900 px-8">
        <h2 class="text-center uppercase">Heitor Chang</h2>
    </div>

    <div class="gent max-w-3xl mx-auto mt-2 text-gray-900 text-center px-8">

        <div class="w-auto border-solid border-b border-gray-500 pb-2">
        heitorpontual@gmail.com &nbsp;&diams;&nbsp; (11) 99907-4867 &nbsp;&diams;&nbsp; https://heitorchang.github.io/
        </div>
    </div>

        """, file=fout)

        print_cv(fout, False)

        print("""
        </div></body></html> <!-- content -->""", file=fout)

        print("Manually add page break in cv_print.html with")
        print("""
    <p style="page-break-after: always;">&nbsp;</p>
    <p style="page-break-before: always;">&nbsp;</p>
        """)
