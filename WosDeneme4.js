( () => {
    const url="https://wos-api.clarivate.com/api/wos/?databaseId=WOS&usrQuery=%C5%9Fe%C5%9Fen%2C%20yasin&count=1&firstRecord=11";
    const data =  fetch(url, 
    {
      mode:"no-cors",
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-ApiKey': '8b88d28c52323732785d0490e30b0ff42986d01d',
        'Content-Type': 'application/json',
        'charset':'utf-8'
      }
   
    })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    })();