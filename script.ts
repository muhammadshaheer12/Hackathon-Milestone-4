// Function to populate the resume based on user input
function generateResume(): void {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Populate the resume
  (document.getElementById("resume-name") as HTMLSpanElement).textContent =
    name;
  (document.getElementById("resume-email") as HTMLSpanElement).textContent =
    email;
  (document.getElementById("resume-phone") as HTMLSpanElement).textContent =
    phone;
  (document.getElementById("resume-education") as HTMLSpanElement).textContent =
    education;
  (
    document.getElementById("resume-experience") as HTMLSpanElement
  ).textContent = experience;
  (document.getElementById("resume-skills") as HTMLSpanElement).textContent =
    skills;

  // Show the resume container
  const resumeContainer = document.getElementById(
    "resume-container"
  ) as HTMLElement;
  resumeContainer.style.display = "block";

  // Enable editing functionality
  setupEditResume();
}

// Function to make the resume fields editable
function setupEditResume(): void {
  const editableElements = document.querySelectorAll(".editable");

  editableElements.forEach((element) => {
    element.addEventListener("click", () => {
      const target = element as HTMLElement;
      const originalText = target.textContent || "";

      // Create an input field for editing
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = originalText;

      // Replace the clicked element with the input field
      target.replaceWith(inputField);
      inputField.focus();

      // Save changes when the input loses focus or Enter key is pressed
      inputField.addEventListener("blur", () =>
        saveChanges(inputField, target)
      );
      inputField.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          saveChanges(inputField, target);
        }
      });
    });
  });
}

// Function to save the changes made to the editable fields
function saveChanges(inputField: HTMLInputElement, target: HTMLElement): void {
  const updatedText = inputField.value || "Not provided";
  target.textContent = updatedText;

  // Replace the input field with the updated text
  inputField.replaceWith(target);
}

// Add event listener to the 'Generate Resume' button
document.getElementById("generate-resume")?.addEventListener("click", () => {
  generateResume();
});
