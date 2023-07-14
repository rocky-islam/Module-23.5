const products = [
    {id: 1, name: 'iphone', category: 'phone', price: 20000},
    {id: 3, name: 'samsung', category: 'phone', price: 50000},
    {id: 2, name: 'asus', category: 'laptop', price: 80000},
    {id: 4, name: 'Hp', category: 'laptop', price: 60000},
    {id: 5, name: 'Xaiomi', category: 'Phone', price: 25000},
    {id: 6, name: 'Pro-watch', category: 'watch', price: 20000},
    {id: 7, name: 'Yamaha', category: 'vehicle', price: 20000}
]

let match = [];
for (const product of products) {
    // console.log(product.category.includes('phone'));
    if(product.category.toLowerCase().includes('Phone'.toLowerCase())){
        match.push(product)
    }
}
console.log(match);