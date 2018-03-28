$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

    $("#bible100").click(function(){
        //  alert("Here  you go Answer the Questions ")
        
});
});

let score = 0;

//Get Button Element
var modalButton1 = document.getElementById('bible100');
var modalButton2 = document.getElementById('bible200');
var modalButton3 = document.getElementById('bible300');
var modalButton4 = document.getElementById('bible400');
var modalButton5 = document.getElementById('bible500');

//Get modalelememt
var modal = document.getElementById('modalQues')

//Get CloseBtn Element
var closeBtn = document.getElementById('closeBtn')
var submitButton = document.getElementById('submitButton')

//Listen for a click
modalButton1.addEventListener('click',openModal);
modalButton2.addEventListener('click',openModal);
modalButton3.addEventListener('click',openModal);
modalButton4.addEventListener('click',openModal);
modalButton5.addEventListener('click',openModal);

//Listen for a click
closeBtn.addEventListener('click',closeModal);
submitButton.addEventListener('click',closeModal)

//Function openModal- displays the questions- opens the modal block
function openModal(){
   modal.style.display = 'block';
}

//Function closeModal
function closeModal(){
    modal.style.display = 'none';
 }
 
