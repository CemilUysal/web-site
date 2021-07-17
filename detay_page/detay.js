$(document).ready(function(){
    var commentsHtml = "";
    var brandsName;
    var brandsId;
    var markaData;
    var colorCode;
    var colorData;
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    
    var ourRequest = new XMLHttpRequest();     
    ourRequest.open("GET","https://cemil-web.herokuapp.com/data/products-api.php");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    ourRequest.send();
   
    
    var markaRequest = new XMLHttpRequest();     
    markaRequest.open("GET","https://cemil-web.herokuapp.com/data/brands-api.php");
    markaRequest.onload = function(){
        markaData = JSON.parse(markaRequest.responseText);
         for(i=0; i<markaData.length;i++){
            if(brandsId == markaData[i].id){
                brandsName = markaData[i].name;
		        $(".marka").text(brandsName);
            }
        }
    };
    markaRequest.send();

    var colorRequest = new XMLHttpRequest();     
    colorRequest.open("GET","https://cemil-web.herokuapp.com/data/colors-api.php");
    colorRequest.onload = function(){
        colorData = JSON.parse(colorRequest.responseText);
        for(i=0; i<colorData.length;i++){
            for(j=0;j<colorData[i].Children.length; j++){
                if(colorCode == colorData[i].Children[j].Code){
                    colorName = colorData[i].Children[j].Name;
		            $(".renk").text(colorName);
                }
            }
        }
       
        
    };
    colorRequest.send();

    function renderHtml(products){
        brandsId="";
        brandsName="";
        for(i = 0 ; i<products.length;i++){
            if(data.name == products[i].id){
                for(j=0; j<products[i].imagePaths.length;j++){
                    commentsHtml += '<div>  <img src ="'+products[i].imagePaths[j]+'" width="25%" class="float-left">  </div>';
                }
                $(".bx-slider").html(commentsHtml);
                $(".urun-name").text(products[i].name);
                $(".fiyat").text(products[i].price);
                brandsId = products[i].brandId;
                colorCode = products[i].colorCode;
                

            }
        }
    }
});