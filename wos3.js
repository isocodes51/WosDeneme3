const url="https://wos-api.clarivate.com/api/wos/?databaseId=WOK&usrQuery=%C5%9Fe%C5%9Fen%2C%20yasin&count=1&firstRecord=1";
(async () => {
    
    const rawResponse = await fetch(url, 
    {
      mode:"no-cors",
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-ApiKey': '8b88d28c52323732785d0490e30b0ff42986d01d',
        
      }
      // body: JSON.stringify({
      //   'databaseId': 'WOS',
      //   'lang': 'English',
      //   'usrQuery': 'ŞEŞEN, YASİN', 
      //   'count':1,
      //   'firstRecord': 1,
        
      // })
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();