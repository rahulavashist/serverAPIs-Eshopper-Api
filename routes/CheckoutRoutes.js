const express = require("express")


const Checkout = require("../models/Checkout")

const router = express.Router()


router.post("/", async (req, res) => {
    try {
        var data = new Checkout(req.body)
        data.date = new Date()
        await data.save()
        res.send({ result: "Done", message: "Record is Created", data: data })
    }
    catch (error) {
        if (error.errors.userId)
            res.status(400).send({ result: "Fail", message: error.errors.userId.message })
        else if (error.errors.totalAmount)
            res.status(400).send({ result: "Fail", message: error.errors.totalAmount.message })
        else if (error.errors.shippingAmount)
            res.status(400).send({ result: "Fail", message: error.errors.shippingAmount.message })
        else if (error.errors.finalAmount)
            res.status(400).send({ result: "Fail", message: error.errors.finalAmount.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }

})
router.get("/", async (req, res) => {
    try {
        var data = await Checkout.find().sort({ _id: -1 })
        res.send({ result: "Done", total: data.length, data: data })

    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})

router.get("/user/:userId", async (req, res) => {
    try {
        var data = await Checkout.find({ userId: req.params.userId }).sort({ _id: -1 })
        res.send({ result: "Done", total: data.length, data: data })

    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Checkout.findOne({ _id: req.params._id })
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
        var data = await Checkout.findOne({ _id: req.params._id })
        if (data) {
            data.paymentMode = req.body.paymentMode ?? data.paymentMode
            data.paymentStatus = req.body.paymentStatus ?? data.paymentStatus
            data.orderStatus = req.body.orderStatus ?? data.orderStatus
            data.rppid = req.body.rppid ?? data.rppid

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
        await Checkout.deleteOne({ _id: req.params._id })
        res.send({ result: "Done", meaaage: "Record is Deleted !!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })

    }
})
module.exports = router