function scrollToSectionWithOffset(sectionId) {
    const target = document.getElementById(sectionId);
    const header = document.querySelector('.headerBackground');
    const headerHeight = header ? header.offsetHeight : 0;
    if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10; // 10px extra luft
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

// Hantera hash-länk vid sidladdning (t.ex. products.html#goToWeddingCake)
window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'goToCupCake' || hash === 'goToWeddingCake') {
        setTimeout(() => scrollToSectionWithOffset(hash), 200);
    }
});

// Hantera knappklick på sidan (om du har knappar med dessa id:n)
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