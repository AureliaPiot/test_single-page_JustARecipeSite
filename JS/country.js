console.log(new URLSearchParams(document.location.search).get("c"))

function getElCountry($url){
    fetch( BaseFetch + $url ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        console.log(data.meals)
        data.meals.forEach(function(item){    
            console.log(item.strMeal);
            renderCountry(item.strMeal,item.strMealThumb)
        })// foreach

        return 
    })
    .catch(function(err){
        console.error('fetch function fail');
    });
}


function renderCountry($title,$thumb){
    console.log($title,$thumb)

    let cardCountry = document.createElement('div');
    cardCountry.classList.add('card','card-ElementCountry','show_Onlad');

    cardCountry.innerHTML = `
    <img src="${$thumb}" alt="${$title}"/>
    <p>${$title}</p>
    `;
    console.log("hello?")

    cardCountry.addEventListener('click',function(){
        window.history.pushState("","",BaseURL+"meal?m="+$title.replaceAll(' ','_'));
        loadPage("meal");
        loadScript("meal");
    })

    document.getElementById('countryElement').appendChild(cardCountry);
}
getElCountry('filter.php?a='+new URLSearchParams(document.location.search).get("c"))

setTimeout(function(){
    document.getElementById('previous').addEventListener('click',function(){
        history.back()
    })
    document.getElementsByClassName('title')[0].innerHTML=`<h1 class="category_title">${new URLSearchParams(document.location.search).get("c")}</h1>`
},200)
