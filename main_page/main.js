$(function(){
    var flag; 
    var ourRequest = new XMLHttpRequest();  
    ourRequest.open("GET","https://cemil-web.herokuapp.com/data/slide-api.php");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    function renderHtml(data){
        var changingphoto = "";
        for(i = 0; i<data.length;i++){
            changingphoto = "#slide" + (i+1)+" ";
            $(changingphoto + "img").attr("src",data[i].imagePath);
            $(changingphoto + "img").attr("title",data[i].title);
            $(changingphoto + ".slide-header .text-center").text(data[i].title);
        }
    }
    ourRequest.send();
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          autoControls: true,
          slideWidth: 1000,
          auto: true
        });
      });
    var loginRequest = new XMLHttpRequest();
            
    loginRequest.open("GET","https://cemil-web.herokuapp.com/data/users-api.php");
    loginRequest.onload = function(){
        var loginData = JSON.parse(loginRequest.responseText);
        $("#login").click(function(){
            var email = $("#email").val();
            var password = $("#password").val();
            loginHtml(loginData,email,password);
            
        });
        
    };
    loginRequest.send();
    function loginHtml(data,email,password){
        flag = false;
        for(i = 0; i<data.length;i++){
            if(data[i].email == email || data[i].password == password ){
                flag = true;
            }
        }
        if(flag == false){
            alert("Basarisiz Giris");
        }
        if(flag){
            $(".login").hide();
        }
    }

});