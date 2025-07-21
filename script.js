document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('submissionForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Basic field validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const file = form.file.files[0];

    if (!name || !email || !phone || !file)
    {
      alert('Please fill in all required fields.');
      return;
    }

    // File type check
    const allowedTypes = ['application/pdf', 'application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type))
    {
      alert('Only PDF or Word documents are allowed.');
      return;
    }

    // Simulate successful submission
    alert('Form submitted successfully! (This is a frontend-only demo)');
    form.reset();
  });
});
