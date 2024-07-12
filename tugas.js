function showForm(form) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';

    if (form === 'login') {
        document.getElementById('loginForm').style.display = 'block';
    } else if (form === 'register') {
        document.getElementById('registerForm').style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login with Username: ${username}, Password: ${password}`);
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    alert(`Register with Username: ${username}, Password: ${password}`);
}
