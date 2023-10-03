var input = document.getElementById("input");

var label = document.getElementById("email-required");

var subscribe = document.getElementById("subscribe");

var container = document.getElementById("container");

var TelaSuccess = document.getElementById("success");


input.addEventListener("focus", function() {   
    input.style.outline = "none";
});

input.addEventListener("input", function () {
    var email = input.value;
    var isValid = /\S+@\S+\.\S+/.test(email); 

    if (isValid) {
        input.style.color = "hsl(231, 7%, 60%)";
        input.style.borderColor = "initial";
        input.style.borderColor = "hsl(231, 7%, 60%)";
        label.style.display = "none";
        
        input.setCustomValidity(""); 
    } else {
        input.style.color = "hsl(4, 100%, 67%)"; 
        input.style.borderColor = "initial";
        input.style.borderColor = "hsl(4, 100%, 67%)"; 
        label.style.display = "block";
        label.style.color = "hsl(4, 100%, 67%)";
    }
});

subscribe.addEventListener("click", function() {
    var gmail = input.value;
    

   
    container.style.display = "none";
    document.body.innerHTML = `<div id="success" class="success">
        <div id="items" class="items">
          <img src="/assets/images/icon-success.svg" alt="">
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to  <span id="email-message">${gmail}</span>. Please open it and click the button inside to confirm your subscription.</p>
          <input class="submit" type="submit" value="Dismiss message"> 
        </div>`

        var emailMessage = document.getElementById("email-message");
    emailMessage.style.color = "hsl(234, 29%, 20%)";

})



