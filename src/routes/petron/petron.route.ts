//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import express, { Router } from 'express';

//* Middlewares
import validPetronBody from '../../middlewares/petron/petron.middleware';

//* Controllers
import petronController from '../../controllers/petron/petron.controller';

//* ------------------ CONFIGURATION ------------------ *\\
const petronRouter: Router = express.Router();

//* --------------------- ROUTES ---------------------- *\\

/**
 * Returns a public image link for the generated code picture.
 * @name get/api/petron/petronize
 * @access public [restricted]
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @param {callback} callback - Express callback.
 */
petronRouter.get('/petronize', validPetronBody, petronController);

//* --------------------- EXPORTS --------------------- *\\

export default petronRouter;
