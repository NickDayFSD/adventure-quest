import { generateQuest, completedQuest, allComplete } from './map-quest.js';
import { isDead, loadProfile } from '../common.js';
import { getUser } from '../local-storage-utils.js';
import quests from '../data/quest-data.js';

loadProfile();

const user = getUser();

if (isDead(user) || allComplete(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let quest of quests) {
    let questDisplay = null;

    console.log(quest.id);
    const questHasBeenCompleted = user.completed[quest.id];

    if (questHasBeenCompleted) {
        questDisplay = completedQuest(quest);
    } else {
        questDisplay = generateQuest(quest);
    }
    nav.appendChild(questDisplay);
}
