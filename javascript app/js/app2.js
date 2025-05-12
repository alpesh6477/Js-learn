class ToyotaCar 
 {
start() {
console.log("start");

};
stop() {
    console.log("stop");
    
    };
    setBrand(brand){
        this.brandName = brand;
    }
};

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

let audi = new ToyotaCar();
audi.setBrand("audi"); 



class parent {
    hello()
    {
        console.log("hello000000");

    }
};
class child extends parent{

}
let obj = new child();


