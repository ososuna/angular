
let abilities: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    abilities: string[];
    origin?: string;
}

const character: Character = {
    name: 'Ikalgo',
    hp: 100,
    abilities: ['Sniper', 'Fight', 'Hide']
}

character.origin = 'NGL';

console.table( character );
