const socket = io();

socket.on('updateDisplay', (data) => {
    // Update Image 1 and Button 1
    if (data.image1Url) {
        const image1 = document.getElementById('image1');
        image1.src = data.image1Url;
        image1.onclick = () => window.location.href = data.link1Url;  // Set the link for the image
    }
    if (data.button1Text) {
        const button1 = document.getElementById('button1');
        button1.textContent = data.button1Text;
        if (data.link1Url) {
            button1.onclick = () => window.location.href = data.link1Url; // Set the link for the button
        }
    }

    // Update Image 2 and Button 2
    if (data.image2Url) {
        const image2 = document.getElementById('image2');
        image2.src = data.image2Url;
        image2.onclick = () => window.location.href = data.link2Url;
    }
    if (data.button2Text) {
        const button2 = document.getElementById('button2');
        button2.textContent = data.button2Text;
        if (data.link2Url) {
            button2.onclick = () => window.location.href = data.link2Url;
        }
    }

    // Update Image 3 and Button 3
    if (data.image3Url) {
        const image3 = document.getElementById('image3');
        image3.src = data.image3Url;
        image3.onclick = () => window.location.href = data.link3Url;
    }
    if (data.button3Text) {
        const button3 = document.getElementById('button3');
        button3.textContent = data.button3Text;
        if (data.link3Url) {
            button3.onclick = () => window.location.href = data.link3Url;
        }
    }
});
