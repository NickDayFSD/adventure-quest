// imports

const CHARACTER = 'CHARACTER';

export function getUser() {
    const stringCharacter = localStorage.getItem(CHARACTER);
    const parseCharacter = JSON.parse(stringCharacter);

    if (parseCharacter) {
        return parseCharacter;
    } else {
        return {};
    }
}

export function saveUser(userData) {
    const stringUser = JSON.stringify(userData);
    localStorage.setItem(CHARACTER, stringUser);
}

export function updateUser() {
    
}