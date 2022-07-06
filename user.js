var User = /** @class */ (function () {
    function User(name, email, role) {
        var _this = this;
        this.getInfo = function () { return "T\u00EAn ng\u01B0\u1EDDi d\u00F9ng : ".concat(_this.name, "\nEmail c\u00E1 nh\u00E2n l\u00E0 ").concat(_this.email, "\nB\u1EA1n l\u00E0: ").concat(_this.isAdmin()); };
        this.isAdmin = function () {
            if (_this.role === 2) {
                return "Admin";
            }
            else {
                return "User";
            }
        };
        this.name = name;
        this.email = email;
        this.role = role;
    }
    return User;
}());
var user1 = new User('Huy', 'huy@gmail.com', 2);
var user2 = new User('Huuuu', 'huuuu@gmail.com', 1);
console.log(user1.getInfo());
console.log(user2.getInfo());
