(()=>{
    const xhr =new XMLHttpRequest();
    const url="https://wos-api.clarivate.com/api/wos/?databaseId=WOS&usrQuery=%C5%9Fe%C5%9Fen%2C%20yasin&count=1&firstRecord=11";
    xhr.open("GET",url,false);
    xhr.setRequestHeader('mode', 'no-cors');
    xhr.setRequestHeader('accept', 'application/json');
    xhr.setRequestHeader("X-ApiKey","8b88d28c52323732785d0490e30b0ff42986d01d");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('charset','utf-8');
    xhr.onload = function(){
     if(this.status===200){
       var data = JSON.parse(this.responseText);
       console.log(data);
     }
     else{
        console.log("Hata!");
     }
    }
    xhr.send(); 
} )();