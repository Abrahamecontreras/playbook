const PullRequest = {
   title: "Random1",
   author: "carlogilmar",
   branchName: "main",
   dateCreated: "04/02/2021",
   status: "On branch master",
   repositoryNameAssociated: "NodeJs",
   getStatus: function(){
      return this.status;
   },
   getTitleAndAutor: function(){
      return this.title + " " + this.author;
   }
}

console.log("Título y autor: " + PullRequest.getTitleAndAutor());
console.log("STATUS: " + PullRequest.getStatus());

