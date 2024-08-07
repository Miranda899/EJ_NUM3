function orderBurger(burgerTipe){
    return new Promise ((resolve, reject) =>{
        console.log("inicio de preparando orden" + orderBurger[burgerTipe]);
        //${burgerTipe}');
        setTimeout(( ) => {
console.log("ya esta lista" + orderBurger[burgerTipe]);
resolve("inicio de preparando orden" + orderBurger[burgerTipe]);        
},2000);


    });
    
    //creacion de una promesa

}

console.log("orden de burquer");
orderBurger("chesseburguer");
