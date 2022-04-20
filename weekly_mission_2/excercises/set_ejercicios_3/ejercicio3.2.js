class issue {
   constructor(author){
   this.title = "🔥 07 Live 1 Semana 3 [Lunes 18 de Abril 8 PM]",
   this.repositoryNameAssociated = "MissionNodeJs",
   this.status = "Open",
   this.numberOfComments = "64",
   this.labels = ["Finalizado",  " LIVE1",  " Semana-3"],
   this.author = author,
   this.dateCreated = "17/04/2022",
   this.lastUpdates = "none"
}
   getTitleAndAuthor(){
      return this.title + " " + this.author;
   }

   set setStatus(status){
      this.status = status;
   }

   getStatus(){
      return this.status;
   }
}

 const myIssue = new issue("Abraham");
 console.log(myIssue.getTitleAndAuthor());
 console.log(myIssue.getStatus());

 console.log("Cambiando estatus con setter:")
 myIssue.setStatus = "Closed"
 console.log(myIssue.getStatus());

