    document.addEventListener('DOMContentLoaded', function () {
        fetch('../assets/json/infoPage/homePage/carrouselData.json') 
            .then(response => response.json())
            .then(data => {
                // Loading the data of the carrousel
                const carouselItems = data.carousel;
                const carouselInner = document.querySelector('.carousel-inner');

                carouselItems.forEach((item, index) => {
                    const carouselItem = document.createElement('div');
                    carouselItem.classList.add('carousel-item');

                    if (index === 0) {
                        carouselItem.classList.add('active');
                    }

                    const image = document.createElement('img');
                    image.src = item.imageUrl;
                    image.classList.add('d-block', 'square');
                    image.alt = item.title;
                    image.style.width = '120%';
                    carouselItem.appendChild(image);

                    const overlay = document.createElement('div');
                    overlay.classList.add('carousel-caption-overlay');

                    const title = document.createElement('h5');
                    title.classList.add('header-image-container');
                    title.style.color = '#61f5eb';
                    title.innerHTML = item.title;
                    overlay.appendChild(title);

                    const description = document.createElement('p');
                    description.style.textAlign = 'left';
                    description.style.padding = '4rem';
                    description.innerHTML = item.description;
                    overlay.appendChild(description);

                    carouselItem.appendChild(overlay);

                    carouselInner.appendChild(carouselItem);
                });
            })
            .catch(error => {
                console.error('Error loading or parsing the JSON file:', error);
                window.location.href = 'error.html';
            });
    });