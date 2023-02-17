
// Super class - level 0
class Human {
    constructor(gen, age) {
        this.gender = gen ? gen : null;
        this.age = age ? age : null;
    }

    getter() {
        return this;
    }

    setter(gender, age) {
        if (!(gender && age)) {
            throw new Error('No values passed in arguments');
        }

        this.gender = gender;
        this.age = age;
    }
}

// Subclass - level 1
class Person extends Human {
    constructor(gender, age, name) {
        super(gender, age);
        this.name = name;
    }
}

// subclass - level 2
class Teacher extends Person {
    constructor(gender, age, name, subject) {
        super(gender, age, name);
        this.subject = subject;
    }
}


// Human
const h1 = new Human('male', 23);
console.log('h1 before= ', h1.getter());
h1.setter('female', 65);
console.log('h1 after = ', h1.getter());

// Person --> HUman
const p1 = new Person('male', 32, 'Rich');
console.log(p1.getter());

// Teacher --> Person --> Human
const t1 = new Teacher('Female', 28, 'Dipali', 'Maths')
console.log(t1.getter());
