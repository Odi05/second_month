function twoMass(num, num2) {
    if (num < num2){
        alert("Первый меньше второго")
    } else if(num===num2){
        alert("Equal")
    } else{
        alert("Второй меньше первого")
    }
}

const num = [1,2,3,4,5,6]
const num2 = [1,2,3,4]

twoMass(num, num2)