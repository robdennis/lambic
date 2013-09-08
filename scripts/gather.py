from __future__ import unicode_literals

import os
import itertools
import logging
import json
import subprocess

logging.basicConfig(level=logging.DEBUG)
log = logging.getLogger()

__here__ = os.path.abspath(os.path.dirname(__file__))
# https://github.com/davidchambers/tutor
TUTOR_DIR = os.path.expanduser(os.path.join('~', 'development', 'tutor', 'bin'))
TUTOR_PATH = os.path.join(TUTOR_DIR, 'tutor')

def _query_tutor(command_parameters):
    """

    :param command_parameters:
    :return: the json-parsed output of the tutor command
    """

    command = [TUTOR_PATH, '--format', 'json'] + command_parameters

    try:
        return json.loads(subprocess.check_output(command).strip())
    except (subprocess.CalledProcessError, ValueError) as e:
        logging.warning('problem with command: {}'.format(command))
        return []


def _query_tutor_for_cards_by_set(set_name):
    """
    Depends on: installation of the tutor CLI, that path in settings,
    the path to node in your $PATH environment variable

    :param set_name: the set's name, which will be passed to
        tutor's command line
    :return: a list of cards represented as dictionaries
    """

    log.debug('searching for set name: %r', set_name)
    return _query_tutor(['set', set_name])


def _query_tutor_for_all_sets():
    log.debug('searching for sets')
    return _query_tutor(['sets'])


def write_all_cards_from_gatherer_to_file():
    all_sets = _query_tutor_for_all_sets()
    # this "dict-comprehension" has the beneficial side-effect of de-duping
    cards = dict([
        (card['name'], card)
        for card in itertools.chain(*[_query_tutor_for_cards_by_set(set_name)
                                      for set_name in all_sets])
    ])

    json.dump(cards, open(os.path.join(__here__, 'cards.json'), 'wb'))


if __name__ == '__main__':

    write_all_cards_from_gatherer_to_file()
