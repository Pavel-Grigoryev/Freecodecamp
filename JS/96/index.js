// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (typeof (id) === 'number' && records[id] != id) {
    let id = {
      [prop]: value
    };
    records.id = id;
  }    
    
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(updateRecords(recordCollection, 25481, 'artist', 'ABBA'));
