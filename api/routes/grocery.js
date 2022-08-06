import express from 'express';
import Grocery from '../grocery_schema/Grocery.js'
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    const newGroceyItem = new Grocery(req.body)
    // here Grocery is model which is imported from (routes/grocery)
    try {
        const savedItem = await newGroceyItem.save()
        res.status(200).json(savedItem)
        // here is savedItem will show the created item
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updateItem = await Grocery.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true })
        // at line no 24 i use "findByIdAndUpdate" method/ then we take prams as id/ then we use mongoDb set method/ then to show the new updateItem we use new:tru, bec "findByIdAndUpdate" always returns previous data
        res.status(200).json(updateItem)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Grocery.findByIdAndDelete(req.params.id)
        // at line no 36 i use "findByIdAndDelete" method/ then we take prams as id/ 
        res.status(200).json("Item has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


// GET
router.get("/:id", async (req, res) => {
    try {
        const GroceyItem = await Grocery.findById(req.params.id)
        // at line no 48 i use "findById" method bec(with findById we can get the particular item )/ then we take prams as id/ 
        res.status(200).json(GroceyItem)
        // here we returns the perticular item
    } catch (err) {
        res.status(500).json(err)
    }
})


// GETALL
router.get("/", async (req, res) => {
    try {
        const GroceyItems = await Grocery.find(req.params.id)
        // at line no 61 i use "find" method bec(with find we can get all the items ) method/ then we take prams as id/ 
        res.status(200).json(GroceyItems)
        // here we returns the all the items
    } catch (err) {
        res.status(500).json(err)
    }
})


export default router