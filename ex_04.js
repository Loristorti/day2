let a = 2
let b = 4
let action = "sub"
function calculator() {
if (action === "add")
return addition(a, b) 
else if (action === "sub")
{
return substraction(a, b)
}
} 

function addition() {
return (b = a + b)
}
function substraction()
{
return (b = a - b)
}
