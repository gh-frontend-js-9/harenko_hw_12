import {Render, messagesListBlock, messageBlockArea } from './render.js' 

// CREATE THREAD

let userToken = localStorage.getItem('userToken');  
let threadId

document.getElementById('thread').onclick = function () {
  let friendId = prompt('Put your friend id')
  fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken
    },
    body: JSON.stringify({
      "user": {
        "_id": friendId
      }
    }),
  })
   location.reload()
}

// SEND MESSAGE

document.getElementById('send').onclick = function () {

  let message = document.getElementById('input').value;

  fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken
    },
    body: JSON.stringify({
      "thread": {
        "_id": threadId
      },
      "message": {
        "body": message
      }

    }),
  })
    .then(response => location.reload())
}

// GET ALL THREADS 

fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'x-access-token': userToken
  },
})
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      let messageBlock = new Render({
        tag: 'div',
        class: 'message-block'
      })
      messagesListBlock.appendChild(messageBlock);

      let messageBlockUserArea = new Render({
        tag: 'div',
        class: 'message-block_user-area'
      })
      messageBlock.appendChild(messageBlockUserArea);

      let messageBlockUserInfo = new Render({
        tag: 'div',
        class: 'message-block_user-info'
      })
      messageBlockUserArea.appendChild(messageBlockUserInfo);

      let messageBlockUserPhotoFirst = new Render({
        tag: 'a',
        class: 'message-block_user-photo_first',
        name: 'href',
        value: '#'
      })
      messageBlockUserInfo.appendChild(messageBlockUserPhotoFirst);

      let messageBlockUserName = new Render({
        tag: 'span',
        class: 'message-block_username',
        text: response[i].users[1].name
      })
      messageBlockUserInfo.appendChild(messageBlockUserName);

      let messageBlockDate = new Render({
        tag: 'span',
        class: 'message-block_date',
        text: response[i].updated_at
      })
      messageBlockUserArea.appendChild(messageBlockDate);

      let messageBlockTxt = new Render({
        tag: 'span',
        class: 'message-block_txt',
        text: response[i].message.body
      })
      messageBlock.appendChild(messageBlockTxt);

      getAllMessage(response[i].message.thread)

      threadId = response[i].message.thread
    }
  })

// GET ALL MESSAGES 

function getAllMessage(threadId) {
  fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/'+threadId+'?sort=desc', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'x-access-token': userToken
  },
})
.then(response => response.json())
.then(response => {
  for (let i = 0; i < response.length; i++) {
    let messageCloud = new Render({
      tag: 'p',
      class: 'message-cloud',
      text: response[i].body
    })
    messageBlockArea.appendChild(messageCloud);
  }
  })
}
  

