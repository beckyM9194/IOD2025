<script>
    const form = document.getElementById('rsvpForms');
    const successMessage = document.getElementById('successMessage');
    const attendeeList = document.getElementById('attendeeList');

    // Load attendees from localStorage
    function loadAttendees() {
        attendeeList.innerHTML = '';
        const attendees = JSON.parse(localStorage.getItem('attendees')) || [];
        attendees.forEach(att => {
            const li = document.createElement('li');
            li.textContent = `${att.name} with ${att.dogName}`;
            attendeeList.appendChild(li);
        });
    }

    // Save attendee to localStorage
    function saveAttendee(attendee) {
        const attendees = JSON.parse(localStorage.getItem('attendees')) || [];
        attendees.push(attendee);
        localStorage.setItem('attendees', JSON.stringify(attendees));
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const dogName = document.getElementById('dogName').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !dogName) {
            alert('Please fill in all required fields.');
            return;
        }

        const attendee = { name, email, dogName, message };
        saveAttendee(attendee);

        successMessage.style.display = 'block';
        form.reset();
        loadAttendees();
    });

    // Initial load
    loadAttendees();
</script>