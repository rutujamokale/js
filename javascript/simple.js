let name="rutuja mokale";
console.log(name);


let attack1=30;
let attack2=50;
let attack3=70;

let totaldamage=attack1+attack2+attack3;
console.log(totaldamage);


let mana=40;
let castspell=20;
let isalive=true;

letcancastspell=mana>=castspell  && isalive;
console.log(letcancastspell);



let herolevel=40;
let enemylevel=30;

console.log(herolevel>enemylevel);  
console.log(herolevel<enemylevel);
console.log(herolevel==enemylevel);

function castSpell(spellname){
    console.log("casting" +spellname); 
}
let cast=(spellname)=>{
    console.log("casting" +spellname);
}

castSpell("fireball");
cast("icebolt");

let health=100;
if(health>0){
    console.log("the hero is alive");
   
} else{
    console.log("the hero is dead");
}



for(let round=1;round<=5;round++){
    console.log("round" + round);
}

