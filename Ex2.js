let input = document.getElementById("input")
let button = document.getElementById("button")
let char = document.getElementById("char")


button.addEventListener('click', () => {
    let inputValue = input.value 
    char.innerHTML = `${inputValue.length}`
})