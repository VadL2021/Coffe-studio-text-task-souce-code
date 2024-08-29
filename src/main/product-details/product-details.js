import { tabsContent } from './product-details-tabs.js'
export default function loadProductDetailsTabsManager() {
    const buttons = document.querySelectorAll('.tab')
    buttons.forEach((element)  => {
        element.onclick = () => {
            const activeButtons = document.querySelector('.tab.active')
            activeButtons.className = 'tab'

            element.classList.add('active')

            const title = document.querySelector('.tab-content__title')
            const selectedTabContent = tabsContent.find((items) => items.id == element.id)
            title.textContent = selectedTabContent.title

            const paragraph = document.querySelectorAll('.tab-content__paragraph')
            paragraph[0].textContent = selectedTabContent.firstParagraph
            paragraph[1].textContent = selectedTabContent.secondParagraph
        }
    })
}