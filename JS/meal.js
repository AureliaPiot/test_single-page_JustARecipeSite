// console.log(new URLSearchParams(document.location.search).get("m"))
console.log('MEAL')
// console.log(path);
function getMeal($url){
    fetch( BaseFetch + $url ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        // console.log(data)

        // for (const key in data.meals[0]) {

        //     console.log(`${key}: ${data.meals[0][key]}`);
        // }
        // console.log(data.meals[0])
        console.log('tesst')

        renderMeal(data.meals[0]);
 
        

        return 
    })
    .catch(function(err){
        console.error('fetch function fail');
    });
}


function renderMeal($object){
    console.log($object);
    // console.log($object.strIngredient20);

    let headMeal = document.createElement('div');
    headMeal.classList.add('headMeal')
// --    
    let imgMeal = document.createElement('img');
        imgMeal.setAttribute('src',$object.strMealThumb );
        imgMeal.setAttribute('alt',$object.strMeal );
// --    

    let titleMeal = document.createElement('div');
    titleMeal.classList.add('headText')
        titleMeal.innerHTML = `
        <h2>${$object.strMeal}</h2>
        <div class="tags"> 
            <a href =${BaseURL + "country?c="+ $object.strArea}>${$object.strArea}</a >
            <a href =${BaseURL + "category?c="+ $object.strCategory }>${$object.strCategory}</a>
        </div>
        `;
// --    

    let tags = document.createElement('div');
        tags.classList.add('tags')
        tags.innerHTML=`
        <p>${$object.strArea}</p>
        <p>${$object.strCategory}</p>

        `
// --    

    let groupElement = document.createElement('div');
        groupElement.classList.add('group-element')
// --    
    let ingredientsElement =document.createElement('div');
        ingredientsElement.classList.add('ingredients')
// --    

    let ingredientsTitle = document.createElement('h5')
        ingredientsTitle.innerHTML=`<i class="fa fa-list-ul"></i><i class="fas fa-weight"></i>`;

    let listIngredient = document.createElement('ul');
        listIngredient.classList.add('list-ingredient')
// --    
        let ingrt
        let msIngrt
        for(let i=1; i<21; i++){
            ingrt = `strIngredient${i}` ;
            msIngrt = `strMeasure${i}` ;
            if($object[ingrt] == null || $object[ingrt] ==""){
            }
            else{   
                // console.log(ingrt)
                console.log($object[ingrt] == '')
                
                listIngredient.innerHTML+=`<li class="ingredient_text">
                <p>${$object[ingrt]}</p>
                <p>${$object[msIngrt]}</p>
                </li>
                `;
            }

        }
// --    

        let instructionsElement = document.createElement('div')
        instructionsElement.classList.add('instructions')

// --    
        let instructionsTitle = document.createElement('h5')
            instructionsTitle.innerHTML=`<i class="fas fa-utensils"></i><i class="fas fa-align-left"></i>`;
// --    

        let instructions = document.createElement('p');
            instructions.classList.add('instruction_text')
            instructions.innerHTML=`
                ${$object.strInstructions.replaceAll('.','.<br>')}
            `

// --    
        let source = document.createElement('a')
            source.setAttribute('href',$object.strSource);
            source.setAttribute('target',"blank")
            source.classList.add('source')
            let strsource = $object.strSource
            if($object.strSource == "" || $object.strSource == null){
                strsource = "source indisponible"
            }

            source.innerHTML=`
                ${strsource}
            `;
// --    
        let youtube = document.createElement('div')
            youtube.classList.add('youtube')
            // width="1269"
            let stryoutube = `<iframe  height="480" src="${$object.strYoutube.replace('watch?v=','embed/')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            if($object.strYoutube == ""|| $object.strYoutube == null){
                stryoutube = "video indisponible"
            }

            youtube.innerHTML=`
                ${stryoutube}
            `;

// --    
            let introRecipe = document.createElement('div');
            introRecipe.classList.add('introSection')
            introRecipe.innerHTML = `<div class="bar"></div><h3>Recipe</h3><div class="bar"></div>`;
// --    
            let introSource = document.createElement('div');
            introSource.classList.add('introSection')
            introSource.innerHTML = `<div class="bar"></div><h3>Source</h3><div class="bar"></div>`;

// --    
            let introYoutube = document.createElement('div');
            introYoutube.classList.add('introSection')
            introYoutube.innerHTML = `<div class="bar"></div><h3>Youtube</h3><div class="bar"></div>`;

// --    



    headMeal.appendChild(titleMeal)
    headMeal.appendChild(imgMeal)
    
    document.getElementById('mealElement').appendChild(headMeal);

    document.getElementById('mealElement').appendChild(introRecipe);

    ingredientsElement.appendChild(ingredientsTitle);
    ingredientsElement.appendChild(listIngredient);

    instructionsElement.appendChild(instructionsTitle);
    instructionsElement.appendChild(instructions);


    groupElement.appendChild(ingredientsElement);
    groupElement.appendChild(instructionsElement);

    document.getElementById('mealElement').appendChild(groupElement);

    document.getElementById('mealElement').appendChild(introYoutube);

    document.getElementById('mealElement').appendChild(youtube);

    document.getElementById('mealElement').appendChild(introSource);

    document.getElementById('mealElement').appendChild(source);


}






getMeal('search.php?s='+new URLSearchParams(document.location.search).get("m"));
console.log('OK');

setTimeout(function(){
    document.getElementById('previous').addEventListener('click',function(){
        history.back()
    })
},200)










/*

dateModified: null
idMeal: "52970"
strArea: "Tunisian"
strCategory: "Dessert"
strCreativeCommonsConfirmed: null
strDrinkAlternate: null
strImageSource: null
strIngredient1: "Orange"
strIngredient2: "Caster Sugar"
strIngredient3: "Olive Oil"
strIngredient4: "Flour"
strIngredient5: "Baking Powder"
strIngredient6: "Eggs"
strIngredient7: "Vanilla Extract"
strIngredient8: ""
strIngredient9: ""
strIngredient10: ""
strIngredient11: ""
strIngredient12: ""
strIngredient13: ""
strIngredient14: ""
strIngredient15: ""
strIngredient16: ""
strIngredient17: ""
strIngredient18: ""
strIngredient19: ""
strIngredient20: ""
strInstructions: "Preheat oven to 190 C / Gas 5. Grease a 23cm round springform tin.\r\nCut off the hard bits from the top and bottom of the orange. Slice the orange and remove all seeds. Puree the orange with its peel in a food processor. Add one third of the sugar and the olive oil and continue to mix until well combined.\r\nSieve together flour and baking powder.\r\nBeat the eggs and the remaining sugar with an electric hand mixer for at least five minutes until very fluffy. Fold in half of the flour mixture, then the orange and the vanilla, then fold in the remaining flour. Mix well but not for too long.\r\nPour cake mixture into prepared tin and smooth out. Bake in preheated oven for 20 minutes. Reduce the oven temperature to 160 C / Gas 2 and bake again for 30 minutes Bake until the cake is golden brown and a skewer comes out clean. Cool on a wire cake rack."
strMeal: "Tunisian Orange Cake"
strMealThumb: "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg"
strMeasure1: "1 large"
strMeasure2: "300g"
strMeasure3: "75 ml "
strMeasure4: "280g"
strMeasure5: "1 tbs"
strMeasure6: "4 large"
strMeasure7: "2 tsp"
strMeasure8: " "
strMeasure9: " "
strMeasure10: " "
strMeasure11: " "
strMeasure12: " "
strMeasure13: " "
strMeasure14: " "
strMeasure15: " "
strMeasure16: " "
strMeasure17: " "
strMeasure18: " "
strMeasure19: " "
strMeasure20: " "
strSource: "http://allrecipes.co.uk/recipe/16067/tunisian-orange-cake.aspx"
strTags: null
strYoutube: "https://www.youtube.com/watch?v=rCUxg866Ea4"
*/
