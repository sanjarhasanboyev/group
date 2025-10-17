// Sotib olish tugmalari
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Rahmat! Buyurtma qabul qilindi. Tez orada siz bilan bog\'lanamiz.');
    });
});

// Kontakt forma
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Real yuborishni to'xtatish
    message.textContent = 'Xabar yuborildi! Rahmat.';
    message.style.color = 'green';
    form.reset();
    setTimeout(() => {
        message.textContent = '';
    }, 3000);
});