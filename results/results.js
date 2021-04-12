import { loadProfile } from '../common.js';
import { getUser } from '../local-storage-utils.js';
import { scoreHp, scoreGold } from './score.js';
import { hpMessages, deadGoldMessages, aliveGoldMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadGoldMessages;
} else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];

let story = 'When you retire from your adventures, ';

story += `${user.name} the ${user.classType}, ${hpMessage} and ${goldMessage}.`;

storyDisplay.textContent = story;
