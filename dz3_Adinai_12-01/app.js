const a = "1";
let b =2;

for (let key of []) {
    console.log(key)
}
while(1<0){

}

if (a===b) {

}
/*

function  sayHello() {
    console.log("Hello!")
}
sayHello();*/
function getFullName(user, age){
    if(age < 18 ){
        console.log("CLOSE")
    }else{
        console.log("open")
    }
}
const user = {
    first_name: "Adi",
    last_name: "Kia"
}

const user2 = {
    first_name: "Odi",
    last_name: "ye"
}

const user3 = {
    first_name: "DAN",
    last_name: "si"
}

getFullName(user,23)
getFullName(user2,16)
getFullName(user3,19)

/*
console.log(user.first_name, user.last_name)
console.log(user2.first_name, user2.last_name)
console.log(user3.first_name, user3.last_name)*/
