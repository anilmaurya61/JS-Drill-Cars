function getOlderCarsCount(listOfYears, yearThreshold) {
    let count = 0;
    for(let i = 0; i < listOfYears.length; i++) {
        if(listOfYears[i] < yearThreshold){
            count++;
        }
    }
    return count;
}

export default getOlderCarsCount;