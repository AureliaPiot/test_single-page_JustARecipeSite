// let params = new URLSearchParams(document.location.search);
// let category = params.get("c"); // is the string "Jonathan"
// console.log("category")
console.log(new URLSearchParams(document.location.search).get("c"))

// setTimeout(function(){
//     getElCategory('list.php?c='+category);
//     console.log(getElCategory('list.php?c='+category));
//     console.log(elCategory)
// },200)
function getElCategory($url){
    fetch( BaseFetch + $url ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        console.log('data')
        console.log(data)
        data.meals.forEach((item)=>
        console.log(item)
        )

        return 
    })
    .catch(function(err){
        console.error('fetch function fail')
    });
}
function renderCategory(){
    
}
getElCategory('filter.php?c='+new URLSearchParams(document.location.search).get("c"))