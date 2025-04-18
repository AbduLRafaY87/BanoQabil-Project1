let cssRemoved = false;

// Function to remove CSS
function removeCSS() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => link.remove());
    cssRemoved = true;
}

// Function to add CSS back
function addCSS() {
    const stylesheet1 = document.createElement('link');
    stylesheet1.rel = 'stylesheet';
    stylesheet1.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
    stylesheet1.id = 'stylesheet1';
    document.head.appendChild(stylesheet1);

    const stylesheet2 = document.createElement('link');
    stylesheet2.rel = 'stylesheet';
    stylesheet2.href = 'style.css';
    stylesheet2.id = 'stylesheet2';
    document.head.appendChild(stylesheet2);

    cssRemoved = false;
}

// Toggle CSS and button state
function toggleCSS() {
    const button = document.getElementById('toggleButton');
    
    if (cssRemoved) {
        addCSS();
        // Change button icon to 'on'
        button.classList.remove('fa-toggle-off');
        button.classList.add('fa-toggle-on');
        button.innerHTML = "";  // Optional: change text
    } else {
        removeCSS();
        // Change button icon to 'off'
        button.classList.remove('fa-toggle-on');
        button.classList.add('fa-toggle-off');
        button.innerHTML = '<i class="fas fa-toggle-off"></i>- Click to Add CSS <hr/>';  // Optional: change text
    }
}

// Add event listener to toggle button
const button = document.getElementById('toggleButton');
button.addEventListener('click', toggleCSS);
