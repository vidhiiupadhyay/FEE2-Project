// Simple JavaScript for settings page
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Save button functionality
    const saveButton = document.querySelector('.btn-save');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            alert('Settings saved successfully!');
        });
    }
    
    // Toggle switch functionality
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    toggleSwitches.forEach(switchEl => {
        switchEl.addEventListener('change', function() {
            console.log('Toggle switched:', this.checked);
        });
    });
    
    // Select control functionality
    const selectControls = document.querySelectorAll('.select-control');
    selectControls.forEach(select => {
        select.addEventListener('change', function() {
            console.log('Selection changed:', this.value);
        });
    });
    
    // Add click event to all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});
