#!/usr/bin/env node
import game from '../';
import even from '../games/brain-even';

const greeting = 'Answer "yes" if number even otherwise answer "no".';
game(greeting, even);
