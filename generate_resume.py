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
        
        
pontual = Company("Pontual Exportação e Importação Ltda., São Paulo, SP",
                  [Job("Desenvolvedor Full-Stack",
                       "Jan. 2014 &mdash; atual",
                       ["Usar indicadores MA (Moving Average) em um projeto Django e Python para prever a demanda de produtos e calcular a quantidade adequada para reposições.",
                        "Visualizar históricos de vendas com NumPy e Pandas, obtendo médias e valores extremos para cada produto.",
                        "Desenvolver com PHP puro e MySQL o lado público e painel de administração do site, <a href=\"http://pontualimportbrindes.com.br/\" target=\"_blank\">http://pontualimportbrindes.com.br/</a>",
                        "Automatizar a coleta de dados do estoque atual com um robô escrito em Python, reformatando-os em uma página HTML para o uso de clientes.",
                        "Criar um SPA (aplicativo de página única) com AngularJS e Firebase para organizar listas de pedidos e reservas em tempo real."]),

                   Job("Auxiliar Administrativo",
                       "Nov. 2011 &mdash; Dez. 2013",
                       ["Receber pedidos e reservas de clientes, formalizando-os na hora de retirada ou despacho.",
                        "Fazer previsões de demanda com Excel para cada produto, determinando a quantidade e frequência de reposição.",
                        "Manter a ordem de listas de pré-pedidos e reservas para clientes de cinco vendedoras."])])

merrill = Company("Merrill Lynch &amp; Co., Inc., New York, NY",
                  [Job("Associado de Verão, Pesquisas Globais",
                       "Jun. 2008 &mdash; Ago. 2008",
                       ["Modelar a frequência de pagamentos de títulos públicos hipotecários e calcular seus valores e perfis de risco.",
                        "Testar a performance de um portfólio de futuros como um produto novo para substituir um portfólio tradicional de ações.",
                        "Comparar o valor e volatilidade de futuros de petróleo relativo a ações de refinarias de grande porte."])])


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

                 
COMPANIES = [pontual, merrill, stux, adair]


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

experiencia_profissional = ResumeSection("Experiência Profissional",
                                         COMPANIES)

formacao_academica = ResumeSection("Formação Acadêmica",
                                   SCHOOLS)

experiencia_academica = ResumeSection("Experiência Acadêmica", ACADEMICA)

trabalho_voluntario = ResumeSection("Trabalho Voluntário", VOLUNTARIO)

projetos_pessoais = ResumeSection("Projetos Pessoais", PESSOAIS)


SECTIONS = [experiencia_profissional, formacao_academica, experiencia_academica, trabalho_voluntario, projetos_pessoais]
