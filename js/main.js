// ================================================
// PULSE STREAMING PLATFORM - MAIN JAVASCRIPT
// ================================================

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeScrollContainers();
    initializeCardInteractions();
    initializeSearch();
    initializeEventCards();
    initializeFeaturedCard();
});

// ===== Tab Switching Functionality =====
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            const targetContent = document.getElementById(tabName);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ===== Horizontal Scroll Containers (Drag to Scroll) =====
function initializeScrollContainers() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            container.scrollLeft = scrollLeft - walk;
        });
    });
}

// ===== Content Card Interactions =====
function initializeCardInteractions() {
    const contentCards = document.querySelectorAll('.content-card');
    
    contentCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent click if user was dragging
            if (e.defaultPrevented) return;
            
            const cardTitle = card.querySelector('.card-title');
            if (cardTitle) {
                console.log('Card clicked:', cardTitle.textContent);
                // Here you can add logic to:
                // - Open a modal with content details
                // - Navigate to a detail page
                // - Start playing content
                playContent(cardTitle.textContent);
            }
        });
    });
}

// ===== Search Functionality =====
function initializeSearch() {
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchInput) {
        // Debounce function to limit search requests
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm.length > 0) {
                searchTimeout = setTimeout(() => {
                    performSearch(searchTerm);
                }, 300); // Wait 300ms after user stops typing
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.toLowerCase().trim();
                if (searchTerm.length > 0) {
                    performSearch(searchTerm);
                }
            }
        });
    }
}

// ===== Perform Search =====
function performSearch(searchTerm) {
    console.log('Searching for:', searchTerm);
    
    // Here you would typically:
    // 1. Make an API call to your backend
    // 2. Filter existing content
    // 3. Display search results
    
    // Example: Filter cards by title
    const allCards = document.querySelectorAll('.content-card');
    let foundResults = false;
    
    allCards.forEach(card => {
        const title = card.querySelector('.card-title')?.textContent.toLowerCase();
        if (title && title.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.opacity = '1';
            foundResults = true;
        } else {
            card.style.opacity = '0.3';
        }
    });
    
    if (!foundResults) {
        console.log('No results found for:', searchTerm);
        // Show "no results" message
    }
}

// ===== Event Card Interactions =====
function initializeEventCards() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            const eventTitle = card.querySelector('.event-title');
            const eventDate = card.querySelector('.event-date');
            
            if (eventTitle && eventDate) {
                console.log('Event clicked:', eventTitle.textContent);
                console.log('Date:', eventDate.textContent);
                
                // Here you can:
                // - Open event details modal
                // - Show ticket purchase options
                // - Add to calendar
                showEventDetails(eventTitle.textContent, eventDate.textContent);
            }
        });
    });
}

// ===== Featured Card Interaction =====
function initializeFeaturedCard() {
    const playButton = document.querySelector('.btn-primary');
    const addButton = document.querySelector('.btn-secondary');
    
    if (playButton) {
        playButton.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Featured content - Play button clicked');
            playFeaturedContent();
        });
    }
    
    if (addButton) {
        addButton.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Featured content - Add to library clicked');
            addToLibrary('featured-content');
        });
    }
}

// ===== Play Content Function =====
function playContent(contentTitle) {
    console.log(`Playing: ${contentTitle}`);
    
    // Here you would implement actual playback:
    // 1. Load audio/video source
    // 2. Initialize media player
    // 3. Start playback
    // 4. Update UI (show player bar, etc.)
    
    alert(`Now playing: ${contentTitle}\n\n(This is a demo - integrate with actual media player)`);
}

// ===== Play Featured Content =====
function playFeaturedContent() {
    console.log('Playing featured content');
    
    // Start playback of featured content
    alert('Playing featured content!\n\n(This is a demo - integrate with actual media player)');
}

// ===== Add to Library Function =====
function addToLibrary(contentId) {
    console.log(`Adding to library: ${contentId}`);
    
    // Here you would:
    // 1. Make API call to add to user's library
    // 2. Update UI to show "added" state
    // 3. Show success notification
    
    alert('Added to your library!\n\n(This is a demo - integrate with backend API)');
}

// ===== Show Event Details =====
function showEventDetails(title, date) {
    console.log(`Showing details for event: ${title}`);
    
    // Here you would:
    // 1. Open a modal with event details
    // 2. Show ticket options
    // 3. Display venue information
    
    alert(`Event: ${title}\nDate: ${date}\n\n(This is a demo - create a modal for event details)`);
}

// ===== Navigation Item Click Handler =====
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        const navText = this.textContent.trim();
        console.log('Navigation clicked:', navText);
        
        // Here you can implement navigation logic:
        // - Load different content
        // - Change view
        // - Update URL
    });
});

// ===== Mobile Sidebar Toggle (for future implementation) =====
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// ===== Utility Functions =====

// Clear search results
function clearSearch() {
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Export functions for use in HTML (if needed)
window.toggleSidebar = toggleSidebar;
window.clearSearch = clearSearch;
window.scrollToSection = scrollToSection;