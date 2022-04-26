// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  
  const priceValue = parseFloat(price.innerHTML)
  const inputValue = quantity.value

  const subTotalValue = priceValue * inputValue
  
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subTotalValue

  return subTotalValue
}

function calculateAll() {
 
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let total = 0
  const products = document.getElementsByClassName('product')

  for(let product of products){
    total += updateSubtotal(product)
  }
  //ITERATION 3
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const button = event.currentTarget
  const product = button.parentNode.parentNode
  const parent = product.parentNode

  parent.removeChild(product)

}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector('.create-product')
  const newProductInput = createRow.querySelector('input')
  const newProductName = newProductInput.value
  const newProductPriceInput = createRow.querySelector('input[type ="number"]')
  const newProductPriceValue = newProductPriceInput.valueAsNumber.topFixed(2)
  const newTR = document.createElement('tr')
  newTR.setAttribute('class', 'product')
  newTR.innerHTML = `
  <td class="name">
    <span>${newProductName}</span>
      </td>
      <td class="price">$<span>${newProductPriceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
  </td>
  `
  const parent = document.querySelector('#cart tbody')
  parent.appendChild(newTR)

  const removeBtn = newTR.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct)

  newProductInput.valule = " "
  newProductPriceInput.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeProductsBtn = document.getElementsByClassName('btn-remove')
  for(let removeProductBtn of removeProductsBtn){
    removeProductBtn.addEventListener('click', removeProduct)
  }

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
});
