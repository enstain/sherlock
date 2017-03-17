$(document).ready(function () {

    function awaiting_state() {
        $("#submit_button").prop("disabled", true);
        $("#submit_button").text("Подождите...");

        $('#report').removeClass();
        $('#report').text("");
    }

    function restore_state() {
        $("#submit_button").prop("disabled", false);
        $("#submit_button").text("Получить бонусы от партнеров");
    }

    $("#submit_button").click(function (event) {
        event.preventDefault();

        var email = $('#email_value').val();
        var data = new FormData();
        data.append("api_key", "6dyj7stptfspn64jhojwbwbu9tcffcyji1cfa3fa");
        data.append("list_ids", "9078571");
        data.append("fields[email]", email);

        awaiting_state();

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "https://api.unisender.com/ru/api/subscribe?format=json",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                console.log("SUCCESS : ", data);

                if(data.hasOwnProperty("error")){
                    $('#report').addClass('error');

                    var error_message = "ошибка: ";

                    switch(true) {
                      case data.error.indexOf("YE131008-08") !== -1:
                        error_message += "Вы не указали свой email адрес";
                        break;

                      case data.error.indexOf("not a valid") !== -1:
                        error_message += "Вы указали неверный email адрес";
                        break;

                      default:
                        error_message += "неизвестная ошибка. Попробуйте еще раз или напишите нам на hi@conversion.im";
                        break;
                    }

                    $('#report').text(error_message);
                } else {
                    $('#report').addClass('success');
                    $('#report').text("Спасибо! Проверьте свою почту "+ email +" и подтвердите подписку - прямо сейчас мы отправляем вам шикарные бонусы от партнеров для того, чтобы вы всегда находили свой профит!");
                    $('.subscribe form').hide();
                }

                restore_state();
            },
            error: function (e) {
                $('#report').addClass('error');
                $('#report').text("Произошла ошибка. Попробуйте еще раз или напишите нам на hi@conversion.im");
                restore_state();
            }
        });

    });

});