// Get the container element
const imageContainer = document.getElementById('image-container');

// Get the folder path
const folderPath = 'https://raw.githubusercontent.com/fvelarde/chc_online/main/plots/'; // Update this to match your folder path

// Get the files in the folder
fetch(folderPath)
    .then(response => response.json())
    .then(files => {
        // Loop through the files and create image elements
        files.forEach(file => {
            const img = document.createElement('img');
            img.src = folderPath + file;
            img.alt = file;
            imageContainer.appendChild(img);
        });
    })
    .catch(error => console.error(error));
