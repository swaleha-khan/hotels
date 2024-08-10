const express = require("express");
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
const Person = require("../models/Person");

router.post("/" , async (req , res)=>{
  try{
  const data  = req.body;
  const newMenu = new MenuItem(data);
  const response = await newMenu.save();
  console.log("Data saved");
  res.status(200).json(response)
  }
  catch{
 console.log(err);
 res.status(500).json({error : "INternal server error"});
 
  }
})

router.get("/" , async(req , res)=>{
  try{
  const data = await MenuItem.find();
  console.log("Data fetched")
  res.status(200).json(data)
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: "Internal server error "});
    
  }
})
router.get('/:taste' , async (req, res) =>{
  try{
  const tasteType = req.params.tasteType.toLowerCase();;
  if( taste == 'Sweet' ||  taste =='Spicy' || taste == 'Sour'){
   const response = await MenuItem.find({work:workType});
   console.log("Response fetched");
   res.status(200).json(response)
   
  }

 else{
   res.status(404).json({error : " Invalid work Type"})
 }
}
  catch(err){
   console.log(err);
     res.status(500).json({error: "Internal server error "}); 
  }
 })
router.put('/:id' , async (req , res)=>{
try{
const menuId = req.params.id;
const updatedMenuData = req.body;
const response = await    MenuItem.findByIdAndUpdate(menuId , updatedMenuData , {
  new: true, // Return the updated document
runValidators: true, // Run Mongoose validation
});
if (!response) {
return res.status(404).json({ error: 'Menu not found'
});
}
// Send the updated person data as a JSON response
console.log('data updated');
     res.status(200).json(response);
     
    }


catch(err){
  console.log(err);
  res.status(500).json({error: "Internal server error "}); 
}
 })

 router.delete('/:id' ,  async (req , res) =>{
  try{
   const menuId = req.params.body;
   const response = await MenuItem.findByIdAndDelete
  }
  catch(err){

  }
 })

module.exports = router;