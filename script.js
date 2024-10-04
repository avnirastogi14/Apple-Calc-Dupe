let currentInput = "";
let expression = "";

function dis(val) 
{
    let display = document.getElementById("display");
    currentInput += val;
    display.innerText = currentInput;
}

function operator(op) 
{
    if (currentInput !== "") 
    {
        expression += currentInput + op;
        currentInput = "";
    }
}   

function clr() 
{
    currentInput = "";
    expression = "";
    document.getElementById("display").innerText = "0";
}

function negpos() 
{
    if (currentInput !== "")
    {
        currentInput = String(-parseFloat(currentInput));
        document.getElementById("display").innerText = currentInput;
    }
}

function percent() 
{
    if (currentInput !== "") 
    {
        currentInput = String(parseFloat(currentInput) / 100);
        document.getElementById("display").innerText = currentInput;
    }
}

function solve() 
{
    if (currentInput !== "") 
    {
        expression += currentInput;
        let display = document.getElementById("display");
        try 
        {
            let result = eval(expression.replace('×', '*').replace('÷', '/'));
            display.innerText = result;
            expression = "";
            currentInput = String(result);
        } 
        catch (error) 
        {
            display.innerText = "Error";
        }
    }
}