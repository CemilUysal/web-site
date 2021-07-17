$(document).ready(function(){
    var commentsHtml = "";
    var type;
    var ourRequest = new XMLHttpRequest();     
    ourRequest.open("GET","https://cemil-web.herokuapp.com/data/products-api.php");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    ourRequest.send();

    function renderHtml(data){
        for(i = 0 ; i<data.length; i++){
           commentsHtml += ' <div class="card my-5 w-50 bg-warning mx-auto"><div class="card-body">'+
           '<img src="https://via.placeholder.com/150x150" alt="image" class="personal-images image'+i+ '"width="40%"'+
           '/><div class=" card comment w-50 float-end"> <div class="card-header">'+
           '<h3 class="card-title "><a href="../detay_page/detay.html" class="link">' + data[i].name +'</a></h3></div>'+
           '<div class="card-body"><h4 class="card-title">'+data[i].price +
           '</h4></div></div></div></div></div>';
           
           $(".container-product").html(commentsHtml);
        }
        for(i = 0; i<data.length;i++){
            $(".image"+i).attr("src",data[i].imagePaths);
        }
        $(".link").click(function(){
            type = $(this).text();
            alert(type);
        });
    }
    
    $(".urun-name").text();
   
});