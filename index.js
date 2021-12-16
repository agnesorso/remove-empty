function removeEmpty(obj) {
    for (const key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            delete obj[key];
        }
        if(typeof obj[key] === 'object'){
            removeEmpty(obj[key]);
            if(Object.keys(obj[key]).length === 0){
                delete (obj[key]);
            }
        }
    }
}

module.exports = removeEmpty;
