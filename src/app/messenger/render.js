'use strict'

export class Render {
    constructor(options) {
        let tag = document.createElement(options.tag)
        tag.className = options.class
        tag.textContent = options.text
        tag.setAttribute(options.name, options.value)
        return tag
    }
}

// HEADER

let header = new Render ({
    tag: 'header',
    class: 'header',
})
document.body.append(header);

let headerLogo = new Render ({
    tag: 'a',
    class: 'header-logo',
    name: 'href',
    value: '#'
})
header.appendChild(headerLogo);

let userBlock = new Render ({
    tag: 'div',
    class: 'user-block'
})
header.appendChild(userBlock);

let addBtn = new Render ({
    tag: 'button',
    class: 'user-block_add-btn',
    text: 'Add'
})
userBlock.appendChild(addBtn);

let addBtnPls = new Render ({
    tag: 'span',
    class: 'add-btn_plus',
    text: '+'
})
addBtn.appendChild(addBtnPls);

let searchBtn = new Render ({
    tag: 'a',
    class: 'user-block_search-btn',
    name: 'href',
    value: '#'
})
userBlock.appendChild(searchBtn);

let notificBtn = new Render ({
    tag: 'a',
    class: 'user-block_notification-btn',
    name: 'href',
    value: '#'
})
userBlock.appendChild(notificBtn);

let userProfileBlock = new Render ({
    tag: 'div',
    class: 'user-profile-block'
})
userBlock.appendChild(userProfileBlock);

let userPhoto = new Render ({
    tag: 'div',
    class: 'user-profile-block_user-photo'
})
userProfileBlock.appendChild(userPhoto);

let userMenuBtn = new Render ({
    tag: 'a',
    class: 'user-profile-block_user-menu-btn'
})
userProfileBlock.appendChild(userMenuBtn);

// SIDE BAR

let main = new Render ({
    tag: 'main',
    class: 'main',
})
document.body.append(main);

let userPanelBlock = new Render ({
    tag: 'div',
    class: 'user-panel-block'
})
main.appendChild(userPanelBlock);

let panelBtnBlock = new Render ({
    tag: 'div',
    class: 'panel-btn-block'
})
userPanelBlock.appendChild(panelBtnBlock);

let homeBtn = new Render ({
    tag: 'a',
    class: 'panel-btn-block_home-btn',
    name: 'href',
    value: '#'
})
panelBtnBlock.appendChild(homeBtn);

let menuBtn = new Render ({
    tag: 'a',
    class: 'panel-btn-block_menu-btn',
    name: 'href',
    value: '#'
})
panelBtnBlock.appendChild(menuBtn);

let trendBtn = new Render ({
    tag: 'a',
    class: 'panel-btn-block_trending-btn',
    name: 'href',
    value: '#'
})
panelBtnBlock.appendChild(trendBtn);

let messageBtn = new Render ({
    tag: 'a',
    class: 'panel-btn-block_message-btn',
    name: 'href',
    value: '#'
})
panelBtnBlock.appendChild(messageBtn);

let friendsBtn = new Render ({
    tag: 'a',
    class: 'panel-btn-block_friends-btn',
    name: 'href',
    value: '#'
})
panelBtnBlock.appendChild(friendsBtn);

// MESSAGES CONTROL

let screenBlock = new Render ({
    tag: 'div',
    class: 'screen-block',
    name: 'id',
    value: 'screen'
})
main.appendChild(screenBlock);

let messageControlBlock = new Render ({
    tag: 'div',
    class: 'message-control-block'
})
screenBlock.appendChild(messageControlBlock);

let messageBtnsBlock = new Render ({
    tag: 'div',
    class: 'message-btns-block'
})
messageControlBlock.appendChild(messageBtnsBlock);

let inboxBlock = new Render ({
    tag: 'div',
    class: 'inbox-block'
})
messageBtnsBlock.appendChild(inboxBlock);

let inboxBlockImg = new Render ({
    tag: 'a',
    class: 'inbox-block_img',
    name: 'href',
    value: '#'
})
inboxBlock.appendChild(inboxBlockImg);

