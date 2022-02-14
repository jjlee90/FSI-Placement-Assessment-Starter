// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Joseph Lee" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
let totalCell = document.querySelector('#qty-total')
const gbPlusBtn = document.querySelector('#add-gb')
let gbCell = document.querySelector('#qty-gb')

gbPlusBtn.addEventListener('click', function() {
    let gbCount = parseInt(gbCell.textContent)
    gbCell.textContent = gbCount +1 

    let totalCount = parseInt(totalCell.textContent)
    totalCell.textContent = totalCount +1 
})
const gbMinusBtn = document.querySelector('#minus-gb')
    
gbMinusBtn.addEventListener('click', function() {
    let gbCount = parseInt(gbCell.textContent)
    gbCell.textContent = gbCount -1 
    
    let totalCount = parseInt(totalCell.textContent)
    totalCell.textContent = totalCount -1 
})
//
const ccPlusBtn = document.querySelector('#add-cc')
let ccCell = document.querySelector('#qty-cc')

ccPlusBtn.addEventListener('click', function() {
    let ccCount = parseInt(ccCell.textContent)
    ccCell.textContent = ccCount +1 

    let totalCount = parseInt(totalCell.textContent)
    totalCell.textContent = totalCount +1 
})
const ccMinusBtn = document.querySelector('#minus-cc')
    
ccMinusBtn.addEventListener('click', function() {
    let ccCount = parseInt(gbCell.textContent)
    ccCell.textContent = ccCount -1 
    
    let totalCount = parseInt(totalCell.textContent)
    totalCell.textContent = totalCount -1 
})
const sugarPlusBtn = document.querySelector('#add-sugar')
let sugarCell = document.querySelector('#qty-sugar')

sugarPlusBtn.addEventListener('click', function() {
    let sugarCount = parseInt(sugarCell.textContent)
    sugarCell.textContent = sugarCount +1 

    let totalCount = parseInt(totalCell.textContent)
    totalCell.textContent = totalCount +1 
})
const sugarMinusBtn = document.querySelector('#minus-sugar')
    
sugarMinusBtn.addEventListener('click', function() {
  
    let sugarCount = parseInt(sugarCell.textContent)
    sugarCell.textContent = sugarCount -1 
    
    let totalCount = parseInt(totalCell.textContent)
    totalCell.textContent = totalCount -1 
})
