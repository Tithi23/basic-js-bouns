const products = [
    { name: 'samsung s5', Price: 12000, camera: 10, storage: 32 },
    { name: 'oppo 3d', Price: 50000, camera: 8, storage: 64 },
    { name: 'walton g6', Price: 32000, camera: 5, storage: 32 },
    { name: 'iphone s5', Price: 1300000, camera: 10, storage: 32 },
    { name: 'xiomi f5', Price: 9000, camera: 8, storage: 32 }
];
function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 's5');
console.log(matched);