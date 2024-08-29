import { recomendations } from './recommendations.js'
export default function loadRecomendations() {
    // const list = document.querySelector('.slider')
    const recomendationsWrapper = document.querySelector('.recomendations-wrapper')

    // Разобьем файл на карточки
    recomendations.forEach((recomendation) => {
        // Создаем карточку товара
        const product = document.createElement('article')
        product.className = 'recommended-product'

        // Создаем обертку для картинки и добавляем в нее картинку
        // затем добавляем обертку в карточку
        const imageWrapper = document.createElement('div')
        imageWrapper.className = 'product-photo-wrapper'

        const image = document.createElement('img')
        image.className = 'product-photo'
        image.src = recomendation.image

        imageWrapper.append(image)
        product.append(imageWrapper)

        // Создаем кнопку добавления в закладки и добавляем в нее иконку для этой кнопки
        // Затем добавляем кнопку в карточку
        const bookmarkButton = document.createElement('button')
        bookmarkButton.className = 'bookmark-button'
        bookmarkButton.onclick = () => {
            alert('Товар добавлен в избранное!')
        }

        const bookmarkIco = document.createElement('img')
        bookmarkIco.className = 'bookmark-button-ico'
        bookmarkIco.src = './src/images/bookmark-button-ico.svg'
        
        bookmarkButton.append(bookmarkIco)
        product.append(bookmarkButton)

        // Проверяем на наличие акции, добавляем теги, если они есть
        const features = document.createElement('span')
        features.className = 'feature-labels'

        if (recomendation.isNew == "yes") {
            const newIndicatior = document.createElement('span')
            newIndicatior.className = 'feature-label'
            newIndicatior.textContent = 'NEW'
            features.append(newIndicatior)
        }
        if (recomendation.isThreeForTwo == "yes") {
            const threeForTwoSale = document.createElement('span')
            threeForTwoSale.className = 'feature-label'
            threeForTwoSale.textContent = '2 +1'
            features.append(threeForTwoSale)
        }
        if (recomendation.isProductOfTheWeek == "yes") {
            const productOfWeek = document.createElement('span')
            productOfWeek.className = 'feature-label'
            productOfWeek.textContent = 'Товар недели'
            features.append(productOfWeek)
        }

        imageWrapper.append(features)

        // "isNew" : "yes",
        // "isThreeForTwo" : "no",
        // "isProductOfTheWeek" : "yes",

        // Создаем параграф с именем продукта
        // Добавляем параграф в карточку
        const productNameParagraph = document.createElement('p')
        productNameParagraph.className = 'product-name'
        productNameParagraph.textContent = recomendation.name

        product.append(productNameParagraph)

        // Создаем футер с ценой (текущая ₽, полная ₽, скидка %) и кнопкой добавления в корзину
        // Добавляем футер в карточку

        const footer = document.createElement('div')
        footer.className = 'recommended-product__footer'

        const currentPrice = document.createElement('span')
        currentPrice.className = 'current-price'
        currentPrice.textContent = recomendation.currentPrice
        const fullPrice = document.createElement('span')
        fullPrice.className = 'full-price'
        fullPrice.textContent = recomendation.fullPrice
        const discount = document.createElement('span')
        discount.className = 'discount'
        discount.textContent = recomendation.discount

        const addToCartButton = document.createElement('button')
        addToCartButton.className = 'add-to-cart'
        const addToCartButtonIco = document.createElement('img')
        addToCartButtonIco.className = 'add-to-cart-ico'
        addToCartButtonIco.src = './src/images/add-to-cart-ico.svg'
        addToCartButtonIco.onclick = () => {
            alert('Вы добавили товар в корзину!')
        }
        

        footer.append(currentPrice, fullPrice, discount)
        addToCartButton.append(addToCartButtonIco)
        footer.append(addToCartButton)
        product.append(footer)

        // Добавляем карточку в слайдер

        recomendationsWrapper.append(product)
    })

    // Привяжем движение карточек к нажатиям стрелок
    const leftArrow = document.querySelector('.slider-left-arrow')
    const rightArrow = document.querySelector('.slider-right-arrow')
    let currentTranslate = 0
    let currentElement = 1
    leftArrow.onclick = () => {
        if (currentElement > 1 ) {
            currentTranslate += 408
            currentElement -= 1
            recomendationsWrapper.style.transform = `translateX(${currentTranslate}px)`
        }
    }
    rightArrow.onclick = () => {
        if (currentElement < recomendations.length ) {
            currentTranslate -= 408
            currentElement += 1
            recomendationsWrapper.style.transform = `translateX(${currentTranslate}px)`
        }
    }
}
