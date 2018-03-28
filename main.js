$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

//      $("#bible100").click(function(){
//      alert("Here  you go Answer the Questions ")       
// });
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
// var modalButton1 = document.getElementById('bible100');
// var modalButton2 = document.getElementById('bible200');
// var modalButton3 = document.getElementById('bible300');
// var modalButton4 = document.getElementById('bible400');
// var modalButton5 = document.getElementById('bible500');

//Get modalelememt
// var modal = document.getElementById('modalQues')
// var modal11 = document.getElementById('modalQues11')

//Get CloseBtn Element
// var closeBtn = document.getElementById('closeBtn')
// var submitButton = document.getElementById('submitButton')

//Listen for a click
// modalButton1.addEventListener('click',openModal);
// modalButton2.addEventListener('click',openModal);
// modalButton3.addEventListener('click',openModal);
// modalButton4.addEventListener('click',openModal);
// modalButton5.addEventListener('click',openModal);

//Listen for a click
// closeBtn.addEventListener('click',closeModal);
// submitButton.addEventListener('click',closeModal)

//Function openModal- displays the questions- opens the modal block
// function openModal(){
//    modal.style.display = 'block';
// }

//Function closeModal
// function closeModal(){
//     modal.style.display = 'none';
//  }
 
