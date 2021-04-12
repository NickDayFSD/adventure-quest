// imports

export function findById(array, id) {
    return array.find(item => id === item.id);
}

export function questResult(choice, questId, user) {
    // add health to user
    user.hp += choice.hp;
    // add gold to user
    user.gold += choice.gold;
    // add questId to completed
    user.completed[questId] = true;
}
