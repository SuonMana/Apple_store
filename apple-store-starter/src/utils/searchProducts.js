import generateProducts from "../components/generateProducts.js"

function searchProducts(products) {

  const form = document.querySelector(".search-form")
  const searchItem = document.querySelector("#search-item")

  form.addEventListener('keyup', () => {
    let searchTerm = searchItem.value

    let filterProducts = products.filter((eachProduct) => {
        return eachProduct.name.toLowerCase().includes(searchTerm)
    })
    console.log(filterProducts)

    generateProducts(filterProducts)
  })
}

export default searchProducts