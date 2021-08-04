function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var spass = document.getElementById('spass').value;
    var cpass = document.getElementById('cpass').value;
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var n3 = document.getElementById('n3');
    //if (name == '' || email == '' || spass == '' || cpass == '') {
        //alert('please create your account');
        // console.log("fill all field");
   // }
    if (!name.match(/[A-Za-z]{3,10}/g)) {
        n1.style.color = "green";
        n1.innerHTML = "Please enter name as per the format";
    }
    else if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        n2.style.color = "green";
        n2.innerHTML = "Please enter email as per the format";
    }
    else if (!spass.match(/^[A-Z][\w\d]*[^a-z0-9A-Z]+[\w\d\S]*$/)) {
        n3.style.color = "green";
        n3.innerHTML = "Please set the password as per the described format";
    }
    else if (cpass != spass) {
        n3.style.color = "green";
        n3.innerHTML = "Password doesnot match";
    }
    else {
        /* alert('Account Successfully Created');*/
        window.location = "Account.html";

    }


}