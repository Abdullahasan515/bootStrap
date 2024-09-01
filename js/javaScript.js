

const toggleSwitch = document.getElementById('rememberMe');
toggleSwitch.addEventListener('change', function() {
    this.classList.toggle('active', this.checked);
    this.style.backgroundColor = this.checked ? '#198754' : 'white';
    this.style.borderColor = this.checked ? '#198754' : '#ccc';
});