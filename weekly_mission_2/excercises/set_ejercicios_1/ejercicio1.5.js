const facebook = {
   user: "Abraham",
   post: "Probando el modelado de datos!",
   biography: "Una biografía random :))",
   notifications: "12",
   likes: "100",
   getUserAndPost: function(){
      return `User: ${facebook.user} Post: ${facebook.post}`
   }
}

console.log(facebook.getUserAndPost());