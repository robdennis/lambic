import json
import os

__here__ = os.path.abspath(os.path.dirname(__file__))
ALL_CARDS = os.path.join(__here__, '..', 'app', 'js', 'all_cards.js')
# generated from gather.py
CARDS_JSON = os.path.join(__here__, 'cards.json')


def write_subset_of_cards_to_file(all_cards):
    whitelist=(
        'name', 'converted_mana_cost', 'mana_cost', 'toughness', 'power',
        'types', 'text', 'color_indicator', 'subtypes', 'supertypes'
    )

    # this "dict-comprehension" has the beneficial side-effect of de-duping
    # cards = (
    #     dict((k, card[k]) for k in card.iterkeys() if k in whitelist)
    #     for card in all_cards.itervalues()
    # )
    def as_dict(card):
        return dict(
            [(k, card[k]) for k in card if k in whitelist]
        )

    cards = dict(
        (card['name'], as_dict(card)) for card in all_cards.itervalues()
    )


    with open(ALL_CARDS, 'wb') as all_cards:
        all_cards.write('all_cards = %s;' % json.dumps(cards))

if __name__ == '__main__':
    write_subset_of_cards_to_file(json.load(open(CARDS_JSON)))
