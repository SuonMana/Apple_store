function generateProducts(products) {

    const productsContainer = document.querySelector(".products-container")
    productsContainer.innerHTML = ``

    for (let i = 0; i < products.length; i++) {
        let currentProduct = products[i]

        productsContainer.innerHTML += `
        <div class="product">
            <img src="${currentProduct.image}" alt="">
            <h4>${currentProduct.name}</h4>
            <h2>${currentProduct.price}</h2>
            <button>Detail</button>
            <ion-icon name="cart"></ion-icon>
        </div>
        `
    }

}


export default generateProducts