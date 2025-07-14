def retire(retirement_age, cursav, moexp):
    current_age = 36
    death = 85
    workyrs = retirement_age - current_age
    withdr = (death - retirement_age) * 12 * moexp
    print('need to save', withdr)
    print('reduced by cursav', withdr - cursav)
    print('save monthly:', (withdr - cursav) // workyrs // 12)
