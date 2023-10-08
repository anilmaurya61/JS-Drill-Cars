import filterBMWAudiCar from "../Problem/problem6.js";
import inventory from "../Inventory/inventory.js";

let BMWAudiList = filterBMWAudiCar(inventory);

console.log(JSON.stringify(BMWAudiList));