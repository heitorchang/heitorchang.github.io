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
               [])

adair = Company("", [])

COMPANIES = [pontual, merrill, stux, adair]


# Sections

experiencia_profissional = ResumeSection("Experiência Profissional",
                                         COMPANIES)

formacao_academica = ResumeSection("Formação Acadêmica",
                                   [])

experiencia_academica = ResumeSection("Experiência Acadêmica", [])

trabalho_voluntario = ResumeSection("Trabalho Voluntário", [])

projetos_pessoais = ResumeSection("Projetos Pessoais", [])


SECTIONS = [experiencia_profissional, formacao_academica, experiencia_academica, trabalho_voluntario, projetos_pessoais]
