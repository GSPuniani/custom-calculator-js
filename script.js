const tipPerPerson = document.querySelector("#display1")
// Full total includes tip and is also to be displayed along with tip amount
const fullTotal = document.querySelector("#display2")
const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip-percentage")
// Include an input for number of people so that the tip can be distributed equally
const peopleInput = document.querySelector("#people")

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value

    // Tip amount must be divided by the number of people and divided by 100 because tip percentage is used
    const tipAmount = billValue * tipValue / (100 * peopleValue)
    // The final total is the bill plus the product of the bill and tip divided by 100
    const finalTotal = billValue * (1 + tipValue / 100)

    display1.innerHTML = tipAmount.toFixed(2)
}

billInput.addEventListener("input", calculateTip)
tipInput.addEventListener("input", calculateTip)
peopleInput.addEventListener("input", calculateTip)







