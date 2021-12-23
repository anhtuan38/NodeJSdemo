import express from 'express';
const router = express.Router();
import siteController from '../app/controllers/SiteController.js'

router.use('/register', siteController.register);
router.use('/', siteController.home)

export default router;