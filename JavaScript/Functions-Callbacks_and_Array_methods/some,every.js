const friends = ["Basha","Tabrez","Basheer","Abdul"]

friends.every(friend => friend.length > 5) //false
friends.some(friend => friend.length > 5) //true