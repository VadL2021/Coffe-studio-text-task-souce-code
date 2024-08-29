export default function loadGalleryManager() {
    const pictures = document.querySelectorAll('.side-photo')
    pictures.forEach((element) => {
        element.onclick = () => {
            const previusActivePicture = document.querySelector('.side-photo.active')
            if (previusActivePicture) {
                previusActivePicture.classList.remove('active')
            }

            const newActivePicture = document.querySelector('.selected-photo')
            element.classList.add('active')
            newActivePicture.src = element.src
        }
    });
}

// export default loadGalleryManager