const input = document.querySelector("input[type='submit']");

function Form(event) {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (username[0] === username[0].toUpperCase() && username.length >= 6){
      alert('Kullanıcı adı geçerli.');
    }
    if (password.length >= 6 && password.length <= 10 && /[a-zA-Z]/.test(password)){
      alert('Şifre geçerli.');
    }
    if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0){
      alert('E-posta adresi geçerli.');
    }
}
input.addEventListener('click', Form);
