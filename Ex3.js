let dish = [
    { name: 'Rau sạch', category: 'food' },
    { name: 'Thịt lợn', category: 'food' },
    { name: 'Pepsi không calo', category: 'water' },
    { name: 'Cocacola', category: 'water' },
    { name: 'Cờ lê', category: 'tool' },
    { name: 'Tua vít', category: 'tool' }
];


function filterItems(){
    let selectedCate = document.getElementById("Cate").value
    let filteredCate = dish.filter(item => item.category === selectedCate)
    let newUl = document.getElementById("newUl")
 

newUl.innerHTML = "";

filteredCate.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `<b>Food name:</b> ${item.name} - <b>Category:</b> ${item.category}`;
    newUl.appendChild(li);
});
}