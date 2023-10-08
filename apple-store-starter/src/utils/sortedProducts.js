import generateProducts from "../components/generateProducts.js"

function sortedProducts(products) {

    const productTypes = document.querySelector("#productType")

    productTypes.addEventListener("change", (e) => {
        let sortedTerm = e.target.value 

        let afterSortedProducts

        if (sortedTerm == "lower_price") {
            afterSortedProducts = products.sort(function(productA, productB) {
                return productA.price - productB.price
            })
        } else if (sortedTerm == "higher_price") {
            afterSortedProducts = products.sort(function(productA, productB) {
                return productB.price - productA.price
            })
        }
        
        generateProducts(afterSortedProducts)
    })
}

export default sortedProducts