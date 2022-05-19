const addToCartButton = document.querySelector('.addToCartButton')
const size = document.querySelector('#size')
const quantity = document.querySelector('#quantity')
const shoppingCart = document.querySelector('#shopping-cart')


function gatherDataFromItem() {
    if(size.value == '' || quantity.value == 0) {
        alert('you need to choose a size and quantity')
    } else {
        const item = {
        item: size.dataset.item,
        price: size.dataset.price,
        size: size.value,
        stock: size.dataset.stock,
        image: size.dataset.imageSrc,
        quantityValue: quantity.value
        }
        const containerDiv = document.createElement('div')
        containerDiv.setAttribute('id', 'container-div')
        const imageDiv = document.createElement('div')
        imageDiv.setAttribute('id', 'shopping-cart-image')
        const imageDiv_image = document.createElement('img')
        imageDiv_image.setAttribute('src', `${item.image}`)
        const itemSummary = document.createElement('div')
        itemSummary.setAttribute('id', 'item-summary')
        const productName = document.createElement('h4')
        productName.textContent = `${item.item}`
        const productPrice = document.createElement('h4')
        productPrice.textContent = `£ ${item.price * item.quantityValue}`
        const productSize = document.createElement('h4')
        productSize.textContent = `Size: ${item.size}`
        const productQuantity = document.createElement('h4')
        productQuantity.textContent = `Quantity: ${item.quantityValue}`
        const itemButtons = document.createElement('div')
        itemButtons.setAttribute('id', 'item-buttons')

        quantity.value = ''
        size.value = ''

        shoppingCart.appendChild(containerDiv)
        containerDiv.appendChild(imageDiv)
        imageDiv.appendChild(imageDiv_image)
        containerDiv.appendChild(itemSummary)
        itemSummary.appendChild(productName)
        itemSummary.appendChild(productPrice)
        itemSummary.appendChild(productSize)
        itemSummary.appendChild(productQuantity)
        containerDiv.appendChild(itemButtons)
    }
}


addToCartButton.addEventListener('click', gatherDataFromItem)

