//Zadanie: Velociraptor czy Triceratops

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textAfter = text. replace('Velociraptor', dinosaurUpperCased);
var newTextAfter = textAfter.substr(0, 72)

console.log(newTextAfter);
