(function(){
    var xhttp=new XMLHttpRequest();
    var url="http://localhost:8000/PERROs/";
    var txtData = document.getElementById("txtData"); 

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var data = this.responseText;
            txtData.innerHTML=data;
        }
    }
    xhttp.open("GET",url,true);
    xhttp.send();
})();