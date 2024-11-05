use NewYork

db.Restaurant.find()

db.Restaurant.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1})

db.Restaurant.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({}, {restaurant_id: 1, name: 1, borough: 1, "address.zipcode":1, _id: 0})

db.Restaurant.find({borough: "Bronx"})

db.Restaurant.find({borough: "Bronx"}).limit(5)

db.Restaurant.find({borough: "Bronx"}).skip(5).limit(5)

db.Restaurant.find({"grades.score": {$gt:90}})

db.Restaurant.find({"grades.score": {$gt:80, $lt:100}})

db.Restaurant.find({"address.coord.1": {$lt:-95.754168}})

db.Restaurant.find({cuisine: {$ne:"American "}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}})

db.Restaurant.find({cuisine: {$ne:"American "}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}})

db.Restaurant.find({cuisine: {$ne:"American "}, "grades.grade": "A", borough: {$ne: "Brooklyn"}}).sort({cuisine: -1})

db.Restaurant.find({name: {$regex: /^Wil/}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({name: {$regex: /ce$/}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({name: {$regex: /Reg/}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({borough: 'Bronx', cuisine: {$in: ["American ", "Chinese"]}})

db.Restaurant.find({borough: {$in: ['Staten Island', 'Queens', 'Brooklyn']}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({borough: {$not:{$in: ['Staten Island', 'Queens', 'Brooklyn']} }}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({"grades.score": {$lte: 10}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0})

db.Restaurant.find({ $or: [{cuisine: {$regex: /Fish/i}, cuisine: {$nin: ["American", "Chinese"]}}, {name: {$regex: /^Wil/i}}]},{restaurant_id: 1, name: 1, borough: 1, cuisine:1, _id: 0} )

db.Restaurant.find({grades: {$elemMatch: {grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z")}}}, {restaurant_id: 1, name: 1, grades: 1, _id: 0})

db.Restaurant.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}, {restaurant_id: 1, name: 1, grades: 1, _id: 0})

db.Restaurant.find({"address.coord.1": {$gt:42, $lte: 52}}, {restaurant_id: 1, name: 1, address: 1,  _id: 0})

db.Restaurant.find().sort({name: 1})

db.Restaurant.find().sort({name: -1})

db.Restaurant.find().sort({cuisine: 1, borough: -1})

db.Restaurant.find({"address.street": {$exists: false}})

db.Restaurant.find({"address.coord": {$type:"double"}})

db.Restaurant.find({"grades.score": {$mod: [7,0]}}, {restaurant_id: 1, name: 1, grades: 1, _id: 0})

db.Restaurant.find({name: {$regex: /mon/}}, {name: 1, borough: 1, "address.coord": 1,  cuisine: 1, _id: 0})

db.Restaurant.find({name: {$regex: /^Mad/}}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0})