const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
  const getProduct = products.filter(product => {
    return product.category === category; 
  });
  return getProduct; 
}

function findProductById(products, id) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */
  const getProductId = products.find(product => {
    return product.id === id; 
  });
  return getProductId; 
}

function calculateTotalPrice(products) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
  const getResult = products.reduce((acc, product) => {
    return acc + product.price; 
  }, 0);
  return getResult;
}

function applyDiscount(products, discount) {
  /**
   * TODO:
   *  Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
  return products.map(product => ({
    ...product, 
    price: product.price - (product.price * (discount / 100))
  }));
}


console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3

