console.log('HOME');

// --------------------RANDOM


setTimeout(function(){
//    console.log(randomMeals);
//    console.log(randomMeals.length);
   for(let i=0;i<randomMeals.length;i++){
       let card = document.createElement('div');
       card.setAttribute('value',randomMeals[i].meals[0].strMeal.replaceAll(' ','_'))
       card.classList.add('card','card_rMeal');

       let image = document.createElement('img');
       image.setAttribute('src',randomMeals[i].meals[0].strMealThumb);
       image.setAttribute('alt',randomMeals[i].meals[0].strMeal);
       image.classList.add('card_rImg')

       let title = document.createElement('p');
       title.classList.add('card_rTitle');
       title.innerText=randomMeals[i].meals[0].strMeal;

       card.appendChild(image);
       card.appendChild(title);


       document.getElementById('randoms').appendChild(card)
    //    console.log(document.getElementById('randoms'));
    // console.log(randomMeals[i].meals[0]);

    card.addEventListener("click", function(){

        console.log('test')

            const path = card.getAttribute('value');
            loadPage("meal");
            loadScript("meal");
            
            window.history.pushState("","",BaseURL+"meal?m="+path);
        })

   }//endfor

    
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

// --------------------COUNTRY


console.log('COUNTRY');
console.log(allCountry);

setTimeout(function(){
    console.log(allCountry)
    for(let i=0;i<allCountry.meals.length;i++){
        // console.log(allCategories.categories[i])

        let card = document.createElement('div');
        card.setAttribute('value',`${allCountry.meals[i].strArea}`)

        card.classList.add('card','card-country','show_Onlad');
        
        let text = document.createElement('p');
        text.innerHTML=`${allCountry.meals[i].strArea}`;

        let image = document.createElement('img');
        image.setAttribute('src',`./IMG/flags/${allCountry.meals[i].strArea}.jpg`);
        image.setAttribute('alt',`${allCountry.meals[i].strArea}`);

        
        card.appendChild(image)
        card.appendChild(text)

        document.getElementById('country').appendChild(card)



        card.addEventListener("click", function(){

        // console.log('test')

            const path = card.getAttribute('value');
            loadPage("country");
            loadScript("country");
            
            window.history.pushState("","",BaseURL+"country?c="+path);
        })
                
    }//fin for
    
},200)




// --------------------CATEGORY

    
setTimeout(function(){
    // console.log(allCategories.categories.length)
    for(let i=0;i<allCategories.categories.length;i++){
        // console.log(allCategories.categories[i])

        let card = document.createElement('div');
        card.setAttribute('value',`${allCategories.categories[i].strCategory}`)

        card.classList.add('card','show_Onlad','card-categories');
        
        card.innerHTML=`
            <div class="card-text">
                <h3>${allCategories.categories[i].strCategory} </h3>
                <p>${allCategories.categories[i].strCategoryDescription.split('.')[0]}</p>
            </div>

        `;

        let image = document.createElement('img');
        image.setAttribute('src',`${allCategories.categories[i].strCategoryThumb}`);
        image.setAttribute('alt',`${allCategories.categories[i].strCategory}`);

        // <p>${allCategories.categories[i].strCategoryDescription.split('.')[0]} </p>
        let text = document.createElement('p');
        text.innerText=allCategories.categories[i].strCategoryDescription.split('.')[0];
        
        // card.appendChild(text);
        card.appendChild(image);

        document.getElementById('categories').appendChild(card);



        card.addEventListener("click", function(){

        // console.log('test')

            const path = card.getAttribute('value');
            loadPage("category");
            loadScript("category");
            
            window.history.pushState("","",BaseURL+"category?c="+path);
        })
                
    }//fin for
    
},200)


