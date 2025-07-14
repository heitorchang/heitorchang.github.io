"""
5-card draw con due Jolly
gist: https://gist.github.com/heitorchang/42a535418861d25e96f2e6fb0d646ae9

How to play:
play()
Replace cards by indices (one-based). Example: 1,3,4 or 1 3 4

Descrizione:

Inizi con Thread$ 100 (T$ 100)
Un gioco costa T$ 5

Ricevi per:
Coppia di J/Q/K/A - T$ 5
Doppia coppia - T$ 10
Tris - T$ 15
Scala - T$ 20
Colore - T$ 30
Full - T$ 45
Poker - T$ 125
Scala reale - T$ 250
Scala reale massima - T$ 4000

Esempio:
*** THREADIVERSARIO POKER - NUOVO GIOCO ***

(1) 3♠️
(2) 4♥️
(3) 4♠️
(4) 10♣️
(5) J♥️
Cambio di quali carte, numeri da (1) a (5)? 1 4 5

*** RISULTATO ***

4♥️
4♠️
5♦️
5♠️
6♦️

È una doppia coppia, ho vinto T$ 10
"""

from random import shuffle


class Card:
    order: int
    representation: tuple[str, str]
    display: str

    rank_map = {
        '2': 0,
        '3': 1,
        '4': 2,
        '5': 3,
        '6': 4,
        '7': 5,
        '8': 6,
        '9': 7,
        '10': 8,
        'J': 9,
        'Q': 10,
        'K': 11,
        'A': 12,
        '+': 13,
    }

    suit_map = {
        'C': 0,
        'D': 1,
        'H': 2,
        'S': 3,
        '+': 4,
    }

    emoji_map = {
        'H': '♥️',
        'D': '♦️',
        'C': '♣️',
        'S': '♠️',
        '+': '🃏',
    }

    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit
        self.order = self.suit_map[suit] + self.rank_map[rank] * 4
        self.representation = (rank, suit)
        self.display = f"{rank}{suit}"

    def __str__(self):
        return(f"{self.rank}{self.emoji_map[self.suit]}")

    def __repr__(self):
        # return f"Card({self.rank}, {self.suit})"
        return self.__str__()


class Game:
    cards: list[Card]
    hand: list[Card]

    def __init__(self):
        self.cards = []
        for suit in Card.suit_map:
            if suit == '+':
                continue
            for rank in Card.rank_map:
                if rank == '+':
                    continue
                self.cards.append(Card(rank, suit))
        # Jokers: Q@ and K@
        self.cards.append(Card('+', '+'))
        self.cards.append(Card('+', '+'))

        shuffle(self.cards)
        self.hand = sorted(self.cards[:5], key=lambda c: c.order)
        self.replacement = sorted(self.cards[5:10], key=lambda c: c.order)
        print("\n*** THREADIVERSARIO POKER - NUOVO GIOCO ***\n")
        for i, c in enumerate(self.hand, 1):
            print(f"({i}) {c}")
        # print("Replacement hand")
        # print(self.replacement)

    def r(self, *indices):
        count = len(indices)
        for i, count_index in enumerate(indices):
            self.hand[count_index-1] = self.replacement[i]
        print("\n*** RISULTATO ***\n")
        for i, c in enumerate(sorted(self.hand, key=lambda c: c.order), 1):
            print(f"{c}")


def play():
    g = Game()
    while True:
        i = input("Cambio carte da (1) a (5) o nessuna? ")
        try:
            i = i.strip().replace(",", " ")
            g.r(*[int(x.strip()) for x in i.split(' ')])
            break
        except:
            pass
