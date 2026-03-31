//"this" keyword refers to an object that is executing the current piece of code
const student = {
    name: "ram",
    age: 18,
    eng: 95,
    math: 93,
    phy: 87,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
};
student.getAvg();