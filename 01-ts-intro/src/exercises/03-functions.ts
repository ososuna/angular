
function sum( a:number, b:number ): number {
    return a + b;    
}

const sumArrow = (a: number, b: number): number => {
    return a + b;
}

function multiply( num1: number, num2?: number, base: number = 2 ) {
    return num1 * base;
}

interface CharacterLOR {
    name: string;
    hp: number;
    showHp: () => void;
}

function heal( character: CharacterLOR, healX: number ): void {
    character.hp += healX;
    console.log( character );
}

const newCharacter: CharacterLOR = {
    name: 'Ikalgo',
    hp: 80,
    showHp() {
        console.log(`HP: ${ this.hp }`);
    }
}

newCharacter.showHp();
heal( newCharacter, 20 );
newCharacter.showHp();
