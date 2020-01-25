'use strict'

const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/login';

document.getElementById('warning').style.display = 'none';

document.getElementById('submit').onclick = function () {

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let user = {
    email: email,
    password: password
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
      response.json()
      return response
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('warning').style.display = 'none';
      } else {
        document.getElementById('warning').style.display = 'inline';
      }
      return response
    })
    .then(response => 
      response.headers.get('x-auth-token')
    )
    .then(response => {
      localStorage.setItem('userToken', response)
      window.location.href = './messenger.html';
    })
}



