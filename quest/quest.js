import { createChoice } from './quest-utils.js';
import { questResult, findById } from '../utils.js';
import { loadProfile } from '../common.js';
import quests from '../data/quest-data.js';
import { getUser, saveUser } from '../local-storage-utils.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);

if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = '../assets/quests/' + quest.image;
audio.src = '../assets/quests/' + quest.audio;
description.textContent = quest.description;

for (let choice of quest.choices) {
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);
    const user = getUser();

    questResult(choice, quest.id, user);

    saveUser(user);

    audio.src = '../assets/quests/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
    
});
