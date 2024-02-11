export interface Shape {
    type: string
    getArea(): number
}

export class Circle implements Shape {

    public type: "circle";
    public radius: number;

    constructor(radius: number) {
        this.type = "circle";
        this.radius = radius;
    }

    public getArea() {
        return Math.PI * this.radius ** 2;
    }

}

export class Square implements Shape {

    public type: "square";
    public sideLength: number;

    constructor(sideLength: number) {
        this.type = "square";
        this.sideLength = sideLength;
    }

    public getArea() {
        return this.sideLength ** 2;
    }

}