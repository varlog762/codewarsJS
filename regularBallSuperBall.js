class Ball {
    constructor(balltype='regular') {
        this.balltype = balltype;
    }
}

let ball1 = new Ball(),
    ball2 = new Ball('super');
console.log(ball1.balltype, ball2.balltype);