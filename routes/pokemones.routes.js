const { Router } = require('express');
const { getUsers, postUsers, putUsers, patchUsers, getDelete, getPokemones } = require('../controllers/pokemones.controllers');

const router = Router();

router.get('/', getPokemones)

router.post('/', postUsers)

router.put('/:id', putUsers)

router.patch('/', patchUsers)

router.delete('/', getDelete)



module.exports = router;