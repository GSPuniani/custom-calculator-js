// Create variables for each input element
const principalInput = document.querySelector("#principal")
const interestInput = document.querySelector("#interest-rate")
const timeInput = document.querySelector("#time")
const timeUnits = document.querySelector("#select-time-units")
const nInput = document.querySelector("#n")

// Assign options for time units in drop-down menu to variables to adjust labels depending on the time value entered
const yearSingular = document.querySelector("#year")
const monthSingular = document.querySelector("#month")
const daySingular = document.querySelector("#day")

// Assign label for n to a variable to adjust the label text depending on the units selected in the drop-down menu
const nLabel = document.querySelector("#n-unit-label")

function calculateCompoundInterest() {
    // Assign input values to new variables
    const principalValue = principalInput.value
    const interestValue = interestInput.value
    const timeValue = timeInput.value
    const unitValue = timeUnits.value
    const nValue = nInput.value

    // Adjust prompt for number of times interest is compounded by displaying correct unit of time according to user selection
    if (unitValue === "Years" || unitValue === "Year") {
        nLabel.innerHTML = " year"
    }
    else if (unitValue === "Months" || unitValue === "Month") {
        nLabel.innerHTML = " month"
    }
    else if (unitValue === "Days" || unitValue === "Day") {
        nLabel.innerHTML = " day"
    }


    // Adjust the units of the drop-down menu to singular form if the time entered is 1
    if (timeValue == 1) {
        yearSingular.innerHTML = "Year"
        monthSingular.innerHTML = "Month"
        daySingular.innerHTML = "Day"
    }
    else {
        yearSingular.innerHTML = "Years"
        monthSingular.innerHTML = "Months"
        daySingular.innerHTML = "Days"
    }

    
    // Calculate the full amout using the formula for compound interest
    // interestValue is divided by 100 to convert the percentage into a decimal value
    const fullAmount = principalValue * Math.pow(1 + interestValue / (100 * nValue), nValue * timeValue)

    // Change the display to read the calculated full amount with digits after the decimal place
    display.innerHTML = "$" + fullAmount.toFixed(2)
}

// Create event listeners so that the total amount is adjusted every time an input value is changed
principalInput.addEventListener("input", calculateCompoundInterest)
interestInput.addEventListener("input", calculateCompoundInterest)
timeInput.addEventListener("input", calculateCompoundInterest)
timeUnits.addEventListener("change", calculateCompoundInterest)
nInput.addEventListener("input", calculateCompoundInterest)







