export class Snake {
    constructor() {
        this.head = [];
        this.dx = 0;
        this.dy = 10;
        this.body = [
            {X: 200, Y: 200},
            {X: 190, Y: 200},
            {X: 180, Y: 200},
        ];
        this.changingDirection = false;
    }
        
    get length() {
        return this.body.length;
    }
        
    move() {
        this.head = {x: this.body[0].x + this.dx, y: this.body[0].y + this.dy};
        this.checkDirection()     
    }
        
    checkDirection(event) {
        if (this.changingDirection) return;
        this.changingDirection = true;
        this.keyPressed = event;
        this.goingUp = this.dy === -10;
        this.goingDown = this.dy === 10;
        this.goingRight = this.dx === 10;
        this.goingLeft = this.dx === -10;
        switch (this.keyPressed) {
            //right
            case 37:
                if (!this.goingLeft){
                    this.dx = 10;
                    this.dy = 0;
                }
                return;
            //down
            case 38:
                if (!this.goingUp) {
                    this.dx = 0;
                    this.dy = 10;
                }
                return;
            //left
            case 39:
                if (!this.goingRight) {
                    this.dx = -10;
                    this.dy = 0;
                }
                return;
            //up
            case 40:
                if (!this.goingDown) {
                    this.dx = 0;
                    this.dy = -10;
                }
                return;
        }
    }
    
    snakeIsGrowing() {
    }
    
}

   
