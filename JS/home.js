// dans les fichier script charger dynamiquement, il ne faut pas declerer de variable ( et surment ni de fonction (a tester))
// il execute le script a son chargement, et le re-execute a son rechargement,vu qu'il est enregistrer dans le cache
// window.location.reload(true) permet de palier a cet effet
// mais recharge la page
console.log('HOME');
    
setTimeout(function(){
    // console.log(allCategories.categories.length)
    for(let i=0;i<allCategories.categories.length;i++){
        // console.log(allCategories.categories[i])

        let card = document.createElement('div');
        // card.setAttribute('href',`${BaseURL}category?c=${allCategories.categories[i].strCategory}`)
        card.setAttribute('value',`${allCategories.categories[i].strCategory}`)

        card.classList.add('show_Onlad','card-categories');
        

        card.innerHTML=`

            <h2>${allCategories.categories[i].strCategory} </h2>
        `;

        let image = document.createElement('img');
        image.setAttribute('src',`${allCategories.categories[i].strCategoryThumb}`)
        // <p>${allCategories.categories[i].strCategoryDescription.split('.')[0]} </p>
        card.appendChild(image)
        document.getElementById('categories').appendChild(card)

        card.addEventListener("click", function(){

        console.log('test')

            const path = card.getAttribute('value');
            // const path = 'category';
            loadPage("category");
            loadScript("category");
            
            window.history.pushState("","",BaseURL+"category?c="+path);
            // window.location.reload(true)
            console.log(BaseURL+"category?c="+path)

        })
                
    }
    
},200)
/* <img src="${allCategories.categories[i].strCategoryThumb}" alt="${allCategories.categories[i].strCategory}"> */
// HELLO

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