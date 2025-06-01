//RESUELVE TUS EJERCICIOS AQUI

const { use } = require("react");

const getAllBreeds = async () => {
    try {
        let razas;
        const breeds = fetch(` https://dog.ceo/api/breeds/list/all`);
        console.log(breeds);
        if (breeds.ok){
            JSONBreeds = await breeds.json();
            razas = Object.keys(JSONBreeds);
    } else throw 'Error al recibir fetch';
    return razas;
} catch (error){
    console.log(error);
}
}

const getRandomDog = async () => {
        try {
        const razas = fetch(`https://dog.ceo/api/breeds/image/random`);
        console.log(breeds);
        if (razas.ok){
            JSONRazas = await razas.json();
            return JSONBRazas;
    } else throw 'Error al recibir fetch';
} catch (error){
    console.log(error);
}
}

const getAllImagesByBreed = async () => {
    try {
        const razas = fetch(`https://dog.ceo/api/breed/komondor/images`);
        console.log(breeds);
        if (razas.ok){
            JSONRazas = await razas.message.json(); 
            return JSONRazas;
    } else throw 'Error al recibir fetch';
    return razas;
} catch (error){
    console.log(error);
}
}

const getAllImagesByBreed2 = async (breed) => {
    try {
        const raza = fetch(`https://dog.ceo/api/breed/${breed}/images`);
        console.log(breeds);
        if (raza.ok){
            JSONRazas = await raza.message.json(); 
            return JSONRazas;
    } else throw 'Error al recibir fetch';
    } catch (error){
    console.log(error);
}
}

const getGitHubUserProfile = async (username) => {
    try {
        const user = fetch(`https://api.github.com/users/${username}`);
        if (user.ok){
            JSONUser = await user.json();
            return JSONUser;
        } else throw `Error al recibir fetch`
    } catch (error) {
        console.log(error);
    }
}



