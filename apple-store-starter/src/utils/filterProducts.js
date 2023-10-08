import generateProducts from "../components/generateProducts.js"



function filterProducts(products) {

  const categories = document.querySelector(".categories")

  categories.addEventListener('click', (e) => {
    const currentBtn = e.target

    let value = currentBtn.dataset.id
    //console.log(value)

    let newProducts

    if (value == "all") {
        newProducts = products
    } else {
        newProducts = products.filter((eachProduct) => {
            return eachProduct.category == value
        })
    }

    generateProducts(newProducts)
  })

}

export default filterProducts