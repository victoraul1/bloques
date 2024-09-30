const socket = io();

document.getElementById('updateForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Create an empty object to hold the updated data
    const data = {};

    // Only add the input value to the data object if it has been provided
    const image1Url = document.getElementById('image1Url').value;
    if (image1Url) {
        data.image1Url = image1Url;
    }

    const button1Text = document.getElementById('button1Text').value;
    if (button1Text) {
        data.button1Text = button1Text;
    }

    const link1Url = document.getElementById('link1Url').value;
    if (link1Url) {
        data.link1Url = link1Url;
    }

    const image2Url = document.getElementById('image2Url').value;
    if (image2Url) {
        data.image2Url = image2Url;
    }

    const button2Text = document.getElementById('button2Text').value;
    if (button2Text) {
        data.button2Text = button2Text;
    }

    const link2Url = document.getElementById('link2Url').value;
    if (link2Url) {
        data.link2Url = link2Url;
    }

    const image3Url = document.getElementById('image3Url').value;
    if (image3Url) {
        data.image3Url = image3Url;
    }

    const button3Text = document.getElementById('button3Text').value;
    if (button3Text) {
        data.button3Text = button3Text;
    }

    const link3Url = document.getElementById('link3Url').value;
    if (link3Url) {
        data.link3Url = link3Url;
    }

    // Emit the update data to the server
    socket.emit('update', data);
});
