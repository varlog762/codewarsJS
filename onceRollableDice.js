function Character(name, opness) {
    this.name = name;
    this.opness = opness;
    this.attack = function() {
         return (this.opness + (Math.random() * 20) + 1);
    };
}

var balthazaar = new Character('Balthazaar', 30);

var attacks = new Array(100);
for (var i=0; i<attacks.length; i++) {
    attacks[i]=balthazaar.attack();
}

var anyDifferent = (attacks[0] != attacks[99]);
var inRange = (attacks[0]>30 && attacks[99]<51);

console.log(balthazaar.attack());