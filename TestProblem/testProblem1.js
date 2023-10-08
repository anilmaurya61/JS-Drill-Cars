import findCarById from '../Problem/problem1.js';
import inventory from '../Inventory/inventory.js';

const car = findCarById(inventory,33);

console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`);