from math import exp, log


def format_percent(n):
    return "{:.4f}".format(n)

    # FUNCTIONS SHOULD RETURN NUMBERS, FORMAT SEPARATELY

def simple_compounding(rate, times, pv=100):
    return "{:.4f}".format(pv * (1 + (rate/100)) ** times)

def continuous_compounding(rate, times, pv=100):
    return "{:.4f}".format(pv * exp((rate/100) * times))

def divide_rate(rate, times):
    fv = 1 + (rate/100)
    r = log(fv) / times
    return "{:.6f}%".format((exp(r) - 1) * 100)

def continuous_rate(simple_rate):
    return (log(1 + (simple_rate/100))) * 100

def simple_rate(continuous_rate):
    return (exp(continuous_rate/100) - 1) * 100
    
def find_rate(pv, fv, periods):
    # fv = pv * exp(rate * periods)
    # log(fv / pv) = rate * periods
    # rate = log(fv / pv) / periods

    return "{:.4f}%".format(simple_rate((log(fv / pv) / periods) * 100))
