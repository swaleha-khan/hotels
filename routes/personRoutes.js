const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
router.post('/' , async (req , res) =>{
  try{
  const data = req.body // Assuming the request body contain the persons data

  //create a new person document using the monoose model
  const newPerson = new Person(data);
 const response= await newPerson.save();
  
console.log("Data saved");
res.status(200).json(response);
}
catch(err){
  console.log(err);
  res.status(500).json({error : "Internal server error"})
  
}


})
router.get("/" , async (req , res)=>{
  try{
    const data  = await Person.find();
   console.log("Data fetched");
   res.status(200).json(data);
   
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : "Internal server error"})
  
  }
  }) 
  
  router.get('/:workType' , async (req, res) =>{
    try{
    const workType = req.params.workType.toLowerCase();;
    if(workType== 'chef' || workType == "manager" || workType == "waiter"){
     const response = await Person.find({work:workType});
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

   router.put('/:id' , async (req , res) =>{
    try{
     const personId = req.params.id;
     const updatePersonData = req.body;

     const response = await Person.findByIdAndUpdate(personId , updatePersonData,{
    new : true,
    runValidators : true,
     })
     if(!response){
      return res.status(404({error : 'Person not found'}))
     }
     console.log('data updated');
     res.status(200).json(response);
     
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: "Internal server error "}); 
    }
   } )
   
   module.exports = router;