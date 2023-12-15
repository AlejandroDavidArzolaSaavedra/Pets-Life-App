document.addEventListener('DOMContentLoaded', function () {
        fetch('../assets/json/infoPage/homePage/homePagePresentation.json')
            .then(response => response.json())
            .then(data => {
                const mainTitle = document.getElementById('main-title');
                const secondaryTitle = document.getElementById('secondary-title');
                const description = document.getElementById('description');

                mainTitle.textContent = data.homePageStructure.mainTitle;
                secondaryTitle.textContent = data.homePageStructure.secondaryTitle;
                description.textContent = data.homePageStructure.description;
            })
            .catch(error => {
                console.error('Error loading or parsing the JSON file:', error);
                window.location.href = 'error.html';
            });
    });
