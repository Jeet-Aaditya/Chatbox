entermsg()
{

}
let sendButton = document.querySelector(".send-button")
let msgUser = document.querySelector(".message user")
let text = document.querySelector(".Inputbox")

sendButton.addEventListener('click', () => {
    
    msgUser.innerHTML= text.textContent;
    text= text.innerHTML('')
})
