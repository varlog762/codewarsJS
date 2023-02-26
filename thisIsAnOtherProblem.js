function NamedOne(first, last) {
    
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}

var n = new NamedOne("Naomi","Wang");
console.log(n.firstName);
n.firstName = "Jane";
console.log(n.firstName);