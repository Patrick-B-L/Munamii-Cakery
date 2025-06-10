function scrollToSectionWithOffset(sectionId) {
    const target = document.getElementById(sectionId);
    const header = document.querySelector('.headerBackground');
    const headerHeight = header ? header.offsetHeight : 0;
    if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10; // 10px extra space
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

// Monitor hash changes in the URL(e.g., when navigating to a section via a link)
window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'goToCupCake' || hash === 'goToWeddingCake') {
        setTimeout(() => scrollToSectionWithOffset(hash), 200);
    }
});

// Add event listeners for buttons to scroll to specific sections
document.addEventListener('DOMContentLoaded', function() {
    const goToWeddingBtn = document.getElementById('goToWeddingCakesBtn');
    if (goToWeddingBtn) {
        goToWeddingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSectionWithOffset('goToWeddingCake');
        });
    }
    const backToCupcakesBtn = document.getElementById('backToCupcakesBtn');
    if (backToCupcakesBtn) {
        backToCupcakesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSectionWithOffset('goToCupCake');
        });
    }
});