class PullRequest {
   constructor(title, lines_changed, author, branchName){
     this.repo = "NodeJs"
     this.title = title
     this.lines_changed = lines_changed
     this.status = "OPEN"
     this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
     this.author = author,
     this.branchName = branchName,
     this.dateCreated = "04/02/2021"
    }
 
   getInfo(){
     return `The PR ${this.title} is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated} by ${this.author} on branch: ${this.branchName}  `
   }
 }


 const myPullRequest = new PullRequest("LaunchX", 100,"abraham", "main")
 console.log(myPullRequest.getInfo())
 const myNewPullRequest = new PullRequest("hola-mundo", 10,"Abraham", "main")
 console.log(myNewPullRequest.getInfo())






