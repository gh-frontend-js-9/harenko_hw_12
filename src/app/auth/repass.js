'use strict'

const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password';

document.getElementById('warning').style.display = 'none';

document.getElementById('submit').onclick = function () {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm = document.getElementById('confirm');

    let user = {
      password: password,
      confirmationPassword: confirm,
      email: email
      }
      fetch(url, {
        method: 'POST', 
        mode: 'cors',  
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), 
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('warning').style.display = 'none';
        window.location.href = './index.html';
      } else {
        document.getElementById('warning').style.display = 'inline';
      }
    })
}