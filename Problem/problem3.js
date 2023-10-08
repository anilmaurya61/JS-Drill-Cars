function sortCarModelAlphabeticaly(inventory){
    inventory.sort((a,b)=>{
        let modelA = a.car_model.toLowerCase();
        let modelB = b.car_model.toLowerCase();
        if(modelA < modelB){
            return -1;
        }
        if(modelA > modelB){
            return 1;
        }
        return 0;
    })
    return inventory;
}

export default sortCarModelAlphabeticaly;