const issue = {
   title: "🔥 07 Live 1 Semana 3 [Lunes 18 de Abril 8 PM]",
   repositoryNameAssociated: "MissionNodeJs",
   status: "Open",
   numberOfComments: "64",
   labels: ["Finalizado",  " LIVE1",  " Semana-3"],
   author: "carlogilmar",
   dateCreated: "17/04/2022",
   lastUpdates: "none",

   getTitleAndAuthor: function(){
      return this.title + " " + this.author;
   },
   getGeneralInfo: function(){
      return this.status + " " + this.labels + " " + this.dateCreated;
   }
}

console.log("Título  y autor del issue:");
console.log(issue.getTitleAndAuthor());
console.log("Información General:")
console.log(issue.getGeneralInfo());