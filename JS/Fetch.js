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
let randomMeals =[];
 function getRandom(){
    
    fetch( BaseFetch + "random.php" ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        // console.log(data)
        randomMeals.push(data)
    })
    .catch(function(err){
        serverInaccessible()
    });

    }
for(let i= 0 ; i<4 ; i++){
    getRandom()
};

// _______________________________________________
let allCountry;
 function getCountry(){
    
    fetch( BaseFetch + "list.php?a=list" ) 
    .then(function(res){

        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        console.log('data')
        console.log(data)
        allCountry = data
    })
    .catch(function(err){
        serverInaccessible()
    });

    };
getCountry();
