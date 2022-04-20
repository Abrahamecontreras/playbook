// Ejemplo 5: Atributos con valores por default
class PullRequest {
   constructor(repo, title, lines_changed){
     this.repo = repo
     this.title = title
     this.lines_changed = lines_changed
     this.status = "OPEN"
     this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
    }
 
   getInfo(){
     return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
   }
 }
 
 console.log("Ejemplo 5: Atributos con valores por default")
 const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
 const myPR2 = new PullRequest("LaunchX", "Mi Primer PR", 100, "CLOSED")//No se agregará el último dato por el default
 console.log(myPR1.getInfo())
 console.log(myPR2.getInfo())

 // Puedes instanciar n cantidad de objetos de la misma clase
const myPR3 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR3.getInfo())
 