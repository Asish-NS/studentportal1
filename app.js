var exprs=require('express')
var bodyParser=require('body-parser')

var exp=exprs()
exp.use(bodyParser.urlencoded({ extended: false }))

exp.use(bodyParser.json())

exp.get("/",(req,res)=>{
    res.send("This is the HOME window")
})
exp.post("/studentdetails",(req,res)=>{
    var sname=req.body.sname
    var sregno=req.body.regno
    var sschool=req.body.school
    var saddress=req.body.address
    var sphone=req.body.phone

    res.json({"Name":sname,"RegNo":sregno,"School":sschool,"Contact":sphone,"Address":saddress})

    
})

exp.listen(process.env.PORT||3000,()=>{
    console.log("Server Running")
})