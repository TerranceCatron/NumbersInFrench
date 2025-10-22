


$('.ButtonBox').click(function(){
    var mathgen = Math.floor(Math.random() * 20) + 1;

    var imageCall = mathgen + "img.png";

    var imageSelector = "images/" + imageCall;

    var image1 = document.querySelectorAll('img')[0];

    image1.setAttribute("src",imageSelector);

});




 $('.UserAnswer').click(function(){
   
    var list = ['zéro','un', 'deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf','vingt']

    var result = prompt('What is this number in french?')

    if(list.includes(result)){
        alert('Correct :)')
    }
    else{
        alert('Wrong, Try again or check spelling')
    }
});




