import pandas as pd
import numpy as np
import netCDF4 as nc
import os
import sys
import json
from datetime import datetime, timedelta
from pathlib import Path

print("Imported Pandas, NumPy, netCDF4, os, and sys.")


def json_traverse(s, max_level=0, show_values=True, show_levels=False):
    """Traverse a JSON string or dict.
    Parameters are: obj, max_level (default 0), show_values, show_levels.
    """
    if max_level == 0:
        max_level = 99
    if isinstance(s, str):
        j = json.loads(s)
    else:
        j = s
    print("\n")
    print(_dict_traverse(j, 0, max_level, show_values, show_levels))


def _dict_traverse(d, level, max_level, show_values, show_levels):
    if level > max_level:
        return ""
    accum = ""
    keys = d.keys()
    for k in keys:
        key_str = f'{"  " * level}"{k}"'
        if isinstance(d[k], str):
            d_val = f'"{d[k]}"'
        elif isinstance(d[k], dict):
            d_val = ''
        elif isinstance(d[k], list):
            d_val = '['
        else:
            d_val = str(d[k])
        if len(d_val) > 32:
            d_val = d_val[:32] + '...'
        if not show_values and d_val != '[':
            d_val = ""
        level_str = f'({level})' if show_levels else ''
        accum += f'{key_str}: {d_val} {level_str}\n'
        if isinstance(d[k], dict):
            accum += _dict_traverse(d[k], level + 1, max_level, show_values, show_levels)
        elif isinstance(d[k], list):
            accum += _list_traverse(d[k], level + 1, max_level, show_values, show_levels)
        if isinstance(d[k], list):
            accum += f'\n{"  " * level}]\n'
    return accum


def _list_traverse(a, level, max_level, show_values, show_levels):
    if level > max_level:
        return ""
    accum = ""
    e_str = f'{"  " * level}'

    for i, e in enumerate(a):
        if isinstance(e, str):
            e_val = f'"{e}"'
        elif isinstance(e, list):
            e_val = ''
        elif isinstance(e, dict):
            e_val = f'{{'
        else:
            e_val = str(e)
        if len(e_val) > 32:
            e_val = e_val[:32] + '...'
        if not show_values:
            e_val = ""
        else:
            if isinstance(e, dict):
                accum += f'{e_str}{e_val}\n'
            else:
                if i == 0:
                    accum += e_str
                accum += f'{e_val}, '
        if isinstance(e, dict):
            accum += _dict_traverse(e, level + 1, max_level, show_values, show_levels)
        elif isinstance(e, list):
            accum += _list_traverse(e, level + 1, max_level, show_values, show_levels)
        if isinstance(e, dict):
            accum += e_str + '\n' + e_str + '},\n'
    return accum
