const settings = {
    itemsPerPage: 6,
    shoes: [
        { name: "Air Jordan 1", price: 26780, image: "jordan-1.webp" },
        { name: "Air Jordan 2", price: 7680, image: "jordan-2.webp" },
        { name: "Air Jordan 3", price: 26543, image: "jordan-3.webp" },
        { name: "Air Jordan 4", price: 14900, image: "jordan-4.webp" },
        { name: "Air Jordan 5", price: 4780, image: "jordan-5.webp" },
        { name: "Air Jordan 6", price: 18980, image: "jordan-6.webp" },
        { name: "Air Jordan 7", price: 26780, image: "jordan-6.webp" },
        { name: "Air Jordan 8", price: 7680, image: "jordan-5.webp" },
        { name: "Air Jordan 9", price: 26543, image: "jordan-4.webp" },
        { name: "Air Jordan 10", price: 14900, image: "jordan-3.webp" },
        { name: "Air Jordan 11", price: 4780, image: "jordan-2.webp" },
        { name: "Air Jordan 12", price: 18980, image: "jordan-1.webp" },
        { name: "Air Jordan 13", price: 26780, image: "jordan-1.webp" },
        { name: "Air Jordan 14", price: 7680, image: "jordan-2.webp" },
        { name: "Air Jordan 15", price: 26543, image: "jordan-3.webp" },
        { name: "Air Jordan 16", price: 14900, image: "jordan-4.webp" },
        { name: "Air Jordan 17", price: 4780, image: "jordan-5.webp" },
        { name: "Air Jordan 18", price: 18980, image: "jordan-6.webp" },
        { name: "Air Jordan 19", price: 26780, image: "jordan-6.webp" },
        { name: "Air Jordan 20", price: 7680, image: "jordan-5.webp" },
        { name: "Air Jordan 21", price: 26543, image: "jordan-4.webp" },
        { name: "Air Jordan 22", price: 14900, image: "jordan-3.webp" },
        { name: "Air Jordan 23", price: 4780, image: "jordan-2.webp" },
        { name: "Air Jordan 24", price: 18980, image: "jordan-1.webp" },
    ],
};

let shoesList = document.getElementById("shoesList");
settings.shoes.forEach((shoes) => {
    let shoesItem = document.createElement("div");
    shoesItem.classList.add("col-lg-4", "col-md-6", "col-12", "d-flex", "align-items-center", "justify-content-center", "position-relative", "shoe", "showShoe");
    shoesItem.innerHTML = `
    <img src="./images/${shoes.image}" width="100%" class="gray-scale">
    <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">
        ${shoes.price} €</div>
    <div class="position-absolute model p-3 fw-bolder h3">${shoes.name}</div>`;
    shoesList.appendChild(shoesItem);
})

let pagination = document.getElementById("pagination");
let itemsPerPage = settings.itemsPerPage;
let shoes = settings.shoes;
let totalPages = Math.ceil(shoes.length / itemsPerPage);

let pagesul = document.createElement("ul");
pagesul.classList.add("pagination", "pagination-lg");
pagination.appendChild(pagesul);




for (let i = 0; i < totalPages; i++) {
    let pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    pageItem.setAttribute("data-start", i * itemsPerPage);

    let pageLink = document.createElement("a");
    pageLink.classList.add("page-link", "font-weight-bold", "text-dark", "unselectedPaginator");
    pageLink.textContent = i + 1;

    if (i === 0) {
        pageLink.classList.remove("unselectedPaginator");
        pageLink.classList.add("selectedPaginator");
    }

    pagesul.appendChild(pageItem);
    pageItem.appendChild(pageLink);

    pageLink.addEventListener("click", function () {
        let start = parseInt(pageItem.getAttribute("data-start"));
        displayShoes(start, itemsPerPage);

        
        document.querySelectorAll(".page-link").forEach(link => {
            link.classList.remove("selectedPaginator");
            link.classList.add("unselectedPaginator");
        });

       
        pageLink.classList.add("selectedPaginator");
        pageLink.classList.remove("unselectedPaginator");
    });
}








function displayShoes(start, itemsPerPage) {
    shoesList.innerHTML = ""; 
    let currentPageShoes = shoes.slice(start, start + itemsPerPage); 
    currentPageShoes.forEach((shoes) => {
        let shoesItem = document.createElement("div");
        shoesItem.classList.add("col-lg-4", "col-md-6", "col-12", "d-flex", "align-items-center", "justify-content-center", "position-relative", "shoe", "showShoe");
        shoesItem.innerHTML = `
        <img src="./images/${shoes.image}" width="100%" class="gray-scale">
        <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">
            ${shoes.price} €</div>
        <div class="position-absolute model p-3 fw-bolder h3">${shoes.name}</div>`;
        shoesList.appendChild(shoesItem);

    });






}




displayShoes(0, itemsPerPage);
