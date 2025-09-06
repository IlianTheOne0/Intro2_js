const product =
{
	name: "Laptop",
	price: 1200,
	brand: "Electronics",
	stock: 30,

	getProperties: function() { return Object.keys(this); }
};

console.log(product.getProperties());