class facebook {
   constructor(post){
   this.user = "Abraham",
   this.post = "Probando el modelado de datos!",
   this.biography = "Una biografía random :))",
   this.notifications = "12",
   this.likes = "100"
   }
   getUserAndPost(){
      return `
      User: ${this.user}
      Post: ${this.post}`
   }
   set setNewPost(post){
      this.post = post
   }
}

  
  const newPost = new facebook("This is my new post, hello everyone")
  
  console.log(newPost.getUserAndPost());
  console.log("Setting a new post:")
  newPost.setNewPost = "Changing this post with a setter! :))"
  console.log(newPost.getUserAndPost());

  
  