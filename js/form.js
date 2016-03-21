$('#formname').submit(function() {
    var post_data = $('#formname').serialize();
    var url ='' + $('#formname').attr('action');
    console.log(url);
    $.ajax({
        url: url,
        data : post_data,
        dataType:'json',
        method: 'POST',
        success:function(data){
            console.log('success');
            alert('Merci!')
            var textboxs = document.querySelectorAll(".input");
            for (var i = 0; i < textboxs.length; i++) {
                textbox = textboxs[i];
                textbox.value = "";
                textbox.style.opacity = .2;
                textbox.readOnly = true;
            }
            // textbox.style.display = "none";
            var button = document.querySelector("#submissionBtn");
            // button.style.display = "none";
            // var thanks = document.querySelector("#thanks");
            // // thanks.style = button.style;
            // thanks.style.display = "inline";
            // button.innerText = "Merci";
            button.style.opacity = .2;
            button.disabled = true;
            console.log("success!");
            // flash a message? 
        }
    });
});
