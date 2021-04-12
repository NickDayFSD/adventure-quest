// generate quest function
export function generateQuest(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quest/?id=' + quest.id;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}

// complete quest function
export function completedQuest(quest) {
    // should check quests against user completed quests
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    span.textContent = quest.title;
    return span;
}

// all quests completed function
export function allComplete(quests, user) {
    // should check user quests against total quests
    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    return true;
}
