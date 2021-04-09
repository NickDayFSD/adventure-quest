// imports

const CHARACTER = 'CHARACTER';

export function getUser() {

}

export function saveUser(userData) {
    const stringUser = JSON.stringify(userData);
    localStorage.setItem(CHARACTER, stringUser);
}