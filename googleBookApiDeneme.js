


var getir = ()=> {
     
    var html="";
    const xhr =new XMLHttpRequest();
    const goster= document.querySelector("#goster");
    const API_KEY="AIzaSyDduOV6aKeUgRLwWfH4SZHT8xhXQs6q_Os";
    const ISBN=document.getElementById("deger").value;
    const url= `https://www.googleapis.com/books/v1/volumes?q=+isbn:${ISBN}&key=${API_KEY}`;
    html+="GELEN KAYITLAR:<br>";
    xhr.open('GET',url,true);
    xhr.setRequestHeader("X-Api-Key","")
    xhr.onload = function(){
     if(this.status===200){
        var data = JSON.parse(this.responseText);
        html+= `Kitap Adı: ${data.items[0].volumeInfo.title}  ${data.items[0].volumeInfo.subtitle}<br>`;
        html+= `ISBN: ${data.items[0].volumeInfo.industryIdentifiers[1].identifier}<br>`;
        html+=`Yazar:${data.items[0].volumeInfo.authors}<br>`;
        html+=`Basım Tarihi:${data.items[0].volumeInfo.publishedDate}<br>`;
        html+=`Yayın Evi:${data.items[0].volumeInfo.publisher}<br>`;
        html+=`Kategori:${data.items[0].volumeInfo.categories}<br>`;
        html+=`Info Link:<a href=${data.items[0].volumeInfo.infoLink}>Link için tıkla</a><br>`;

       
    //    for (d in data.items[0].volumeInfo){
    //        html+=`<br>${d}`;
    //    }
      
        
     }
     goster.innerHTML=html;
    }
    xhr.send();
    console.log(deger.value);
 };
 document.getElementById("ara").addEventListener("click", getir);
 