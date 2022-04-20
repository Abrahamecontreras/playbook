class repo {
   constructor(name, author){
   this.name = name,
   this.author = author,
   this.language = "JavaScript",
   this.numberOfCommits = 100,
   this.stars = 199,
   this.forks = 299,
   this.issues_open = 10,
   this.issues_close = 10
   }
   getNameAndAuthor(){
     return `New Repo: ${this.name} made by ${this.author}`
   } 
   getGeneralInfo(){
     return ` Language: ${this.language}, Stars: ${this.stars}, Forks: ${this.forks}`
   }
  }

  const myRepo = new repo("TestGame", "Abraham");
  console.log(myRepo.getNameAndAuthor());
  console.log(myRepo.getGeneralInfo());
  
