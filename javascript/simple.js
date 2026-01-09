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

mana=100;
while(mana>0){
    console.log("casting spell,mana left:" + mana);
    mana-=20;
}

let weapon={name:"sword",damage:50,type:"melee"};
let inventory=["potion","shield","armor"];

    for(let item of inventory){
        console.log(item);
    }


    //single line comment for variable

    let age=23;

   /* multiple line comment 

 Function castSpell(spellName)
Input: spellName as string
Output: Logs the spell being cast

*/


//traditinal function

function add1(a,b){
    return a+b;
}


//arrow function

const add2=(a,b)=> a+b;
console.log(add2(5,5));


function sub1(x,y){
    return x-y;
}

const sub2=(x,y)=> x-y;
console.log(sub2(5,2));

let nums = [1,2,3];
let doubled = nums.map(n => n*2);
console.log(doubled);

let arr = [10, 20, 30];
let [first, second] = arr;
console.log(first, second); 


let hero = {name: "Aria", level: 5};
let {name: heroName, level} = hero;
console.log(heroName, level)

let spells =["Fireball", "Ice Blast", "Lightning", "Heal"];
let [spell1,spell2]=spells;

console.log(spell1,spell2);

let weapon2 = {
  name: "Dragon Sword",
  damage: 75,
  type: "Melee"
};

let { name: weaponName, damage, type } = weapon2;

console.log(weaponName);
console.log(damage);
console.log(type);


let arr1=[1,2];
let arr2=[...arr1,3,4];
console.log(arr2);

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };

console.log(obj2);
