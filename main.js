$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

    $("#bible100").click(function(){
        //  alert("Here  you go Answer the Questions ")
        
});
});

//Get Button Element
var modalButton = document.getElementById('bible100');

//Get modalelememt
var modal = document.getElementById('modalQues')

//Get CloseBtn Element
var closeBtn = document.getElementById('closeBtn')

//Listen for a click
modalButton.addEventListener('click',openModal);

//Function openModal
function openModal(){
   modal.style.display = 'block';
}