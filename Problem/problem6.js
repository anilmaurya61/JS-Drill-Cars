function filterBMWAudiCar(inventory){
    let BMWAudiList = [];
    for(let i=0;i<inventory.length;i++){
        let make = inventory[i].car_make;
        if(make == "BMW" || make == "Audi"){
            BMWAudiList.push(inventory[i]);
        }
    }
    return BMWAudiList;
}

export default filterBMWAudiCar;