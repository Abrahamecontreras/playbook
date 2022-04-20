class uber{
   constructor(travelStartTime){
   this.profile = "Abraham",
   this.destination = "Guadalajara, Jalisco.",
   this.travelStartTime = "11:00 AM",
   this.uberdriverName = "Mr Chofer"
   }

   getDriver(){
      return `Driver: ${this.uberdriverName}`
   }

   getDestinationAndTime(){
      return `Destination: ${this.destination} Start Time: ${this.travelStartTime}`
   }

   set setNewTime(newTime){
      this.travelStartTime = newTime;
   }
}


const newTravel = new uber();
console.log(newTravel.getDestinationAndTime());
console.log(newTravel.getDriver());

console.log("Setting a new time");
newTravel.setNewTime = "10:00 AM"
console.log(newTravel.getDestinationAndTime());