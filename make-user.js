export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        classType: formData.get('class'),
        hp: 45,
        gold: 0,
        completed: {}
    };

    if (user.classType === 'warrior') {
        user.hp = 55;
    } else if (user.classType === 'sorcerer') {
        user.hp = 35;
    } else {
        user.hp = 45;
    }

    return user;
}
