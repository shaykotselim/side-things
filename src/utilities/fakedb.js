// set local Storage

const addToDb = price => {
    const exists = getDb()
    // console.log(exists)
    let shopping_cart ={};

    if(!exists){
        shopping_cart[price] = 1;

    }
    else{
        // const newCount = parseInt(exists) + 1
        // localStorage.setItem(id ,newCount) 
        shopping_cart = JSON.parse(exists);

        if (shopping_cart[price]){
            const newCount = shopping_cart[price] + 1;
            shopping_cart[price] = newCount;
        }
        else{
            shopping_cart[price] = 1;
        }
    }
   updateDb(shopping_cart)
}

const getDb =()=> localStorage.getItem('shopping_cart')
const updateDb = cart=> {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}


const removeDb =(id)=>{
    // localStorage.removeItem(id,1)
    const exists = getDb()
    if(!exists){

    }
    else{
        const shopping_cart = JSON.parse(exists)
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

export{addToDb, removeDb}