const products = [
    {id: 1, name: 'iphone', category: 'phone', price: 20000},
    {id: 2, name: 'samsung', category: 'phone', price: 50000},
    {id: 3, name: 'asus', category: 'laptop', price: 80000},
    {id: 4, name: 'Hp', category: 'laptop', price: 60000},
    {id: 5, name: 'Xaiomi', category: 'Phone', price: 25000},
    {id: 6, name: 'Pro-watch', category: 'watch', price: 20000},
    {id: 7, name: 'Yamaha', category: 'vehicle', price: 20000}
];

let getProduct = (items, search) =>{
    let item = []
    for(product of items){
        if(product.category.toLowerCase().includes(search.toLowerCase())){
            item.push(product)
        }
    }
    return item
}

let result = getProduct(products, 'vehicle');
console.log(result);