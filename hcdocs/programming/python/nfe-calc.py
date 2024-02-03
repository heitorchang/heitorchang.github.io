"""
Compute taxes due in NF-e

Procedure:

Open email. Check number (Numero da nota) of the latest NF-e, to compare at the end
Go to https://notadomilhao.prefeitura.sp.gov.br/
Log in with the certificate
Click on Emissao de NFS-e
Tributado em SP, Normal
Tomador Tempo OK
Codigo de servico 02692 Programas de computadores (software)
Run this script and evaluate calc_nfe(AMOUNT)
Fill in Discriminacao with 'Desenvolvimento de sistema...'
Continue Discriminacao with 'Dados bancarios...' (check TOK Diary)
Continue Discriminacao with 'Valor Liquido...'

Valor total is AMOUNT

Leave INSS blank
IBPT is Valor Aprox. da Carga Tributaria

After submitting, compare the Numero da nota with previous number
"""

from decimal import Decimal, ROUND_HALF_UP

aliq = {
    "IRRF": Decimal('0.015'),
    "CSLL": Decimal('0.01'),
    "COFINS": Decimal('0.03'),
    "PIS": Decimal('0.0065'),
    "IBPT": Decimal('0.1133'),
}

def calc_nfe(bruto):
    bruto = Decimal(str(bruto))
    taxes_due_for = set([
        "IRRF",
        "CSLL",
        "COFINS",
        "PIS",
    ])
    total_taxes = 0
    for k in aliq:
        if k == "IBPT":
            print()
        taxes = bruto * aliq[k]
        print(f"{k}: R$ {taxes.quantize(Decimal('1.00'), ROUND_HALF_UP)}")
        if k == "IBPT":
            print("IBPT: Percentual 11,33")

        if k in taxes_due_for:
            total_taxes += taxes

    print(f"""
Desenvolvimento de sistema de back-end para dados meteorologicos.
[[[ DADOS BANCARIOS: CHECK DIARY FILE ]]]
Valor liquido {str((bruto - total_taxes).quantize(Decimal('1.00'), ROUND_HALF_UP)).replace(".", ",")}
""")
