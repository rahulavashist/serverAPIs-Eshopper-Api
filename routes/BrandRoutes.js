const express = require("express")


const Brand = require("../models/Brand")

const router = express.Router()


router.post("/", async (req, res) => {
    try {
        var data = new Brand(req.body)
        await data.save()
        res.send({ result: "Done", message: "Record is Created", data: data })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Name Must Be Unique" })
        else if (error.errors.name)
            res.status(400).send({ result: "Fail", message: error.errors.name.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }

})


router.get("/", async (req, res) => {
    try {
        var data = await Brand.find().sort({ _id: -1 })
        res.send({ result: "Done",total:data.length ,data: data })

    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Brand.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "No Record Found" })

    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})
router.put("/:_id", async (req, res) => {
    try {
        var data = await Brand.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.status = req.body.status ?? data.status
            await data.save()
            res.send({ result: "Done", meaaage: "Record is Updated !!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "No Record Found" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})
router.delete("/:_id", async (req, res) => {
    try {
        await Brand.deleteOne({ _id: req.params._id })
        res.send({ result: "Done", meaaage: "Record is Deleted !!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})
module.exports = router