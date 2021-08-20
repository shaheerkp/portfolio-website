var name_val = false;
var email_val = false;
var number_val = false;
var message_val = false;



var u_name = document.getElementById("name")
u_name.addEventListener('input', (e) => {
    console.log(u_name.value);

    var name_field = /^[a-zA-Z ]+$/;


    if (u_name.value.charAt(0) == " ") {
        name_err.innerHTML = "User name should not start with space"
        name_val = false;

    }
    else if (u_name.value.length < 3) {
        name_err.innerHTML = "User name should be atleast 2 character"
        name_val = false;

    }

    else if (u_name.value.length < 3) {
        name_err.innerHTML = "User name should be atleast 2 character"
        name_val = false;

    }
    else if (!u_name.value.match(name_field)) {
        name_err.innerHTML = "invalid charaters"
        name_val = false;

    }
    else if (u_name.value.length > 20) {
        name_err.innerHTML = "User name should be max 20  character"
        name_val = false;

    }


    else if (u_name.value.includes("  ")) {
        name_err.innerHTML = "User name should not have more spaces "
        name_val = false;

    }



    else {
        name_err.innerHTML = " "
        name_val = true
    }
})








var u_email = document.getElementById("email")
u_email.addEventListener('input', (e) => {
    var email_field = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,20})?$/;

    if (u_email.value.length < 0) {
        email_err.innerHTML = "email should not be blank"
        email_val = false;

    }

    // else if (u_email.value.indexOf("@") == -1) {
    //     email_err.innerHTML = "email should contain @"
    //     email_val = false;

    // }

    else if (!email_field.test(u_email.value)) {
        email_err.innerHTML = "invalid format"
        email_val = false;

    }
    else {
        email_err.innerHTML = " "
        email_val = true
    }
})


var u_number = document.getElementById("number")
u_number.addEventListener('input', (e) => {
    var number_field = /[^0-9.]/;

    if (number_field.test(u_number.value)) {
        number_err.innerHTML = "invalid format"
        number_val = false;

    }
    else if (u_number.value.length != 10) {
        number_err.innerHTML = "Enter 10 numbers"
        number_val = false;

    }
    else {
        number_err.innerHTML = " "
        number_val = true;

    }
})



var u_message = document.getElementById("message")
u_message.addEventListener('input', (e) => {
    if (u_message.value.length < 6) {
        message_err.innerHTML = "message should be atleast 5 character"
        message_val = false
    }
    else {
        message_err.innerHTML = ""
        message_val = true;
    }

})











$("#submit-form").submit((e) => {
    e.preventDefault()
    if (name_val == true && email_val == true && number_val == true && message_val == true) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyv3tKlSQGHETWCB3WGcZxYpvWL8deSAvzYDnfXUpOs9CxfE1IaX5P0G0lJdEJP2GhUKg/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")

            }
        })
    }

    else {
        alert("Please fill all the fields correctly")
    }
})


