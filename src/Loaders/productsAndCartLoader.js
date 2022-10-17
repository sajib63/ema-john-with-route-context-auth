import { getStoredCart } from "../utilities/fakedb";


export const productsAndCartLoader = async()=>{

    const productsData= await fetch('products.json');
    const products= await productsData.json();

    const saveCart=getStoredCart();
    const initialCart=[];


    for(const id in saveCart){
        const addedProduct=products.find(product=> product.id=== id);



       if(addedProduct){
        const quantity=saveCart[id];
        addedProduct.quantity=quantity;
        initialCart.push(addedProduct);

       }

    }

   
    return {products,  initialCart};
}
