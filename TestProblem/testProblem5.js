import inventory from "../Inventory/inventory.js";
import carYearList from "../Problem/problem4.js";
import getOlderCarsCount from "../Problem/problem5.js";

let yearThreshold = 2000;

const listOfYears = carYearList(inventory);
const olderCarsCount = getOlderCarsCount(listOfYears, yearThreshold);

console.log(olderCarsCount)