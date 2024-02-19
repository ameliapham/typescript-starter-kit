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


