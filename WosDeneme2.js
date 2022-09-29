//import cors from './node_modules/cors';
const url="https://wos-api.clarivate.com/api/wos/";
const dataFetch = () => {
  
    fetch(url, {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'X-ApiKey': '8b88d28c52323732785d0490e30b0ff42986d01d',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'databaseId': 'WOS',
        'lang': 'English',
        'usrQuery': 'ŞEŞEN, YASİN', 
        'count':1,
        'firstRecord': 1,
        
    })
    
});

const content =  dataFetch.JSON;
console.log(content);
}
// const readFetch = async ()=>{
//     const data =await fetch("https://wos-api.clarivate.com/api/wos/?databaseId=WOS&usrQuery=%C5%9Fe%C5%9Fen%2C%20yasin&count=1&firstRecord=11")
//     console.log(data);
// }

dataFetch();
