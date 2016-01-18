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


def faça_duas_vezes(fun, arg):
    """Executa uma função duas vezes.

    fun: objeto-função
    arg: argumento passado à função
    """
    fun(arg)
    fun(arg)


def imprima_duas_vezes(bruce):
    print(bruce)
    print(bruce)

def faça_quatro_vezes(fun, arg):
    """Executa uma função duas vezes.

    fun: objeto-função
    arg: argumento passado à função
    """
    faça_duas_vezes(fun, arg)
    faça_duas_vezes(fun, arg)


faça_duas_vezes(imprima_duas_vezes, 'spam')
print('')

faça_quatro_vezes(imprima_duas_vezes, 'spam') 
