# Resume
# HEITOR CHANG
# heitorpontual@gmail.com  (11) 3312-8845   (11) 99907-4867   https://heitorchang.github.io/

class Job:
    def __init__(self, title, dates, items):
        self.title = title
        self.dates = dates
        self.items = items

        
class Company:
    def __init__(self, name, jobs):
        self.name = name
        self.jobs = jobs


class ResumeSection:
    def __init__(self, name, companies):
        self.name = name
        self.companies = companies


#TODO: replace criar with criei, etc.

tempook = Company("Tempo OK Tecnologia em Meteorologia Ltda., São Paulo, SP",
                  [Job("Desenvolvedor Full-Stack",
                       "Jun. 2020 &mdash; atual",
                       ["Migrei um projeto front-end de <a href=\"http://docs.gae-init.appspot.com/\" target=\"_blank\">gae-init</a> para Django 3, criando um gerenciador novo de usuários e de arquivos com um sistema de permissões.",
                        "Desenvolvi o fluxo de dados meteorológicos do back-end com PostgreSQL até o front-end com Flask (ambos no Google Cloud), criando mais de 80 tabelas, algumas com milhões de linhas representando dados horários.",
                        "Criei páginas para exibir dados relevantes aos clientes em gráficos e mapas, com controles e layouts do framework Vuetify (Vue 2).",
                        "Criei scripts auxiliares em Python e Bash para facilitar a transferência de dados entre a equipe de meteorologia e o desenvolvimento web."])
                   ])


pontual = Company("Pontual Exportação e Importação Ltda., São Paulo, SP",
                  [Job("Desenvolvedor Full-Stack",
                       "Jan. 2014 &mdash; Jun. 2020",                       
                       ["Usei indicadores MA (Moving Average) em um projeto Django e Python para prever a demanda de produtos e calculei a quantidade adequada para reposições.",
                        "Criei uma API REST com o framework Slim (em PHP) para ser consumida por um app React que gera o site público da empresa.",
                        "Visualizei históricos de vendas com NumPy e Pandas, obtendo médias e valores extremos para cada produto.",
                        "Desenvolvi com PHP puro e MySQL o painel de administração do site.",
                        "Automatizei a coleta de dados do estoque atual com um robô escrito em Python, reformatando-os em uma página HTML para o uso de clientes.",
                        "Criei um SPA com AngularJS e Firebase para organizar listas de pedidos e reservas em tempo real."]),

                   Job("Auxiliar Administrativo",
                       "Nov. 2011 &mdash; Dez. 2013",
                       ["Recebi pedidos e reservas de clientes, formalizando-os na hora de retirada ou despacho.",
                        "Fiz previsões de demanda com Excel para cada produto, determinando a quantidade e frequência de reposição.",
                        "Mantive a ordem de listas de pré-pedidos e reservas para clientes de cinco vendedoras."])])

merrill = Company("Merrill Lynch &amp; Co., Inc., New York, NY",
                  [Job("Associado de Verão, Pesquisas Globais",
                       "Jun. 2008 &mdash; Ago. 2008",
                       ["Modelei a frequência de pagamentos de títulos públicos hipotecários e calculei seus valores e perfis de risco.",
                        "Testei a performance de um portfólio de futuros como um produto novo para substituir um portfólio tradicional de ações.",
                        "Comparei o valor e volatilidade de futuros de petróleo relativo a ações de refinarias de grande porte."])])


stux = Company("Stux Capital Management, LLC, New York, NY",
               [Job("Estagiário, Investimentos em Ações",
               "Feb. 2008 &mdash; Abr. 2008",
               ["Consolidei, otimizei e chequei erros em planilhas de rendas mensais.",
                "Desenvolvi uma interface visual que comunica em tempo real com um banco de dados para ver o lucro de um fundo de investimentos, aumentando a produtividade e minimizando erros."])])


adair = Company("Adair Capital, LLC, New York, NY",
                [Job("Estagiário, Fundo de Fundos de Cobertura",
                "Set. 2007 &mdash; Jan. 2008",
                ["Calculei níveis de risco entre fundos, correlacionando estratégias de fundos de cobertura com fatores de risco macroeconômicos para prever os lucros de fundos específicos.",
                 "Desenvolvi um GUI em Matlab que implementa um processo Brownian Bridge para medir a exposição de fundos de cobertura a índices de referência e detectei possíveis mudanças nas suas estratégias de investimento."])])

                 
COMPANIES = [tempook, pontual, merrill, stux, adair]


stan_ug = Company("Graduação: Stanford University, Stanford, CA",
                  [Job("Ciências Matemáticas e Computacionais",
                       "Set. 2001 &mdash; Jun. 2005",
                       ["Bachelor of Science, GPA 3.7/4.0"])])

grad_school = Company("Pós-graduação: Stanford University, Stanford, CA",
                      [Job("Ciência e Engenharia de Materiais",
                           "Set. 2005 &mdash; Jun. 2007",
                           ["Master of Science, GPA 3.6/4.0"])])

nyu = Company("Pós-graduação: New York University, New York, NY",
              [Job("Matemática Financeira",
                   "Set. 2007 &mdash; Jan. 2009",
                   ["Master of Science, GPA 3.4/4.0"])])

