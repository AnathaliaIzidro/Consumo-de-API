function emailSend(){
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var menssageBody = "Name" + userName + 
    "<br/> Phone" + phone +
    "<br/> Email" + email;

    emailSend({
        Host : "smtp.elasticemail.com",
        Username : "thalizidro05@gmail.com",
        Password : "66ED2312BC6DFCF55740B0FFA534A8C5BB11",
        To : 'anathalia.izidro@gmail.com',
        From : "thalizidro05@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}