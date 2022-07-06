class User {
    protected name:string;
    protected email:string;
    role:number;

    constructor(name: string, email: string, role:number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo=()=> `Tên người dùng : ${this.name}\nEmail cá nhân là ${this.email}\nBạn là: ${this.isAdmin()}`
    isAdmin=()=>{
        if(this.role===2){
            return `Admin`
        }else {
            return `User`
        }
    }
}

let user1=new User('Huy','huy@gmail.com',2);
let user2=new User('Huuuu','huuuu@gmail.com',1);
console.log(user1.getInfo());
console.log(user2.getInfo());