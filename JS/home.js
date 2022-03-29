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
            // console.log(BaseURL+"category?c="+path)

        })
                
    }//fin for
    
},200)





setTimeout(function(){
   console.log(random)
   console.log(random.length)
   for(let i=0;i<random.length;i++){
    console.log(random[i].meals[0])

   }

    
},200)





// async function renderRandom() {
//     await getRandom()
//         .then(
//         function(){
//             console.log(random)

//         }
//     );
//     // console.log(random); 
//     console.log("random"); 

//   }
//   renderRandom();