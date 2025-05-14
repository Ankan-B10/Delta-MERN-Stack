document.addEventListener("DOMContentLoaded", () => {
  // Select all delete forms
  const deleteForms = document.querySelectorAll(
    'form[action*="_method=DELETE"]'
  );

  // Loop over each delete form
  deleteForms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop the form from submitting immediately

      // Show confirm pop-up
      const userConfirmed = confirm(
        "Are you sure you want to delete this message?"
      );

      if (userConfirmed) {
        // If user clicks 'OK', submit the form
        form.submit();
      }
      // If user clicks 'Cancel', do nothing
    });
  });
});
