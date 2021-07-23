
interface superHeroe {
    name: string;
    age: number;
    address: Address; 
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: superHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        const { city, country } = this.address;
        return `${ this.name }: ${ city }, ${ country }`;
    }
}

const address = superHeroe.showAddress();
console.log( address );
