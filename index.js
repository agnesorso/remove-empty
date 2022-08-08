ActionType = {
    type1 : 'customProperties',
    type2 : 'removeProperties',
};

function removeObject(main, list) {
    for (const key in main){
        for(const prop in list){
            if(key === list[prop] && typeof main[key] !== 'object'){
                delete main[key];
            }
        }
        if(typeof main[key] === 'object'){
            removeObject(main[key], list);
            if(Object.keys(main[key]).length === 0){
                delete (main[key]);
            }
        }
    }
}

function customObject(main, list) {
    for (const key in main){
        let exact = false;
        for(const prop in list){
            if(key === list[prop] || (key !== list[prop] && (typeof main[key] === 'object'))){
                exact = true;
            }
        }

        if(exact === false){
            delete main[key];
        }

        if(typeof main[key] === 'object'){
            customObject(main[key], list);
            if(Object.keys(main[key]).length === 0){
                delete (main[key]);
            }
        }
    }
}

function emptyObject(obj) {
    for (const key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            delete obj[key];
        }
        if(typeof obj[key] === 'object'){
            emptyObject(obj[key]);
            if(Object.keys(obj[key]).length === 0){
                delete (obj[key]);
            }
        }
    }
}

function removeEmpty(obj, arr, type) {
    if(obj && !arr && !type){
        emptyObject(obj);
    }
    if(obj && arr && type){
        if(type === ActionType.type1){
            emptyObject(obj);
            customObject(obj, arr);
        }
        if(type === ActionType.type2){
            emptyObject(obj);
            removeObject(obj, arr);
        }
    }
}

module.exports = removeEmpty;
