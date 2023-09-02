"""
Compute taxes due in NF-e
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
Dados bancarios, Banco Nubank 0260 Ag. 0001 Conta 92125816-2
Valor liquido {str((bruto - total_taxes).quantize(Decimal('1.00'), ROUND_HALF_UP)).replace(".", ",")}
""")
