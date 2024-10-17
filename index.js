const display = document.getElementById("display");

// takes in the  symbol/number based on whch button was pressed and appends it on the display
function addToDisplay(input){
    display.value += input;
}

// clears the display
function clearDisplay(){
    display.value = "";
}

// calculates the equation within the display and shows the answer
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

//removes the last entered symbol/number
function remove(){
    if(display.value.toLowerCase() == 'error' || display.value.toLowerCase() == 'infinity' || display.value.toLowerCase() == 'nan'){
        display.value = "";
    }
    else{
        display.value = display.value.slice(0, -1);
    }
}