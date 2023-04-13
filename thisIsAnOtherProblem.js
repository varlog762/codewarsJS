class NamedOne {
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        if (value.includes(' ')) {
            [this.firstName, this.lastName] = value.split(' ');
        }
    }
}