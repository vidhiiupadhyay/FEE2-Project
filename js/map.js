
        // Initialize the map
        const map = L.map('map').setView([22.5937, 78.9629], 5);
        
        // Add tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Try to get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    
                    // Add user marker to map
                    const icon = L.divIcon({
                        html: '<i class="fas fa-user" style="color: #667eea; font-size: 20px;"></i>',
                        className: 'user-location-marker',
                        iconSize: [20, 20]
                    });
                    const userMarker = L.marker([latitude, longitude], { icon }).addTo(map);
                    userMarker.bindPopup('Your Current Location').openPopup();
                    map.setView([latitude, longitude], 8);
                },
                (error) => {
                    console.log("Location access denied or not available");
                }
            );
        }