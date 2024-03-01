document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-btn');
    const items = document.querySelectorAll('.menu-item');

    function filterMenu(category) {
        items.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block'; // Adjust this as needed for your layout
            } else {
                item.style.display = 'none';
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons and add to the clicked one
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter menu items based on the clicked button's category
            const category = this.getAttribute('data-category');
            filterMenu(category);
        });
    });

    // Initially display all items
    filterMenu('all');
});


document.addEventListener('DOMContentLoaded', () => {
    // Select the reservation form
    const reservationForm = document.querySelector('.reservation-form');
    
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Display the pop-up message
        alert('Your table is reserved :)');
        
        // Optional: Clear the form fields after showing the message
        this.reset();
    });
});

