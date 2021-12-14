const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');


// /api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza);
// set up get one put and delete.

// /api/pizzas/:id
router 
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;