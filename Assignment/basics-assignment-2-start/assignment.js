const task3Element = document.getElementById('task-3');

function msg(){
    alert("Hello there...!");
}

function showName(name){
    alert(name);
}

function concat(s1,s2,s3){
    return s1+s2+s3;
}

msg();
showName("siva");
alert(concat("Siva","Rama","Krishnan"));

task3Element.addEventListener('click',msg);