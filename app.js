// Grab Elements
const expenseName = document.getElementById("expense-name")
const expenseAmount = document.getElementById("expense-amount")
const expenseDate = document.getElementById("expense-date")
const saveExpense = document.getElementById("save-input")
const expenseTable = document.getElementById("Expenses")
const expenseRow = document.getElementById("expense-row")

// Event Listeners
saveExpense.addEventListener("click", addExpense)
expenseTable.addEventListener("click", deleteButton)

// -Functions

// add expense function 
function addExpense(){
    // check if user submits an empty field
    if(expenseName.value === "" || expenseAmount.value === "" || expenseDate.value === "") {
        return alert("fill all fields")
    } else {

    }

    
    
}

//  dlete button function
function deleteButton(){}