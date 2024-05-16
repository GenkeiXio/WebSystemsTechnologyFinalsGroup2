document.addEventListener('keydown', function(event) {
    console.log('Key pressed at:', new Date().toLocaleTimeString());
});

document.addEventListener('click', function(event) {
    console.log('Clicked at:', new Date().toLocaleTimeString());
});