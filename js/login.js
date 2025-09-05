document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const gotoSignup = document.getElementById('goto-signup');
    const gotoLogin = document.getElementById('goto-login');
    
    // User type switching
    const personType = document.getElementById('person-type');
    const rescuerType = document.getElementById('rescuer-type');
    const personForm = document.getElementById('person-form');
    const rescuerForm = document.getElementById('rescuer-form');
    
    // Switch to signup form
    signupTab.addEventListener('click', function() {
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });
    
    gotoSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });
    
    // Switch to login form
    loginTab.addEventListener('click', function() {
        signupTab.classList.remove('active');
        loginTab.classList.add('active');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });
    
    gotoLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupTab.classList.remove('active');
        loginTab.classList.add('active');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });
    
    // Switch between person and rescuer forms
    personType.addEventListener('click', function() {
        rescuerType.classList.remove('active');
        personType.classList.add('active');
        rescuerForm.style.display = 'none';
        personForm.style.display = 'block';
    });
    
    rescuerType.addEventListener('click', function() {
        personType.classList.remove('active');
        rescuerType.classList.add('active');
        personForm.style.display = 'none';
        rescuerForm.style.display = 'block';
    });
    
    // Form submission
    const loginBtn = loginForm.querySelector('.btn-primary');
    const signupBtn = signupForm.querySelector('.btn-primary');
    
    loginBtn.addEventListener('click', function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (!email || !password) {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real application, you would validate credentials with a server
        alert('Login functionality would connect to your server');
        // Redirect to dashboard after successful login
        // window.location.href = 'demo.html';
    });
    
    signupBtn.addEventListener('click', function() {
        if (personType.classList.contains('active')) {
            // Person registration
            const name = document.getElementById('person-name').value;
            const age = document.getElementById('person-age').value;
            const location = document.getElementById('person-location').value;
            const gender = document.getElementById('person-gender').value;
            const phone = document.getElementById('person-phone').value;
            const email = document.getElementById('person-email').value;
            const password = document.getElementById('person-password').value;
            const emergencyContact = document.getElementById('person-contact').value;
            
            if (!name || !age || !location || !gender || !phone || !email || !password || !emergencyContact) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real application, you would send this data to your server
            alert('Person account creation would connect to your server');
            
        } else {
            // Rescuer registration
            const name = document.getElementById('rescuer-name').value;
            const gender = document.getElementById('rescuer-gender').value;
            const phone = document.getElementById('rescuer-phone').value;
            const email = document.getElementById('rescuer-email').value;
            const password = document.getElementById('rescuer-password').value;
            const skills = document.getElementById('rescuer-skills').value;
            
            if (!name || !gender || !phone || !email || !password || !skills) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real application, you would send this data to your server
            alert('Rescuer account creation would connect to your server');
        }
        
        // After successful registration, you might want to redirect to login
        // or automatically log the user in
        signupTab.classList.remove('active');
        loginTab.classList.add('active');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });
});