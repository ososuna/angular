
export interface Product {
    desc: string;
    price: number;
}

const phone: Product = {
    desc: 'Beetle Phone',
    price: 10000
}

const laptop: Product = {
    desc: 'Dell Inspiron',
    price: 20000
}

export function calculateISV( products: Product[] ): [number, number] {
    
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * 0.15];

}

// const articles = [ phone, laptop ];

// const [total, isv] = calculateISV( articles );

// console.log( `Total: ${total}` );
// console.log( `ISV: ${ isv }` );
