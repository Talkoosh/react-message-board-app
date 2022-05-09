import {storageService} from './storageService.js'

export const userService = {
    getUser,
    login
}


let gDemoUser = require('../data/data.json').currentUser;
const CURR_USER_KEY = 'currUser'; 

async function getUser() {
    let user = await storageService.load(CURR_USER_KEY);
    if(!user) return Promise.reject();
    return Promise.resolve({...user});
}

async function login(username, imgURL, ){
    const user = {
        username,
        image:{
            png: imgURL
        },
        id: _makeId()
    }
    await storageService.save(CURR_USER_KEY, user); 
    return Promise.resolve(user);
}


function _makeId(){
    return Math.floor(Math.random() * 9999)
}