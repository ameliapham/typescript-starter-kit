import { assert, Equals } from "tsafe";

// Using assert Equals to check equal of two types 

type A = {
    foo: string;
    bar: string;
};

type B = {
    foo: string;
    bar: string;
};

assert<Equals<A, B>>


// Using assert Equals to check equal of an element and a type

const myDate = Date();

const x= [1, 2, 3][0];

type X = typeof x;

assert<Equals<typeof x, X>>


// Using assert Equals to check equal of an element and type string

function getArrayElement<T>(arr: T[], index: number): T {
    return arr[index];
}

const arr = ["a", "b", "c"];

const element =getArrayElement<string>(arr, 2)

assert<Equals<typeof element, string>>