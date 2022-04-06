// let params = new URLSearchParams(document.location.search);
// let category = params.get("c"); 
// console.log("category")
console.log(new URLSearchParams(document.location.search).get("c"))



function getElCategory($url){
    fetch( BaseFetch + $url ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        // console.log(data)
        data.meals.forEach(function(item){    
            renderCategory(item.strMeal,item.strMealThumb)
        })// foreach

        return 
    })
    .catch(function(err){
        console.error('fetch function fail')
    });
}

function renderCategory($title,$thumb){
    let objectCategory = document.createElement('div')
    objectCategory.classList.add('card','objectCategory','show_Onlad','card')

    objectCategory.innerHTML = `
    <img src="${$thumb}" alt="${$title}"/>
    <p>${$title}</p>
    `;
    objectCategory.addEventListener('click',function(){
        window.history.pushState("","",BaseURL+"meal?m="+$title.replaceAll(' ','_'));
        loadPage("meal");
        loadScript("meal");
    })

    document.getElementById('categoryElement').appendChild(objectCategory) 
}


getElCategory('filter.php?c='+new URLSearchParams(document.location.search).get("c"))

if(document.getElementsByClassName('titles')[0] =='undefined'){
    window.location.reload(true)    
}

setTimeout(function(){
    document.getElementById('previous').addEventListener('click',function(){
        history.back()
    })
},200)
document.getElementsByClassName('title')[0].innerHTML=`<h1 class="category_title">${new URLSearchParams(document.location.search).get("c")}</h1>`
