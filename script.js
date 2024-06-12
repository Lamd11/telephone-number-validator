const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const check = (inputString) =>{
    const regex = /^(\s*)?(1?)?(\s*)?(\(\d{3}\)|\d{3})[\s-]?(\s*)?(\d{3}-?)(\s*)?(\d{4}-?)(\s*)?$/g;
    const inputString_regex = inputString.replace(regex, "");
    if(inputString_regex === ""){
        results.innerHTML += `<p>Valid US Number: ${inputString}</p>`;
    }
    else{
        results.innerHTML += `<p>Invalid US Number: ${inputString}</p>`;
    }
}


clearBtn.addEventListener("click", (e) =>{
    results.innerHTML = "";
})
 
checkBtn.addEventListener("click", (event) =>{
    if(!input.value){
        alert("Please provide a phone number");
    }
    else{
        check(input.value);
    }
});