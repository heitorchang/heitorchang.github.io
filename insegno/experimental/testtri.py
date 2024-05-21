from lib.utils import tritest


"""
In interactive mode, evaluate

sys.path.append("/home/hcbel/code/insegno")
"""


if __name__ == '__main__':
    print(tritest(1, 1, 'one one',
                  2, 3, 'two three',
                  3, 4, 'three four'))

    print(tritest([1,2], [1,2,3], 'unequal arrays'))
