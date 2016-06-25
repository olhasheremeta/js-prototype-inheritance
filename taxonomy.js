function Domain(domain) {
  this.domain = domain; // 9
  this.level = 1;  // 10
}

function Regnum(domain, regnum) {
  Domain.call(this, domain); // 8
  this.regnum = regnum; // 11
  this.level = 2; // 12
} 
Regnum.prototype = new Domain();

function Type(domain, regnum, type) {
  Regnum.call(this, domain, regnum); // 7
  this.type = type; // 13
  this.level = 3; // 14
}
Type.prototype = new Regnum();

function Classis(domain, regnum, type, classis) {
  Type.call(this, domain, regnum, type); // 6
  this.classis = classis; // 15
  this.level = 4; // 16
}
Classis.prototype = new Type(); 

function Ordo(domain, regnum, type, classis, ordo) {
  Classis.call(this, domain, regnum, type, classis); // 5
  this.ordo = ordo; // 17
  this.level = 5; // 18
}
Ordo.prototype = new Classis();

function Familia(domain, regnum, type, classis, ordo, familia) {
  Ordo.call(this, domain, regnum, type, classis, ordo); // 4
  this.familia = familia; // 19
  this.level = 6; // 20
}
Familia.prototype = new Ordo();

function Genus(domain, regnum, type, classis, ordo, familia, genus) {
  Familia.call(this, domain, regnum, type, classis, ordo, familia); // 3
  this.genus = genus; // 21
  this.level = 7; // 22
}
Genus.prototype = new Familia();

function Species(domain, regnum, type, classis, ordo, familia, genus, species) {
  Genus.call(this, domain, regnum, type, classis, ordo, familia, genus); //2
  this.species = species; // 23
  this.level = 8; // 24
}
Species.prototype = new Genus();

// 1
var dog = new Species('Eukaryota', 'Metazoa', 'Chordata', 'Mammalia', 'Carnivora', 'Canoidea', 'Canidae', 'Canis');
// 25
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

var ciliatea = new Classis('Eukaryota', 'Chromalveolata', 'Alveolata', 'Ciliophora', 'Ciliatea');
console.log(
  ciliatea.domain,  
  ciliatea.regnum,
  ciliatea.type,
  ciliatea.classis,
  ciliatea.level
);
















