class twitter{
 constructor(name, username, email, age){
   this.name = name,
   this.username = username,
   this.email = email,
   this.bio = "Just another random account",
   this.age = age,
   this.tending_topic = "NodeJs",
   this.hasthag = "#backendNodeJs"
}

   getUsernameAndBio(){
      return `
      Username: ${this.username}
      Bio: ${this.bio}`
   }

   getGeneralInfo(){
      return `
      Owner: ${this.name}
      email: ${this.email}
      Age: ${this.age}`
   }

   set setNewBio(bio){
      this.bio = bio
   }


}

const newAccount = new twitter("Abraham", "@randomUsername", "email@email.com", "25")

console.log(newAccount.getUsernameAndBio());
console.log(newAccount.getGeneralInfo());

console.log("Changing the bio to:")
newAccount.setNewBio = "This is my new bio :)"
console.log(newAccount.getUsernameAndBio());

