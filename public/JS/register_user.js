
$(document).ready(function() {



    let registerUserWebService = API_DOMAIN + '/api/v1/user_interface/register';



    $('button#register').onclick(function() {
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmation_password = $('#confirmation_password').val();

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
                console.log('Submission was successful.');
                console.log(data)

            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data['stageUuidDevuelto']);
            },
        })
    });
});
