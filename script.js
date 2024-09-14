var _a;
// Function to populate the resume based on user input
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    // Populate the resume
    document.getElementById("resume-name").textContent =
        name;
    document.getElementById("resume-email").textContent =
        email;
    document.getElementById("resume-phone").textContent =
        phone;
    document.getElementById("resume-education").textContent =
        education;
    document.getElementById("resume-experience").textContent = experience;
    document.getElementById("resume-skills").textContent =
        skills;
    // Show the resume container
    var resumeContainer = document.getElementById("resume-container");
    resumeContainer.style.display = "block";
    // Enable editing functionality
    setupEditResume();
}
// Function to make the resume fields editable
function setupEditResume() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var target = element;
            var originalText = target.textContent || "";
            // Create an input field for editing
            var inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = originalText;
            // Replace the clicked element with the input field
            target.replaceWith(inputField);
            inputField.focus();
            // Save changes when the input loses focus or Enter key is pressed
            inputField.addEventListener("blur", function () {
                return saveChanges(inputField, target);
            });
            inputField.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    saveChanges(inputField, target);
                }
            });
        });
    });
}
// Function to save the changes made to the editable fields
function saveChanges(inputField, target) {
    var updatedText = inputField.value || "Not provided";
    target.textContent = updatedText;
    // Replace the input field with the updated text
    inputField.replaceWith(target);
}
// Add event listener to the 'Generate Resume' button
(_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    generateResume();
});
