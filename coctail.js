const $strDrink = $('#strDrink'); 
const $strInstructions = $('strInstructions'); 
const $form = $('form'); 
const $input = $(`input[type="text"]`); 

$form.on('submit', drinksData)

function drinksData(event){

    event.preventDefault()

    const userInput = $input.val(); 

    $.ajax(URL + userInput).then(function(data){
        console.log("Let's find your cocktail!")
        console.log(data.drinks); 
        $strDrink.text(data.strDrink)
        $strInstructions.text(data.strInstructions)

        $('main').append(`<img src="${data.strDrinkThumb}"/>`)

    }, function(error){
        console.log('something is wrong')
        console.log(error)
    })
}

$.ajax(URL).then(function(data){
    console.log("Let's find your cocktail!"); 
    console.log(data); 
}, function(error){
    console.log('something is wrong')
    console.log(error)
}); 