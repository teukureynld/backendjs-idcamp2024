const sampleProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Phone", category: "Electronics", price: 500 },
  { id: 3, name: "Shirt", category: "Apparel", price: 50 },
  { id: 4, name: "Shoes", category: "Apparel", price: 80 },
  { id: 5, name: "Watch", category: "Accessories", price: 200 },
]

function getProductsByCategory(products, category) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
  const getProduct = sampleProducts.filter((products) => {
    return products.category === category
  })
  return getProduct
}
console.log(getProductsByCategory(sampleProducts, "Electronics")) // Shou

function findProductById(products, id) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */
  const getProductId = sampleProducts.filter((products => {
    return products.id === id;
  }))
  return getProductId
}
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3

// function calculateTotalPrice(products) {
//   /**
//    * TODO:
//    * Gunakan metode array immutable untuk menghitung total harga semua produk.
//    */
//   const getResult = sampleProducts.filter((products => {
//     if (products.price === price) {
//       products.price + price;
//     }
//   }))
//   return getResult;
// }


// function calculateTotalPrice(products) {
//   /**
//    * TODO:
//    * Gunakan metode array immutable untuk menghitung total harga semua produk.
//    */
//   const getResult = sampleProducts.filter((products =>{
//     if(products.price){
//       products.price === price;
//       products.price
//     }
//   }))
//   return getResult;
// }

function calculateTotalPrice(products) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
  const getResult = products.reduce((acc, product)=>{
    return acc + product.price;
  }, 0)
  return getResult;
}

console.log(calculateTotalPrice(sampleProducts)); // Should return 1830