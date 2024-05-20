document.addEventListener('DOMContentLoaded', function () {
    const images = [
        // URLs de las imágenes de ejemplo
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg',
        'imagen4.jpg',
        'imagen5.jpg',
        'imagen6.jpg',
        'imagen7.jpg',
        'imagen8.jpg',
        'imagen9.jpg',
        'imagen10.jpg',
        // Añadir más URLs de imágenes según sea necesario
    ];

    const imageContainer = document.getElementById('imageContainer');
    const searchBar = document.getElementById('searchBar');

    function displayImages(filter = '') {
        imageContainer.innerHTML = '';
        const filteredImages = images.filter(img => img.toLowerCase().includes(filter.toLowerCase()));
        filteredImages.forEach(img => {
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('image-container');
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = img;
            imgElement.addEventListener('click', () => {
                window.open(img, '_blank');
            });
            imgDiv.appendChild(imgElement);
            imageContainer.appendChild(imgDiv);
        });
    }

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value;
        displayImages(filter);
    });

    displayImages();
});
