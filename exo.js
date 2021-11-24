let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

let exo1 = pomme.indexOf('pomme');
console.log(exo1);

if (pomme.startsWith("Elle")){
    alert('Elle est belle ma pomme ! Commence par "Elle"');
}

if (pomme.endsWith("!")){
    alert("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

let motPomme = pomme.substring(18, 23);
let paraPomme = document.getElementById('pomme');
paraPomme.innerHTML = motPomme;

for (let i = 0; i < pomme.length; i++){
    let oneLine = document.getElementById('one-line');
    oneLine.innerHTML = pomme[i];
}