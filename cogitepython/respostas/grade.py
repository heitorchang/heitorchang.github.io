"""Este módulo contém um exemplo de código relacionado a

Cogite Python,
uma tradução de

Think Python, segunda edição
por Allen Downey

traduzido por Heitor Chang <heitor at alumni.stanford.edu>

http://thinkpython2.com
http://cogitepython.github.io

Copyright 2015 Allen Downey
Licença: http://creativecommons.org/licenses/by/4.0/
"""

from __future__ import print_function, division

# aqui está uma solução quase completamente direta
# para a versão dois-por-dois da grade.

def faça_duas_vezes(f):
    f()
    f()

def faça_quatro_vezes(f):
    faça_duas_vezes(f)
    faça_duas_vezes(f)

def imprima_travessão():
    print('+ - - - -', end=' ')

def imprima_poste():
    print('|        ', end=' ')

def imprima_travessões():
    faça_duas_vezes(imprima_travessão)
    print('+')

def imprima_postes():
    faça_duas_vezes(imprima_poste)
    print('|')

def imprima_linha():
    imprima_travessões()
    faça_quatro_vezes(imprima_postes)

def imprima_grade():
    faça_duas_vezes(imprima_linha)
    imprima_travessões()

imprima_grade()
    
# aqui está uma solução menos direta para a grade quatro-por-quatro

def um_quatro_um(f, g, h):
    f()
    faça_quatro_vezes(g)
    h()

def imprima_mais():
    print('+', end=' ')

def imprima_traço():
    print('-', end=' ')

def imprima_barra_vertical():
    print('|', end=' ')

def imprima_espaço():
    print(' ', end=' ')

def imprima_fim():
    print()

def nada():
    "não faça nada"

def imprima_um_travessão():
    um_quatro_um(nada, imprima_traço, imprima_mais)

def imprima_um_poste():
    um_quatro_um(nada, imprima_espaço, imprima_barra_vertical)

def imprima_quatro_travessões():
    um_quatro_um(imprima_mais, imprima_um_travessão, imprima_fim)

def imprima_quatro_postes():
    um_quatro_um(imprima_barra_vertical, imprima_um_poste, imprima_fim)

def imprima_linha():
    um_quatro_um(nada, imprima_quatro_postes, imprima_quatro_travessões)

def imprima_grade():
    um_quatro_um(imprima_quatro_travessões, imprima_linha, nada)

imprima_grade()

observação = """
Depois de escrever um esboço da grade 4x4, percebi que muitas das
funções haviam a mesma estrutura: eles fariam algo, depois algo
diferente quatro vezes, e depois outra coisa diferente uma vez.

Então escrevi um_quatro_um, que recebe três funções como argumentos;
ele chama o primeiro uma vez, usa faça_quatro_vezes para chamar a
segunda função quatro vezes, e depois chama a terceira função.

Depois reescrevi imprima_um_travessão, imprima_um_poste,
imprima_quatro_travessões, imprima_quatro_postes, 
imprima_linha e imprima_grade usando um_quatro_um.

A programação é um processo exploratório. Escrever o esboço de um
programa frequentemente te dá visão do problema, que poderá te
guiar a reescrever o código para refletir a estrutura da solução.

--- Allen
"""

print(observação)
