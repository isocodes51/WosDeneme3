const url="https://wos-api.clarivate.com/api/woslite/?databaseId=WOS&usrQuery=TS%3D%28cadmium%29&count=1&firstRecord=1"; 
function getJSON(){
    fetch(url,{
        method: 'GET',
        mode:"no-cors",
        headers: {
            'accept': 'application/json',
            'X-ApiKey': '6b46ffda86a7a3e9aa2336cd846bfd5f09e18708'
        }

        
        
            
    })
    .then((response)=>{
    if(response.status===0)
        return response.json();
    else
      console.log("HATA HATA");  
    })
    .then((Data)=>{
      console.log("My data: "+Data+"\n");
      
     })
    
     .catch((err)=>{
       console.log("My Hata: "+err);
     })
    
}
getJSON(); 

