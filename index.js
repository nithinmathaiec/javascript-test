function select(data,objectDetails) {
    const idStatus = objectDetails.id;
    const stopsStatus = objectDetails.stop;
    const flightTimeStatus = objectDetails.minflightTime;
    const mergeCondition = objectDetails.merge
    let idFilter = [...data];

    if(idStatus) {
        idFilter = idFilter.filter(dataSet => dataSet.id === idStatus);
    }

    if(mergeCondition){
        idFilter = idFilter.reduce((acc, current) => {
            if(acc.some((ele) => ele.id === current.id)) { 
                const currentValue = acc.find((ele) => ele.id === current.id) 
                const index = acc.indexOf(currentValue);
                const currentArray = [...acc];
                currentArray[index] = {
                    id: current.id,
                    flightTime: current.flightTime + currentValue.flightTime,
                    stops: current.stops && currentValue.stops,
                    };
                
                return currentArray;
            } else {
                return [...acc, current];
            }
        }, []);   
    }

    if(flightTimeStatus){
        idFilter = idFilter.filter(dataSet => dataSet.flightTime >= flightTimeStatus);
    }  

    if(stopsStatus){
        if(stopsStatus === 'true'){
            idFilter = idFilter.filter(dataSet => dataSet.stops );
        }
        else if(stopsStatus === 'false'){
            idFilter = idFilter.filter(dataSet => !dataSet.stops);
        } 
    }

    return(idFilter);
}






