const { Router } = require('express');
const { usersGet, usersPUT, usersPOST, usersDELETE } = require('../controllers/user.controllers');

const router = Router();

router.get('/', usersGet );

// Para manejar parametros dinamicos de la URL, utilizo :nombreVariable
router.put('/:id', usersPUT);

router.post('/', usersPOST);

router.delete('/', usersDELETE);

module.exports = router;