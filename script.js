// Full total includes interest and is the big value to be displayed
// const fullAmount = document.querySelector("#display")
// 
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
    const principalValue = principalInput.value
    const interestValue = interestInput.value
    const timeValue = timeInput.value
    const unitValue = timeUnits.value
    const nValue = nInput.value

    if (unitValue === "Years") {
        nLabel.innerHTML = " year"
    }
    else if (unitValue === "Months") {
        nLabel.innerHTML = " month"
    }
    else if (unitValue === "Days") {
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

    
    const fullAmount = principalValue * Math.pow(1 + interestValue / (100 * nValue), nValue * timeValue)

    display.innerHTML = "$" + fullAmount.toFixed(2)
}

principalInput.addEventListener("input", calculateCompoundInterest)
interestInput.addEventListener("input", calculateCompoundInterest)
timeInput.addEventListener("input", calculateCompoundInterest)
timeUnits.addEventListener("change", calculateCompoundInterest)
nInput.addEventListener("input", calculateCompoundInterest)







