function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}


// greet("Huong", new Date());

const myDate = new Date()
greet("Huong", myDate);