var btnTranslate = document.querySelector("#translate-btn");

var txtInput = document.querySelector("#translate-ip");

var outputDiv = document.querySelector("#translate-op");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(input)
{
    return serverUrl+"?text="+input;
}

function errorHandler(error)
{
    console.log("error occured ",error);
    alert("Something went wrong in server");
}

function clickHandler()
{
    console.log("Button Clicked");
    var input = txtInput.value;
    var finalUrl = constructUrl(input);
    console.log(finalUrl);
    fetch(finalUrl)
        .then(response => response.json())
        .then(json => (outputDiv.innerText = json.contents.translated));
        .catch(errorHandler);
        
}
btnTranslate.addEventListener("click" , clickHandler);
