function createNewUser(username, email, password, confirmation_password, registerUserWebService) {



    $.ajax({
        url : registerUserWebService,
        data : {
            'username' : username,
            'email' : email,
            'password' : username,
            'confirmation_password' : confirmation_password,
        },
        type : 'POST',
        dataType : 'json',
        success: function (data) {
            console.log('Usuario registrado con éxito.');
            console.log(data)

        },
        error: function (data) {
            console.log('Se ha producido un error al registrar al usuario.');
        },
    })
}

    function createNewUserEvent() {
        $('button#register').onclick(function() {
            let username = $('#username').val();
            let email = $('#email').val();
            let password = $('#password').val();
            let confirmation_password = $('#confirmation_password').val();
            let registerUserWebService = API_DOMAIN + '/v1/users';
            createNewUser(username, email, password, confirmation_password, registerUserWebService);
        });
    }
    $(document).ready(function() {
        createNewUserEvent();
    });