SCHOOLS = [nyu, grad_school, stan_ug]


materiais = Company("Departamento de Ciência e Engenharia de Materiais, Stanford University, Stanford, CA",
                    [Job("Assistente de Pesquisas de Propriedades Mecânicas, Prof. R. H. Dauskardt",
                         "Jun. 2005 &mdash; Fev. 2007",
                         ["Construi simulações de fratura para prever a estabilidade de nanomateriais porosos inovadores.",
                          "Otimizei scripts Matlab em programas C, acelerando cálculos que demoravam um dia para aproximadamente duas horas."])])


carnegie = Company("Carnegie Institution for Science, Stanford, CA",
                   [Job("Assistente de Pesquisas Genéticas, Dra. Susan S. Thayer",
                        "Mar. 2004 &mdash; Jun. 2004",
                        ["Realizei análises de regressão em SAS para identificar correlações estatisticamente significativas entre oito conjuntos de dados."])])


ACADEMICA = [materiais, carnegie]


criar = Company("Criar &amp; Criar Art Design, São Paulo, SP",
                [Job("Web Designer",
                     "Out. 2017 &mdash; Dez. 2017",
                     ["Atualizei e mantive o catálogo de produtos decorativos e sustentáveis no Blogspot."])])

oca = Company("OCA Escola Cultural, Carapicuíba, SP",
              [Job("Manutenção de Sistema, Ubuntu Linux",
                   "Set. 2017",
                   ["Configurei e instalei o gerenciador de bibliotecas Biblivre 5 dentro de um ambiente em nuvem."])])

VOLUNTARIO = [criar, oca]


polylexis = Company("Polylexis.com",
                    [Job("Desenvolvedor Full-Stack",
                         "Ago. 2019 &mdash; atual",
                         ["Desenvolvi e mantive um site Django com vocabulário, testes e um mini-dicionário do grego moderno."])])


hellokey = Company("Hello Key English",
                   [Job("Designer e Desenvolvedor Full-Stack",
                        "Out. 2019 &mdash; Nov. 2019",
                        ["Gerenciei uma lista de alunos e um calendário de aulas particulares de inglês com o site Django.",
                        "Desenhei uma interface otimizada para celular com o framework Bootstrap 4."])])


PESSOAIS = [polylexis, hellokey]

# Sections

experiencia_profissional = ResumeSection("Experiência Profissional",
                                         COMPANIES)

formacao_academica = ResumeSection("Formação Acadêmica",
                                   SCHOOLS)

experiencia_academica = ResumeSection("Experiência Acadêmica", ACADEMICA)

trabalho_voluntario = ResumeSection("Trabalho Voluntário", VOLUNTARIO)

projetos_pessoais = ResumeSection("Projetos Pessoais", PESSOAIS)


SECTIONS = [experiencia_profissional, formacao_academica, experiencia_academica, trabalho_voluntario, projetos_pessoais]


def print_cv(fout, print_pdf=True):

    try:
        print("""
    <div class="gent max-w-3xl mx-auto mt-8 text-gray-800 px-8">
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
                section_mt = "mt-6"
                company_mt = "mt-3"
                li_mt = "mt-1"
            else:
                section_mt = "mt-10"
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


        # Idiomas
        IDIOMAS = (('Inglês', 'Fluente'),
                   ('Mandarim', 'Intermediário'),
                   ('Italiano', 'Intermediário'),
                   ('Francês', 'Básico'),
                   ('Espanhol', 'Básico'),
                   ('Grego moderno', 'Básico'))
        
        print("""        <h2 class="text-xl text-teal-800 mt-8 uppercase">Idiomas</h2>""", file=fout)

        print("""

        <ul class="list-disc ml-8">
        """, file=fout)

        for idioma in IDIOMAS:
            print(f"""
          <li class="mt-1">
            <div class="flex w-auto">
              <div class="w-40">{idioma[0]}</div>
              <div class="w-40 italic">{idioma[1]}</div>
            </div>
          </li>
            """, file=fout)
            
        print("""
        </ul>
        """, file=fout)

        # Programacao
        LINGUAGENS = (('Python 3', 'Avançado'),
                      ('HTML5', 'Avançado'),
                      ('JavaScript (ES6)', 'Intermediário'),
                      ('CSS3', 'Intermediário'),
                      ('PHP 7', 'Intermediário'),
                      ('Emacs Lisp', 'Básico'),
                      ('MySQL', 'Básico'))
                      
        print("""        <h2 class="text-xl text-teal-800 mt-8 uppercase">Linguagens de Programação</h2>""", file=fout)

        print("""

        <ul class="list-disc ml-8">
        """, file=fout)

        for ling in LINGUAGENS:
            print(f"""
          <li class="mt-1">
            <div class="flex w-auto">
              <div class="w-40">{ling[0]}</div>
              <div class="w-40 italic">{ling[1]}</div>
            </div>
          </li>
            """, file=fout)
            
        print("""
        </ul>
        """, file=fout)


        print("""    </div> <!-- CV gent font -->""", file=fout)

    except Exception as e:
        print("An exception occurred", e)
