function carYearList(inventory){
    let listOfYear = [];
    for(let i = 0; i < inventory.length; i++){
        let year = inventory[i].car_year;
        listOfYear.push(year);
    }
    return  listOfYear;
}

export default carYearList;