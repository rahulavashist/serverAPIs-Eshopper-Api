const express = require("express")

require("./dbConnect")
const MaincategoryRoutes = require("./routes/MaincategoryRoutes")
const SubcategoryRoutes = require("./routes/SubcategoryRoutes")
const BrandRoutes = require("./routes/BrandRoutes")
const ProductRoutes = require("./routes/ProductRoutes")



const app =express()

app.use(express.json())
app.use("/public",express.static("public"))

app.use("/api/maincategory",MaincategoryRoutes)
app.use("/api/subcategory",SubcategoryRoutes)
app.use("/api/brand",BrandRoutes)
app.use("/api/product",ProductRoutes)


app.listen(80,()=>{console.log(`Server Run on http://localhost:80`)})