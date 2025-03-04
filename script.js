function getFormvalue(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get trimmed values from input fields
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    // Edge Case Handling
    if (!firstName && !lastName) {
        alert("Please enter your first and last name.");
        return;
    } else if (!firstName) {
        alert("Please enter your first name.");
        return;
    } else if (!lastName) {
        alert("Please enter your last name.");
        return;
    }

    // Display full name in an alert
    alert(`${firstName} ${lastName}`);
}
