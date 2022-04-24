// Grab Elements
const expenseName = document.getElementById("expense-name")
const expenseAmount = document.getElementById("expense-amount")
const expenseDate = document.getElementById("expense-date")
const expenseTable = document.getElementById("expenses")
const expenseRow = document.getElementById("expense-row")
const saveExpenses = document.getElementById("save-expenses")

// Event Listeners
saveExpenses.addEventListener("click", addExpenses)
expenseTable.addEventListener("click", deleteButton)

// -Functions

// add expense function 
function addExpenses(event){
    // check if user submitted empty fields 
    if (expenseName.value  === "" || expenseAmount.value  === "" || expenseDate.value  === ""){
        return alert("fill all fields");
    }

    // assign cells to table
    let i = 1
    const row = expenses.insertRow(i)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    
    // insert input values to table
    cell1.innerHTML = expenseName.value
    cell2.innerHTML = expenseAmount.value
    cell3.innerHTML = expenseDate.value

    // create delete button and add to table
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = `Delete`
    deleteBtn.classList.add("delete-btn")
    row.appendChild(deleteBtn)

    // clear field after submitting 
    expenseName.value = ""
    expenseAmount.value = ""
    expenseDate.value = ""
}

// delete button function
function deleteButton(e){
    const item = e.target

    if(item.classList[0] === "delete-btn"){
        const deleteRow = item.parentElement
        deleteRow.remove()
    }

}