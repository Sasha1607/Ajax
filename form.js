$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/sasha1998f@mail.ru",
                method: "POST",
                data: {
                    name: $('#name').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>Thank you!</h1>');
            });

    });
});
