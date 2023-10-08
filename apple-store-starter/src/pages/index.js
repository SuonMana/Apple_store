import generateProducts from '../components/generateProducts.js'
import products from '../db/data.js'
import filterProducts from '../utils/filterProducts.js'
import searchProducts from '../utils/searchProducts.js'
import sortedProducts from '../utils/sortedProducts.js'

window.addEventListener("DOMContentLoaded", () => {

  generateProducts(products)

  searchProducts(products)

  sortedProducts(products)

  filterProducts(products)

})