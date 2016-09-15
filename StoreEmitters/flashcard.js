//  FLASHCARD.JS

const SCHEMA = {
  expression: String,
  meaning: String,
  created: Date,
  
}

var EventEmitter = require('events')

class onFlashcard extends EventEmitter {
  constructor(){
    super()
    
  }
  reschedule(){ }
}


//save --> doc = { @SCHEMA }
db.insert(doc, function(err, newDoc){
  
})

// e:{ $regex: /kon/, $nin: ['konnichiwa'] } 
  //-->  $in, $gt:(str||int) == $lt , 
 // $exists:true, 
 //$or:[q1, q2] ==/= $and,   ($not:{a:'a'} ==/== a:'a')
db.find({ expression: /kon/ }, function(err, docs){
  // konnichiwa, kon, 
})

let flashId = 'ajs754729f'
db.findOne({_id: flashId}, function(err, doc){
  
})
