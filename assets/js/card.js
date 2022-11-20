 const cardSpace = document.getElementById('cardSpace')
 
 const url   = window.location.search.replace("?", "");
    const itens = url.split("&");
    
 /*   for (let i = 0; i < 3; i++) {
 }
      */
    cardSpace.innerHTML =  
(`
<div class="${itens[1]}" style="border-radius: 1rem;">
<a href="index.html">
        &larr; <span class="heart">&#9825;</span> 
        </a>
        <span class="name">${itens[2]}</span> 
   <span class="number">#${itens[0]}</span>  
<img src="${itens[3]}"
                        alt="${itens[2]}">
`);
