function showConfirmPopup(message, onConfirm) {
    const placeholder = document.getElementById('confirm-popup-placeholder');
    placeholder.innerHTML = `
      <div class="confirm-popup-overlay">
        <div class="confirm-popup-content">
          <div>${message}</div>
          <div class="confirm-popup-buttons">
            <button class="confirm-popup-btn confirm">Remove</button>
            <button class="confirm-popup-btn cancel">Cancel</button>
          </div>
        </div>
      </div>
    `;
    // Event listeners
    placeholder.querySelector('.confirm').onclick = () => {
        placeholder.innerHTML = '';
        onConfirm();
    };
    placeholder.querySelector('.cancel').onclick = () => {
        placeholder.innerHTML = '';
    };
    // Stäng popup om man klickar utanför rutan
    placeholder.querySelector('.confirm-popup-overlay').onclick = (e) => {
        if (e.target === e.currentTarget) placeholder.innerHTML = '';
    };
}