```javascript
// Incorrect use of $inc operator for updating a field in MongoDB
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: '1' } });
```