const url="https://wos-api.clarivate.com/api/woslite/?databaseId=WOS&usrQuery=TS%3D%28cadmium%29&count=1&firstRecord=1"; 
 ( ()=>{
    fetch(url,{
        mode:"no-cors",
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-ApiKey': '8b88d28c52323732785d0490e30b0ff42986d01d'
        }
    })
    
    .then((response)=>{
        return response.json();
    })

    .then((Data)=>{
      console.log("My data: "+Data+"\n");
     })
    
     .catch((err)=>{
       console.log("My Hata: "+err);
     })
    
})();


