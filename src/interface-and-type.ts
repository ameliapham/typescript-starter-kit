// Interface

interface A {
    foo: string;
    bar: string;
}

interface B {
    baz: number;
}

interface C extends A, B {
    yet: string[];
}

const c: C = {
    foo: "",
    bar: "",
    baz: 33,
    yet: []
}

console.log();



// Type

{
    type A = {
        foo: string;
        bar: string;
    };

    type B = {
        baz: number;
    }

    type C = A & B & {
        yet: []
    };

    const c: C = {
        foo: "",
        bar: "",
        baz: 33,
        yet: []
    }
}








