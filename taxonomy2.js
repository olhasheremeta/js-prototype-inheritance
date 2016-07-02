function Domain() {
  this.domain = 'Eukaryota';
  this.core = true;
};

function Regnum() {
  this.regnum = 'Animalia'; 
  this.form = 'animal';
};
Regnum.prototype = new Domain();

function Type() {
  this.type = 'Chordata'; 
  this.tail = true;
}
Type.prototype = new Regnum();

function Classis() {
  this.classis = 'Mammalia';
  this.mammal = true;
}
Classis.prototype = new Type(); 

function Ordo() {
  this.ordo = 'Carnivora';
  this.eatsMeat = true; 
}
Ordo.prototype = new Classis();

function Familia() {
  this.familia = 'Canoidea';
  this.coat = 'fur'; 
}
Familia.prototype = new Ordo();

function Genus() {
  this.genus = 'Canis';
  this.pet = true;
}
Genus.prototype = new Familia();

function Species(species) {
  this.species = species; 
}
Species.prototype = new Genus();

var dog = new Species('Dog');

console.log(
  dog.domain, 
  dog.regnum,
  dog.type,
  dog.classis,
  dog.ordo,
  dog.familia,
  dog.genus,
  dog.species
);

console.log(
dog.mammal,
dog.coat
);



