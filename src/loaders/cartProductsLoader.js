import { getShoppingCart } from "../utilities/fakedb";


const cartProductsLoader = async () => {

    const loadProduct = await fetch('products.json');
    const product = await loadProduct.json();
    console.log(product)
    const storedCart = getShoppingCart();
    // console.log(storedCart)
    const savedCart = []
    for (const id in storedCart) {
        const idMatchProduct = product.find(pd => pd.id == id);
        const quantity=storedCart[id]
        if(idMatchProduct){
           idMatchProduct.quantity=quantity;
           savedCart.push(idMatchProduct)
        }
    }
    return savedCart

}
export default cartProductsLoader;