document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Create invoice details
    const invoiceDetails = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
    `;

    // Display the invoice popup
    document.getElementById("invoiceDetails").innerHTML = invoiceDetails;
    document.getElementById("invoicePopup").style.display = "block";
});

// Close the popup when the user clicks on <span> (x)
document.getElementById("closePopup").onclick = function() {
    document.getElementById("invoicePopup").style.display = "none";
}

// Print the invoice
document.getElementById("printButton").onclick = function() {
    window.print();
}

// Cancel button functionality
document.getElementById("cancelButton").onclick = function() {
    document.getElementById("invoicePopup").style.display = "none";
    document.getElementById("appointmentForm").reset(); // Reset the form
}

// Exit button functionality
document.getElementById("exitButton").onclick = function() {
    window.close(); // Close the window (may not work in all browsers)
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementById("invoicePopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
