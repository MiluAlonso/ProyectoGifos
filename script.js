
document.getElementById("btn-night").addEventListener("click", ()=> {
    if(document.getElementById("body").className == ("body")) {
        document.getElementById("body").classList.toggle("dark");
        document.getElementById("logo").setAttribute("src", "./assets/gifOF_logo_dark.png");
        document.getElementById("glass").setAttribute("src", "./assets/Combined Shape.svg");
        document.getElementById("drop").setAttribute("src", "./assets/forward.svg");
    }
})

document.getElementById("btn-day").addEventListener("click", ()=> {
    if(document.getElementById("body").className !== ("body")) {
        document.getElementById("body").classList.toggle("dark");
        document.getElementById("logo").setAttribute("src", "./assets/gifOF_logo.png");
        document.getElementById("glass").setAttribute("src", "./assets/Combined Shape.svg");
        document.getElementById("drop").setAttribute("src", "./assets/forward.svg");
    }
})

const input = document.getElementById("searchBar");
input.addEventListener("keyup", suggestSearch);

function suggestSearch(){
    const funny = document.getElementById("funny");
    const sad = document.getElementById("sad");
    const happy = document.getElementById("happy");
    const searchInput = input.value;
    document.getElementById("suggestions-search").className = "suggestSearch";
    funny.innerHTML = `${searchInput} funny`;
    sad.innerHTML = `${searchInput} sad`;
    happy.innerHTML = `${searchInput} happy`;
    if (searchInput == "") {
        document.getElementById("suggestions-search").className = "hidden";
    }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById('buscar-btn').addEventListener("click", ev => {
        document.getElementById('output').innerHTML="";
        ev.preventDefault();
        let str = document.getElementById("searchBar").value;
        const url = `http://api.giphy.com/v1/gifs/search?api_key=RukGj6pSRzYraN1OxHPpg7zweyvc8rDa&limit=25&q=${str}`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            content.data.forEach(gifs => {
                console.log(content.data) 
                console.log('META', content.meta);
                let fig = document.createElement('figure');
                let img = document.createElement('img');
                img.src = gifs.images.fixed_height.url;
                img.alt = gifs.title;
                let out = document.querySelector('.output');
                out.appendChild(fig.appendChild(img));        
            });
           
        })
        .catch(err=>{
            console.log(err);
        })
    })
}

async function suggestedGifs(){
    const url = "https://api.giphy.com/v1/gifs/random?api_key=RukGj6pSRzYraN1OxHPpg7zweyvc8rDa";
    const resp = await fetch (url);
    const datos = await resp.json();
    const title = datos.data.title; 
    console.log(datos); 
    manipularDOM(datos);
}
function manipularDOM(datos){
    const img1 = document.createElement("img");
    img1.src = datos.data.images.original.url;
    const space = document.querySelector(".space_result");
    space.appendChild(img1);
}
suggestedGifs(); 




