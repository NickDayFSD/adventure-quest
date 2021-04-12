// imports
import { getUser } from './local-storage-utils.js';

export function isDead(user) {
    return user.hp <= 0;
}

export function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getUser();

    if (!user) {
        window.location = './'
    }

    name.textContent = user.name;
    avatar.src = './assets/avatars/' + user.classType + '.png';
    gold.textContent = user.gold;

    if (isDead(user)) {
        hp.textContent = 'You real dead. Good luck in your next life.';
    } else {
        hp.textContent = user.hp;
    }
}
