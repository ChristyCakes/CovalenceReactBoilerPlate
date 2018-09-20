import { Router } from 'express';
import peopleRouter from './people';        // remove later
import chirpsRouter from './chirps';

let router = Router();

router.use('/people', peopleRouter);        // remove later
router.use('/chirps', chirpsRouter);

export default router;