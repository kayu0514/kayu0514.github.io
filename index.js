document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('フォームが送信されました');
    document.getElementById('card-name').textContent = document.getElementById('name').value;
    document.getElementById('card-title').textContent = document.getElementById('title').value;
    document.getElementById('card-email').textContent = 'Email: ' + document.getElementById('email').value;
    document.getElementById('card-phone').textContent = 'Phone: ' + document.getElementById('phone').value;
});
