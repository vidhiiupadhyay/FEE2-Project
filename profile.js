// Simple JavaScript for profile page
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Avatar edit functionality
    const avatarEdit = document.querySelector('.profile-avatar-edit');
    if (avatarEdit) {
        avatarEdit.addEventListener('click', function() {
            alert('Avatar edit feature would open here');
        });
    }
    
    // Simulate loading user data
    console.log('Profile page loaded');
    
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
