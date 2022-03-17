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
        card.classList.add('show_Onlad')
        card.innerHTML=`
            <h5>${allCategories.categories[i].strCategory} </h5>
        `;
        // <p>${allCategories.categories[i].strCategoryDescription.split('.')[0]} </p>
        document.getElementById('categories').appendChild(card)
                
    }
    
},200)
