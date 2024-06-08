// Selecting elements for opening and closing the navigation menu
const showMenuBtn = document.querySelector('[data-function="open-menu"]');
const closeMenuBtn = document.querySelector('[data-function="close-menu"]');

// Adding event listeners to open and close the menu
showMenuBtn?.addEventListener("click", () => {
    document.querySelector("nav .menu").style.transform = "translateX(0)";
});

closeMenuBtn?.addEventListener("click", () => {
    document.querySelector("nav .menu").style.transform = "translateX(-100%)";
});

// Selecting elements related to the modal functionality
const contactContainer = document.querySelector('.contact-container');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('[data-function="close-modal"]');

// Function to hide the modal
function hideModal() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
}

// Event listener for showing the modal when a contact icon is clicked
contactContainer.addEventListener('click', (event) => {
    const contactIcon = event.target.closest('.contact__icon');
    if (contactIcon) {
        const contactName = contactIcon.closest('.contact').querySelector('.contact__name').textContent;
        modal.querySelector('[data-calledTo]').textContent = contactName;

        modal.classList.add('show');
        overlay.classList.add('show');
    }
});

// Event listener to hide the modal when the 'Escape' key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        hideModal();
    }
});

// Event listener to hide the modal when the overlay is clicked
overlay.addEventListener('click', hideModal);

// Event listener to hide the modal when the close button is clicked
closeModalBtn?.addEventListener('click', hideModal);

// Function to fetch contacts (the URL for the fetch request should be provided)
function fetchContacts() {
    return new Promise((resolve, reject) => {
        // Replace the URL with the correct endpoint
        fetch('YOUR_API_ENDPOINT')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}
