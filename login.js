var jwt = localStorage.getItem("jwt")
if (jwt != null) {
    window.location.href = "./index.html"
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    /*รหัสผ่าน */
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.mecallapi.com/api/login")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(JSON.stringify({
        "username": username,
        "password": password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects)
            if (objects['status'] == 'ok') {
                localStorage.setItem("jwt", objects["accessToken"]);
                Swal.fire({
                    text: objects['message'],
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = './index.html';
                    }
                });
            } else {

                Swal.fire(
                    'ไม่สามารถเข้าสู่ระบบได้',
                    'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง'
                )
            }
        }
    }
    return false;
}