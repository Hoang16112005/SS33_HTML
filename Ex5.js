let products = [
    {
        id: 1,
        name: 'GIGABYTE GeForce RTX 5090 WINDFORCE OC 32G',
        price: 100000000,
        image: 'https://product.hstatic.net/200000722513/product/2000_d3f3b3dd0b024b69a5c15508a91c2e18_grande.png',
        description: 'Coming soon'
    },
    {
        id: 2,
        name: 'ASUS ROG Astral GeForce RTX 5090',
        price: 100000000,
        image: 'https://product.hstatic.net/200000722513/product/rog-astrix-rtx5090-o32g-gaming_box_with_card_nv_73341a59ff3e46e793de18d4ddbacd56_grande.png',
        description: 'Coming soon'
    },
    {
        id: 3,
        name: 'MSI GeForce RTX 5090 32G VANGUARD SOC',
        price: 100000000,
        image: 'https://product.hstatic.net/200000722513/product/800__26__308e6ae904f6440b81b24481b4233c56_grande.png',
        description: 'Coming soon'
    },
    {
        id: 4,
        name: 'ASUS TUF Gaming GeForce RTX 5090 32GB',
        price: 100000000,
        image: 'https://product.hstatic.net/200000722513/product/tuf-rtx5090-32g-gaming_box--with-card_nv-logo_b5170d5291ac45dd9f9da3f57deed24e_grande.png',
        description: 'Coming soon'
    },
    {
        id: 5,
        name: 'ASUS ROG Astral LC GeForce RTX 5090',
        price: 100000000,
        image: 'https://product.hstatic.net/200000722513/product/rog-astral-lc-rtx5090-o32g-gaming-box-with-card_nv_d5b52fee91e34255941c5f5d2fdfbaa2_grande.png',
        description: 'Coming soon'
    },
    {
        id: 6,
        name: 'GIGABYTE AORUS GeForce RTX 5090 XTREME WATERFORCE 32G',
        price: 100000000,
        image: 'https://product.hstatic.net/200000722513/product/2000__70__e11d5336843b4de892e6aaad709f81c0_grande.png',
        description: 'Coming soon'
    }
];

let input = document.getElementById("input")
let search = document.getElementById("search")

document.getElementById("search").addEventListener("click", function() {
    let keyword = document.getElementById("input").value.toLowerCase();
    let productAll = document.querySelectorAll(".container > div");

    productAll.forEach(div => {
        let productName = div.querySelector("h5").innerText.toLowerCase();
        if (productName.includes(keyword)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
});