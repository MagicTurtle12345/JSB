let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let index = email.indexOf('@');
    if (index < 1 || email.indexOf('.',index)< 1){
        alert("'Email không hợp lệ");
        return;
    }
    if (phone.length < 10) {
        alert('Số điện thoại không hợp lệ');
        return;
    }
    alert('Gửi thành công');

});