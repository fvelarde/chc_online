// Get the container element
const imageContainer = document.getElementById('image-container');

// GitHub API endpoint
const apiUrl = 'https://api.github.com/repos/fvelarde/chc_online/contents/plots';

// Fetch the contents of the plots folder
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Loop through the files and create image elements
        data.forEach(file => {
            if (file.type === 'file') {
                const img = document.createElement('img');
                img.src = file.download_url;
                img.alt = file.name;
                imageContainer.appendChild(img);
            }
        });
    })
    .catch(error => console.error(error));
