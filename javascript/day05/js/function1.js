function getPresent(){
    console.log("π");
}

function getScore(score){
    // console.log("μλ ₯νμ  μ μλ :",score,"μλλ€");
    console.log(`μ λ¬λ°μ μ μλ${score}μλλ€`);

}
function getTot(start = 1,end = 5){
    let tot = 0;
    for(let i = start;i<=end;i++){
        tot += i;
    }
    console.log(`${start}λΆν° ${end}κΉμ§μ μ΄ν©μ ${tot}μλλ€`);
}

function setNumbers(num1,...num2){
    console.log(`num1μ κ°: ${num1}`)
    console.log(`num2μ κ°: ${num2}`)
}

function setMath(...math){
    for(let i of math){
        console.log(i);
    }
}

function getDonut(){
    return 'π©';
}

