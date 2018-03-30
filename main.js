$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Click 'OK' and click on any button under any catogory to start the game ")
});

let totalScore = 0;
//Get Button Element
var button11 = document.getElementById('bible100');
//Listen for a click
button11.addEventListener('click',openPrompt1);
//Function openPrompt
function openPrompt1(){
    let question1 = prompt("What's the very first book in the bible?(Please answer in LOWER CASE ONLY")
    if (question1 === "genesis"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 100
        console.log("The Total score is   " +totalScore)
    }
    else if (question1 != "genesis") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 100
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#bible100").click(function(){
    $("#bible100").hide();
});

//Get Button Element
var button12 = document.getElementById('bible200');
//Listen for a click
button12.addEventListener('click',openPrompt2);
//Function openPrompt
function openPrompt2(){
    let question2 = prompt("What's the very last book in the bible?(Please answer in LOWER CASE ONLY")
    if (question2 === "revelation"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 200
        console.log("The Total score is   " +totalScore)
    }
    else if (question2 != "revelation") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 200
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#bible200").click(function(){
    $("#bible200").hide();
});

//Get Button Element
var button13 = document.getElementById('bible300');
//Listen for a click
button13.addEventListener('click',openPrompt3);
//Function openPrompt
function openPrompt3(){
    let question3 = prompt("What's the Longest chapter in Psalms?")
    if (question3 === "119"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 300
        console.log("The Total score is   " +totalScore)
    }
    else if (question3 != "119") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 300
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#bible300").click(function(){
    $("#bible300").hide();
});

//Get Button Element
var button14 = document.getElementById('bible400');
//Listen for a click
button14.addEventListener('click',openPrompt4);
//Function openPrompt
function openPrompt4(){
    let question4 = prompt("What's the Shortest chapter in Psalms?")
    if (question4 === "117"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 400
        console.log("The Total score is   " +totalScore)
    }
    else if (question4 != "117") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 400
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#bible400").click(function(){
    $("#bible400").hide();
});

//Get Button Element
var button15 = document.getElementById('bible500');
//Listen for a click
button15.addEventListener('click',openPrompt5);
//Function openPrompt
function openPrompt5(){
    let question5 = prompt("How many books are there in the bible?")
    if (question5 === "66"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 500
        console.log("The Total score is   " +totalScore)
    }
    else if (question5 != "66") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 500
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#bible500").click(function(){
    $("#bible500").hide();
});

var button21 = document.getElementById('general100');
//Listen for a click
button21.addEventListener('click',openPrompt21);
//Function openPrompt
function openPrompt21(){
    let question21 = prompt("Who is the President of the US?")
    if (question21 === "trump"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 100
        console.log("The Total score is   " +totalScore)
    }
    else if (question21 != "trump") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 100
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#general100").click(function(){
    $("#general100").hide();
});

var button22 = document.getElementById('general200');
//Listen for a click
button22.addEventListener('click',openPrompt22);
//Function openPrompt
function openPrompt22(){
    let question22 = prompt("Who is the FIRST President of the US?")
    if (question22 === "washington"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 200
        console.log("The Total score is   " +totalScore)
    }
    else if (question22 != "washington") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 200
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#general200").click(function(){
    $("#general200").hide();
});

var button23 = document.getElementById('general300');
//Listen for a click
button23.addEventListener('click',openPrompt23);
//Function openPrompt
function openPrompt23(){
    let question23 = prompt("Who is the Prime minister of INDIA?")
    if (question23 === "modi"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 300
        console.log("The Total score is   " +totalScore)
    }
    else if (question23 != "modi") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 300
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#general300").click(function(){
    $("#general300").hide();
});

var button24 = document.getElementById('general400');
//Listen for a click
button24.addEventListener('click',openPrompt24);
//Function openPrompt
function openPrompt24(){
    let question24 = prompt("Who is the Prime minister of CANADA?")
    if (question24 === "truedo"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 400
        console.log("The Total score is   " +totalScore)
    }
    else if (question24 != "truedo") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 400
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#general400").click(function(){
    $("#general400").hide();
});

var button25 = document.getElementById('general500');
//Listen for a click
button25.addEventListener('click',openPrompt25);
//Function openPrompt
function openPrompt25(){
    let question25 = prompt("Capital of CANADA?")
    if (question25 === "ottawa"){
        alert("Correct Answer and you get Points for answering it correctly !" )
        totalScore = totalScore + 500
        console.log("The Total score is   " +totalScore)
    }
    else if (question25 != "ottawa") {
        alert("Wrong Answer- You Lost some Points ! Be careful answering next time !")
        totalScore = totalScore - 500
        console.log("The Total score is   " +totalScore)
    }
        // finalScore.push = totalScore;
        console.log("The Final Score is " + totalScore)
        document.getElementById('totalScore').innerHTML = totalScore;
        
}
//Hide the button once it's clicked
$("#general500").click(function(){
    $("#general500").hide();
});


 
