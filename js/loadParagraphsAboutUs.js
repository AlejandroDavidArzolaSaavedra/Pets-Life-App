document.addEventListener('DOMContentLoaded', function() {
    fetch('../assets/json/infoPage/aboutUs.json')
        .then(response => response.json())
        .then(data => {
            const aboutUsContent = document.getElementById('aboutUs-content');
            const paragraphs = data.aboutUs;
            var aboutUsData = [];
            // Add paragraphs from the JSON
            paragraphs.forEach(paragraph => {
                aboutUsData.push(paragraph);
            });

            // Add each paragraph to the "about us" content on the page
            aboutUsData.forEach((paragraph, index) => {
                const paragraphElement = document.createElement('p');
                paragraphElement.textContent = paragraph;
                // In the movile view only see 2 paragraphs
                if (index >= 2) {
                    paragraphElement.classList.add('hidden-mobile');
                }
                paragraphElement.classList.add('parragraph-about-us');
                aboutUsContent.appendChild(paragraphElement);
            });
        })
        .catch(error => {
            console.error('Error loading or parsing the JSON file:', error);
            window.location.href = '../html/error.html';
        });
});
