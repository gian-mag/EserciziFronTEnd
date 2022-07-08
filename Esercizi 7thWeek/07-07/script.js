let url = "http://jsonplaceholder.typicode.com/posts"

async function getPOsts(){

    await fetch(url).then(res=>res.json()).then((res)=>{
       // esecuzione
       console.log(res);
       // document.write(res.title);
       // document.write(res.body);
       posts = res
   
   })
   getVisibleitems();
   
   function getVisibleitems(){
               document.getElementById("table").innerHTML = "";
       posts.forEach((e)=>{
          let tr = document.createElement('tr')
          tr.innerHTML = e.title
          let btn = document.createElement('button')
          btn.innerHTML = "ELIMINA";
          btn.addEventListener('click', ()=>{
           posts = posts.filter((p)=>{
               return e.id != p.id
           })
           getVisibleitems()
          })
          tr.append(btn)
          document.getElementById("table").append(tr)
       })
   }
   }
   
   getPOsts()