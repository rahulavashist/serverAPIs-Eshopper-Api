const express = require("express")

require("./dbConnect")
const MaincategoryRoutes = require("./routes/MaincategoryRoutes")
const SubcategoryRoutes = require("./routes/SubcategoryRoutes")
const BrandRoutes = require("./routes/BrandRoutes")
const ProductRoutes = require("./routes/ProductRoutes")
const UserRoutes = require("./routes/UserRoutes")
const CartRoutes = require("./routes/CartRoutes")
const WishlistRoutes = require("./routes/WishlistRoutes")
const CheckoutRoutes = require("./routes/CheckoutRoutes")
const NewslatterRoutes = require("./routes/NewslatterRoutes")
const ContactRoutes = require("./routes/ContactRoutes")



const app =express()

app.use(express.json())
app.use("/public",express.static("public"))

app.use("/api/maincategory",MaincategoryRoutes)
app.use("/api/subcategory",SubcategoryRoutes)
app.use("/api/brand",BrandRoutes)
app.use("/api/product",ProductRoutes)
app.use("/api/user",UserRoutes)
app.use("/api/cart",CartRoutes)
app.use("/api/wishlist",WishlistRoutes)
app.use("/api/checkout",CheckoutRoutes)
app.use("/api/newslatter",NewslatterRoutes)
app.use("/api/contact",ContactRoutes)



app.listen(80,()=>{console.log(`Server Run on http://localhost:80`)})