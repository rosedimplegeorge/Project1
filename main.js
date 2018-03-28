$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

//     $("#bible100").click(function(){
//         //  alert("Here  you go Answer the Questions ")
        
// });
});

let totalScore = 0;
// let finalScore = [];

//Get Button Element
var button11 = document.getElementById('bible100');
//Listen for a click
button11.addEventListener('click',openPrompt);
//Function openPrompt
function openPrompt(){
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
        console.log("The Final Score is " + totalScore + "Congratulations !")
        document.getElementById('totalScore').innerHTML = totalScore;
        
}

$("#bible100").click(function(){
    $("#bible100").hide();
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
 
