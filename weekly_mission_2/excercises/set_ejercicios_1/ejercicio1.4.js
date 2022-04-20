const twitter = {
   user: "Abraham Contreras",
   username: "@abcontrerasf",
   bio: "Just another random account",
   age: "25",
   tending_topic: "NodeJs",
   hasthag: "#backendNodeJs",
   getUsernameAndBio: function(){
      return `
      Username: ${this.username}
      Bio: ${this.bio}`
   },
   getNameAndAge: function(){
      return `
      Owner: ${twitter.user}
      Age: ${twitter.age}`

   }
}

console.log(twitter.getUsernameAndBio());
console.log(twitter.getNameAndAge());