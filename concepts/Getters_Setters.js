// Getter
const personOne = {
    name: 'Milton',
    last_name: 'Diaz',
    age: 21,
    languages: ['js', 'css', 'java'],
    get skills() {
        return this.languages
    }
}

console.log(personOne.skills);

// Setter
const personTwo = {
    name: 'Milton',
    last_name: 'Diaz',
    age: 21,
    languages: [],
    set skills(skills) {
        this.languages = skills
    }
}

personTwo.skills = ['ruby', 'rails', 'nodejs']

console.log(personTwo.languages)