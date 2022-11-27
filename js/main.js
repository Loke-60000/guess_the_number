let buttonSelector = document.querySelector("button") 
let input_selector = document.querySelector(".input_player")
let more_or_less_selector = document.querySelector(".more_or_less")
let number_of_tries_selector = document.querySelector(".number_of_tries")
let asnwer_one_selector = document.querySelector(".asnwer_one")
let asnwer_two_selector = document.querySelector(".asnwer_two")

buttonSelector.addEventListener("click", function() {
    buttonSelector.remove()
    number_of_tries_selector.setAttribute("style", "") 
    asnwer_one_selector.setAttribute("style", "")
    input_selector.setAttribute("style", "")
    more_or_less_selector.setAttribute("style", "")
    startgame()

})

function good_answer() {
    return Math.floor((Math.random() * 1000));
}

function startgame() {
    var numberTries = 1
    const good_guess = Number(good_answer())
    console.log(good_guess, "is the good answer you freaking cheater!")

    input_selector.addEventListener("keypress", function(event) {
        let toCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter"]
        if(!toCheck.includes(event.key)) return
        if(event.key == "Enter") {
            
            let typingTry =  Number(input_selector.value)
            let condition = triesnumber(typingTry, good_guess, numberTries)
            
            if(condition == false) {
                numberTries++
                if(typingTry > good_guess) {
                    console.log("it's less!")
                    more_or_less_selector.textContent = "It's less! "
                } else if (typingTry < good_guess) {
                    console.log("it's more!")
                    more_or_less_selector.textContent = "It's more!"
                }
            }
            
        }
    })
}

function triesnumber(essai, good_guess, numberTries) {
    number_of_tries_selector.textContent = "Number of tries: " + numberTries
       
    if(essai == good_guess) {
        asnwer_two_selector.setAttribute("style", "")
        asnwer_two_selector.textContent= 'Good job! It was ' + good_guess
        return true
    } else {
        more_or_less_selector.textContent = ""
        return false
    }
}