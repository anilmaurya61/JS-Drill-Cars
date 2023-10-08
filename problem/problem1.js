function findCarById(invetory,id){
    for(let i=1; i<invetory.length; i++){
        if(invetory[i].id == id){
            return invetory[i];
        }
    }
    return null;
}

module.export = findCarById;