class Student extends User {
    constructor (username, password, nickname){
        super (username, password);
        this.nickname = nickname;
    }
    getStudentCurses() {
        return [1,2,3];
    }
}