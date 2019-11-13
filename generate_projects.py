from collections import namedtuple


Project = namedtuple("Project", "img title desc demo code")

PROJECTS = [Project('PTL.png',
                    "Pontual Import Brindes",
                    "Catálogo de produtos",
                    "http://pontualimportbrindes.com.br/",
                    "https://github.com/pontual/site-admin-live/"),
            
            Project('pangloss.png',
                    'Pangloss',
                    'Anotações sobre Python 3',
                    "http://pangloss.surge.sh/",
                    "https://github.com/heitorchang/learn-code/tree/master/pangloss"),
            
            Project('AllCents2.png',
                    'All Cents',
                    'App de contabilidade',
                    "https://heitor.pythonanywhere.com/allcents/",
                    "https://github.com/reddress/zeno/tree/master/benny"),
            
            Project('Sistema.png',
                    'Sistema',
                    'Gerenciamento de compra, vendas e estoque',
                    "https://heitor.pythonanywhere.com/sistema/",
                    "https://github.com/reddress/zeno/tree/master/sistema"),
            
            Project('Polylexis.png',
                    'Polylexis',
                    'Quiz de vocabulário grego e mandarim',
                    "https://www.polylexis.com/",
                    "https://github.com/heitorchang/polylexis"),
]            
