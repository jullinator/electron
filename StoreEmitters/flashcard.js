//  FLASHCARD.JS

const SCHEMA = {
  expression: String,
  meaning: String,
  created: Date,
  
}


//save --> doc = { @SCHEMA }
db.insert(doc, function(err, newDoc){
  
})

db.find({ expression: /kon/ }, function(err, docs){
  // konnichiwa, kon, 
})

let flashId = 'ajs754729f'
db.findOne({_id: flashId}, function(err, doc){
  
})
