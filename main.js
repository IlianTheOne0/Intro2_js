const car =
{
	brand: "Toyota",
	model: "Sprinter Trueno",
	year: 1985,
	colors: ["White", "Red", "Black"],

	GetCarInfo: function() { return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`; }
}

console.log(car.GetCarInfo());