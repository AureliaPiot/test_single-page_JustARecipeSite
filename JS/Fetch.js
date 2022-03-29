const BaseFetch ="https://themealdb.com/api/json/v1/1/";

let allCategories
function getCategories(){
    fetch( BaseFetch + "categories.php" ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        console.log(data)
        allCategories = data
    })
    .catch(function(err){
        serverInaccessible()
    });
}
getCategories()
console.log("-------------------------")
// _______________________________________________


// _______________________________________________
let random =[];
 function getRandom(){
    
    fetch( BaseFetch + "random.php" ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        // console.log(data)
        random.push(data)
    })
    .catch(function(err){
        serverInaccessible()
    });

    }
for(let i= 0 ; i<4 ; i++){
    getRandom()
}
