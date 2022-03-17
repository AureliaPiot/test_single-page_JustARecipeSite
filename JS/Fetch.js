const BaseFetch ="https://themealdb.com/api/json/v1/1/";

let allCategories
function getCategories($url){
    fetch( BaseFetch + $url ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        // console.log(data)
        allCategories = data
    })
    .catch(function(err){
        serverInaccessible()
    });
}
getCategories("categories.php")
console.log("-------------------------")
