
let DATA = "secret information";
class user{
    constructor (name ,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(" data =",DATA);
        }
}

let student1 = new user("alpesh" , "alpesh@100");
let student2 = new user("rahul","abc@rahul");