
var grupos = [
    ["Joao","Maria"],
    ["Pedro","Joana","André","Júlio"],
    ["Carolina","Helena","Marcela"]
]

grupos[3] = grupos[2].slice(1,) 
console.log(grupos);
//console.log(grupos[2].slice(1,))
grupos[3].push("Marcela");
grupos[3].push("Felipe");
grupos[3].push("Carla");
console.log(grupos);
