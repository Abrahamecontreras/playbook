const uber = {
   profile: "Abraham",
   destination: "Guadalajara, Jalisco.",
   travelStartTime: "11:00 AM",
   uberdriverName: "Mr Chofer",
   getDriver: function(){
      return `Driver: ${uber.uberdriverName}`
   },
   getDestinationAndTime: function(){
      return `Destination: ${uber.destination} Start Time: ${uber.travelStartTime}`
   }
}

console.log(uber.getDestinationAndTime());
console.log(uber.getDriver());