const Router = require('express');
const router = new Router();
const userController = require('../controllers/useerController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.isAuth);

module.exports = router;
