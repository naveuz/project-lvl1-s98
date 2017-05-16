#!/usr/bin/env node
import game from '../';
import calc from '../games/brain-calc';

const greeting = 'What is the result of the expression?';
game(greeting, calc);
