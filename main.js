let target = document.querySelector("#dynamic");
let stringArr = ["인공지능학부","24학번","권소윤","2005년생","멋사12기"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString(){
    let target = document.querySelector("#dynamic");
let stringArr = ["인공지능학부","24학번","권소윤","2005년생","멋사12기"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){

        console.log(randomArr);
        if(randomArr.length > 0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                dynamic(randomArr);
            },80);
        }else{
            setTimeout(resetTyping, 3000);

        }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);
