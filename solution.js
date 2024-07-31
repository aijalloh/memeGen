document.getElementById('generate-meme').addEventListener('click', function() {
    const canvas = document.getElementById('meme-canvas');
    const context = canvas.getContext('2d');
    const imageUrl = document.getElementById('image-url').value;
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const textColor = document.getElementById('text-color').value;
    const outlineColor = document.getElementById('outline-color').value;

    const img = new Image();
    img.crossOrigin = "Anonymous"; // Allows for loading images from different origins
    img.onload = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set font style
        context.font = 'bold 40px Arial';
        context.fillStyle = textColor;
        context.strokeStyle = outlineColor;
        context.lineWidth = 2;
        context.textAlign = 'center';

        // Draw top text
        context.fillText(topText, canvas.width / 2, 50);
        context.strokeText(topText, canvas.width / 2, 50);

        // Draw bottom text
        context.fillText(bottomText, canvas.width / 2, canvas.height - 30);
        context.strokeText(bottomText, canvas.width / 2, canvas.height - 30);
    };

    img.onerror = function() {
        alert('Failed to load image. Please check the URL and try again.');
    };

    img.src = imageUrl;
});