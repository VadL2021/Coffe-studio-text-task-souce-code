export default function loadCheckbox() {
    const checkbox = document.querySelector('.privacy-policy-checkbox')
    checkbox.onclick = () => {
        if (checkbox.classList.contains('active')) {
            checkbox.classList.remove('active')
        } else {
            checkbox.classList.add('active')
        }
    }
}