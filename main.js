const car =
{
	brand: "Toyota",
	model: "Sprinter Trueno",
	year: 1985,
	colors: ["White", "Red", "Black"],

	GetCar: function() { return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, First color: ${this.colors[0]}`; }
}

console.log(car.GetCar());