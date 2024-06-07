document.getElementById('editProfileBtn').addEventListener('click', function() {
    const newAgencyName = prompt("Enter new Agency Name", document.getElementById('agencyName').textContent);
    if (newAgencyName) {
        document.getElementById('agencyName').textContent = newAgencyName;
    }

    const newContactPerson = prompt("Enter new Contact Person", document.getElementById('contactPerson').textContent);
    if (newContactPerson) {
        document.getElementById('contactPerson').textContent = newContactPerson;
    }

    const newEmail = prompt("Enter new Email", document.getElementById('email').textContent);
    if (newEmail) {
        document.getElementById('email').textContent = newEmail;
    }

    const newPhone = prompt("Enter new Phone", document.getElementById('phone').textContent);
    if (newPhone) {
        document.getElementById('phone').textContent = newPhone;
    }

    const newAddress = prompt("Enter new Address", document.getElementById('address').textContent);
    if (newAddress) {
        document.getElementById('address').textContent = newAddress;
    }

    const newDescription = prompt("Enter new Description", document.getElementById('description').textContent);
    if (newDescription) {
        document.getElementById('description').textContent = newDescription;
    }
});
