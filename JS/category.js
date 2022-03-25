// let params = new URLSearchParams(document.location.search);
// let category = params.get("c"); 
// console.log("category")
console.log(new URLSearchParams(document.location.search).get("c"))

document.getElementsByClassName('titles')[0].innerHTML=`<h1 class="category_title">${new URLSearchParams(document.location.search).get("c")}</h1>`



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
    objectCategory.classList.add('objectCategory','show_Onlad')

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

setTimeout(function(){
    document.getElementById('previous').addEventListener('click',function(){
        history.back()
    })
},200)