function submit1() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;
    if (username == '' || password == '') {
        alert("Please login");

    }
    else {
        alert("Login successfully");
    }
}

function create() {
    window.location = "signup.html";
}