// Simple JavaScript for notifications page
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Mark all as read functionality
    const markAllButton = document.querySelector('.btn-mark-all');
    if (markAllButton) {
        markAllButton.addEventListener('click', function() {
            const unreadNotifications = document.querySelectorAll('.notification-item.unread');
            unreadNotifications.forEach(notification => {
                notification.classList.remove('unread');
                const badge = notification.querySelector('.unread-badge');
                if (badge) badge.remove();
            });
            
            alert('All notifications marked as read');
        });
    }
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real app, you would filter notifications here
            console.log('Filter applied:', this.textContent);
        });
    });
    
    // Dismiss button functionality
    const dismissButtons = document.querySelectorAll('.btn-action');
    dismissButtons.forEach(button => {
        if (button.textContent === 'Dismiss') {
            button.addEventListener('click', function() {
                const notification = this.closest('.notification-item');
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });
        }
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
