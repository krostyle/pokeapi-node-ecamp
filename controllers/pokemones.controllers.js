//TRUCAZO
const { response, request } = require('express')
const axios = require('axios')

const pokemonesPromise = [];
const pokemonesResolve = [];

const getDataPokemon = async(url) => {
    const { data } = await axios.get(url)
    return { data }
}

const getPokemones = async(req = request, res = response) => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
    const { results } = data;
    results.forEach(element => {
        // console.log(element.url);
        pokemonesPromise.push(getDataPokemon(element.url))

    });

    Promise.all(pokemonesPromise).then(data => {
        data.forEach(element => {
            const nombre = element.data.name;
            const img = element.data.sprites.front_default;
            pokemonesResolve.push({ nombre, img })
        })
    })
    res.json(pokemonesResolve)
}


const postUsers = (req = request, res = response) => {
    res.json({
        msg: 'Post API Controller'
    })
}
const putUsers = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'Put API Controller',
        id
    })
}
const patchUsers = (req = request, res = response) => {
    res.json({
        msg: 'Patch API Controller'
    })
}
const getDelete = (req = request, res = response) => {
    res.json({
        msg: 'Delete API Controller'
    })
}

module.exports = {
    getPokemones,
    postUsers,
    putUsers,
    patchUsers,
    getDelete

}