function getPresent(){
    console.log("💕");
}

function getScore(score){
    // console.log("입력하신 점수는 :",score,"입니다");
    console.log(`전달받은 점수는${score}입니다`);

}
function getTot(start = 1,end = 5){
    let tot = 0;
    for(let i = start;i<=end;i++){
        tot += i;
    }
    console.log(`${start}부터 ${end}까지의 총합은 ${tot}입니다`);
}

function setNumbers(num1,...num2){
    console.log(`num1의 값: ${num1}`)
    console.log(`num2의 값: ${num2}`)
}

function setMath(...math){
    for(let i of math){
        console.log(i);
    }
}

function getDonut(){
    return '🍩';
}