let inboxBlockTxt = new Render ({
    tag: 'span',
    class: 'inbox-block_txt',
    text: 'Inbox'
})
inboxBlock.appendChild(inboxBlockTxt);

let sentBlock = new Render ({
    tag: 'div',
    class: 'sent-block'
})
messageBtnsBlock.appendChild(sentBlock);

let sentBlockImg = new Render ({
    tag: 'a',
    class: 'sent-block_img',
    name: 'href',
    value: '#'
})
sentBlock.appendChild(sentBlockImg);

let sentBlockTxt = new Render ({
    tag: 'span',
    class: 'sent-block_txt',
    text: 'Sent'
})
sentBlock.appendChild(sentBlockTxt);

let trashBlock = new Render ({
    tag: 'div',
    class: 'trash-block',
})
messageBtnsBlock.appendChild(trashBlock);

let trashBlockImg = new Render ({
    tag: 'a',
    class: 'trash-block_img',
    name: 'href',
    value: '#'
})
trashBlock.appendChild(trashBlockImg);

let trashBlockTxt = new Render ({
    tag: 'span',
    class: 'trash-block_txt',
    text: 'Trash'
})
trashBlock.appendChild(trashBlockTxt);

let filterBlock = new Render ({
    tag: 'div',
    class: 'filter-block',
})
messageControlBlock.appendChild(filterBlock);

let filterBlockTxt = new Render ({
    tag: 'span',
    class: 'filter-block_txt',
    text: 'Filter messages:'
})
filterBlock.appendChild(filterBlockTxt);

let filterBlockSelect = new Render ({
    tag: 'button',
    class: 'filter-block_select',
    text: 'Date'
})
filterBlock.appendChild(filterBlockSelect);

let filterBlockArrow = new Render ({
    tag: 'div',
    class: 'filter-block_arrow'
})
filterBlockSelect.appendChild(filterBlockArrow);

// THREADS

export let messagesListBlock = new Render ({
    tag: 'div',
    class: 'messages-list-block'
})
screenBlock.appendChild(messagesListBlock);

/////////////////////////////////////END ROAD

let conversationBtnBlock = new Render ({
    tag: 'div',
    class: 'conversation-btn-block',
})
messagesListBlock.appendChild(conversationBtnBlock);

let conversationBtnBlockBtn = new Render ({
    tag: 'button',
    class: 'conversation-btn-block_btn',
    name: 'id',
    value: 'thread'
})
conversationBtnBlock.appendChild(conversationBtnBlockBtn);

let conversationBtnBlockBtnPlus = new Render ({
    tag: 'span',
    class: 'conversation-btn-block_btn_plus',
    text: '+'
})
conversationBtnBlockBtn.appendChild(conversationBtnBlockBtnPlus);

let conversationBtnBlockBtnTxt = new Render ({
    tag: 'span',
    class: 'conversation-btn-block_btn_txt',
    text: 'New conversation'
})
conversationBtnBlockBtn.appendChild(conversationBtnBlockBtnTxt);

let messagesBlock = new Render ({
    tag: 'div',
    class: 'messages-block'
})
screenBlock.appendChild(messagesBlock);

export let messageBlockArea = new Render ({
    tag: 'div',
    class: 'message-block-area'
})
messagesBlock.appendChild(messageBlockArea);

let messageSendBlock = new Render ({
    tag: 'div',
    class: 'message-send-block'
})
messagesBlock.appendChild(messageSendBlock);

let messageBlockAreaInput = new Render ({
    tag: 'input',
    class: 'message-block-area_input',
    name: 'id',
    value: 'input'
})
messageBlockAreaInput.setAttribute('type', 'text');
messageBlockAreaInput.setAttribute('placeholder', 'Write a message');
messageSendBlock.appendChild(messageBlockAreaInput);

let messageBlockAreaInputButton = new Render ({
    tag: 'button',
    class: 'message-block-area_input_button',
    name: 'id',
    value: 'send',
    text: 'Send'
})
messageSendBlock.appendChild(messageBlockAreaInputButton);