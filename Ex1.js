let input = document.getElementById("input")
let eye = document.getElementById("eye")

eye.addEventListener('click', () => {
    if(input.type === "password"){
        input.type = "text"
    }
    else{
        input.type = "password";
    }
})
