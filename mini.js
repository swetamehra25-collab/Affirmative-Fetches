const affirmationText = document.getElementById("affirmation");
const btn = document.getElementById("btn");

function getAffirmation(){

    affirmationText.innerText = "Loading affirmation...";

    fetch("https://corsproxy.io/?https://www.affirmations.dev/?rand=" + Math.random())
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        affirmationText.innerText = data.affirmation;
    })
    .catch(function(){
        affirmationText.innerText = "Could not load affirmation.";
    });

}

document.addEventListener("DOMContentLoaded", getAffirmation);

btn.addEventListener("click", getAffirmation);







