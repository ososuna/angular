class Person {

    constructor(
        public name: string,
        public age: number,
    ) {}

}


class Hunter extends Person {

    constructor(
        public name: string,
        public age: number,
        public nenClass: string,
        public place: string ) {    
            super( name, age );
        }

}

const kurapika = new Hunter('Kurapika', 17, 'Specialist', 'Yorknew');
console.log( kurapika );
