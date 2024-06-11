const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");




clearBtn.addEventListener("click", (e) =>{
    results.innerHTML = "";
})
 
checkBtn.addEventListener("click", (event) =>{
    if(!input.value){
        alert("Please provide a phone number");
    }
});