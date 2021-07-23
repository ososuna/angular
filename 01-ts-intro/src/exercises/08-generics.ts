
function whatTypeIs<T>( arg: T ) {
    return arg;
}

let isString = whatTypeIs('Hello World');
let isNumber = whatTypeIs( 100 );
let isArray = whatTypeIs([1,2,3,4]);
let isExplicit = whatTypeIs<number>( 10 );
