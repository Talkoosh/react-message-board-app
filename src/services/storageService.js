export const storageService = {
    save, 
    load
}

function save(key, val){
    localStorage.setItem(key, JSON.stringify(val));
    return Promise.resolve();    
}

function load(key){
    return Promise.resolve(JSON.parse(localStorage.getItem(key)));
}