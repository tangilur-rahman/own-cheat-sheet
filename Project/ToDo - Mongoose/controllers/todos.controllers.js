
const model = require("./../models/todos.models");


const getData = (req,res)=>{

    model.find({title:req.params.title},{_id : 0})
    .then(result => res.send(result))
    .catch(error => res.sendStatus(500));
}

const getAllData = (req,res)=>{
    
    model.find({},{_id : 0})
    .then(result => res.send(result))
    .catch(error => res.sendStatus(500));
}

const insertData = async (req,res,next)=>{

    model(req.body).save(error => {
        if(!error){
            res.send("successfully add one todo")
        }else{
            res.status(500).send("something was wrong when submitted data")
        }
    })

}

const insertAllData = async (req,res,next)=>{
    model.insertMany(req.body)
    .then((result)=> res.send(result))
    .catch(error => res.send(error.message));
}

const updateData =  (req,res)=>{

    const updateValue = req.body.description;

    model.updateOne({title:req.params.title},{
        $set : {
           description :  updateValue
        }
    }).then((result)=>{
        console.log(req.body);
        res.send(result)
    }).catch(error => res.status(500).send("something was wrong when updateData"));


}

const updateAllData =  (req,res)=>{

    const updateValue = req.body.description;

    model.updateMany({title:"something"},{
        $set : {
            description :  updateValue
        }
    }).then((result)=>{
        res.send(result)
    }).catch(error => res.status(500).send("something was wrong when updateData"));


}

const deleteData =  (req,res)=>{

    model.deleteOne({title:req.params.title})
    .then((result)=>{
        res.send(result)
    }).catch(error => res.status(500).send("something was wrong when deleting"));


}

const deleteAllData =  (req,res)=>{

    model.deleteMany({title:"something"})
    .then((result)=>{
        res.send(result)
    }).catch(error => res.status(500).send("something was wrong when deleting many"));


}


module.exports = controllers = {
    getData,
  getAllData,
  insertData,
  insertAllData,
  updateData,
  updateAllData,
  deleteData,
  deleteAllData,
};