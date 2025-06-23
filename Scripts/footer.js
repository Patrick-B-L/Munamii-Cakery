const footerPath = location.pathname.endsWith('index.html') || location.pathname === '/' 
  ? 'Home/footer.html' 
  : 'footer.html';

fetch(footerPath)
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    