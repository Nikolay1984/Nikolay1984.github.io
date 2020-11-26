var btn = document.querySelector(".btn");
btn.addEventListener('click',function (e) {
e.preventDefault();


    var access_token = '1443738971:AAGMa8ssFt-H7a571uazRBKWqNAPXDtLX70';
    // var access_token = '';
    var url = 'https://api.telegram.org/bot';
    var command = "/bla";
    $.ajax({
        url: url + access_token + command,
        dataType: 'json',
        success: function(response) {
            console.dir(response);
        }
    });


console.log(1111)
})