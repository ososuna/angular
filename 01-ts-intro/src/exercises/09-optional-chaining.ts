interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Gabriel']
}

function printChildren( passenger: Passenger ): void {
    const nChildren = passenger.children?.length || 0;
    console.log( nChildren );
}

printChildren( passenger1 );
printChildren( passenger2 );
