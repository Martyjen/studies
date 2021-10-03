function Dog(){
    this.name = "Laika";
    this.voice = function() {
        console.log("hey");
    }
}
new Dog();

var coli = {
    name: 'Coli',
    model: "Dog",
    voice: function(){
        console.log(coli.name);
    }
   
}

console.log(coli.voice());