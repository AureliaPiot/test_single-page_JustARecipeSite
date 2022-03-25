const BaseURL = "http://localhost/dev/perso/projet/API_cuisine/theMealDB/Front_V2/";
const body = document.getElementsByTagName('body')[0];

// console.log(window.location.pathname.split("/"));
window.addEventListener('popstate', function(event){
    // console.log('EVENT')
    // console.log(event);
    router()
    
})//eventListener popstate 
// (quand on utilise le "pushState", popstate permet de detecter les changement d'url)

window.onload = function(){

    router()

    // console.log(document.querySelectorAll(".nav__item"));
    document.querySelectorAll(".nav__item").forEach((item)=>

        item.addEventListener("click", function(){

            const path = item.getAttribute('value');
            loadPage(path);
            loadScript(path);
            if(path == "home")
            {
                window.history.pushState("","",BaseURL);
                // window.location.reload(true) //actualise la page
                return;
            }
            window.history.pushState("","",BaseURL+path);
            // window.location.reload(true)
        })
    )

}//onload

function router(){
    const path = window.location.pathname.split("/");
    switch(path[7])
    {
        case "":{
            loadPage("home");
            loadScript("home");
            break;
        }
        case "about":{
            loadPage("about");
            loadScript("about");
            break;
        }    
        case "cgu":{
            loadPage("cgu");
            break;
        } 
        case "api":{
            loadPage("api");
            break;
        }
        case "category":{
            loadPage("category");
            loadScript("category");

            // console.log(window.location)
            break
        }
        case "meal":{
            loadPage("meal");
            loadScript("meal");

            console.log(window.location)
            break
        }          
        default:{
            loadPage("404");
            break;
        }
    }//fin switch
}// router



function loadPage($path){

    if($path == "")return;
    const main = document.getElementById("main");
    const request = new XMLHttpRequest();
    request.open("get","pages/"+$path+".html");
    request.send();

    request.onload= function(){
        if(request.status == 200){
            main.innerHTML = request.responseText;
            document.title=$path
        }
    }
}//loadPage

function loadScript($path){

    if(document.getElementsByName('script')[0]){
        document.getElementsByName('script')[0].remove()
    }
        let file ="JS/"+ $path + ".js";
        let tag = document.createElement('script')
        tag.setAttribute('type','text/javascript')
        tag.setAttribute("name","script");
        tag.setAttribute("src", file);
        body.appendChild(tag);
}//loadScript


// document.querySelectorAll(".card-categories").forEach((item)=>

//     item.addEventListener("click", function(e){
//         // e.preventDefault()

//         const path = item.getAttribute('value');
//         loadPage(path);
//         loadScript(path);
//         if(path == "home")
//         {
//             window.history.pushState("","",BaseURL);
//             // window.location.reload(true)
//             return;
//         }
//         window.history.pushState("","",BaseURL+"category?c="+path);
//         // window.location.reload(true)
//     })
// )