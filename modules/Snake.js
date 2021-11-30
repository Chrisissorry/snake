export class Snake {
    constructor(direction, dx, dy) {
        this.direction = direction;
        this.dx = dx;
        this.dy = dy;
    }
            
    checkDirection() {
        this.goingUp = this.dy === -10;
        this.goingDown = this.dy === 10;
        this.goingRight = this.dx === 10;
        this.goingLeft = this.dx === -10;
        switch (this.direction) {
            
            case "right":
                if (!this.goingLeft){
                    this.dx = 10;
                    this.dy = 0;
                    return [this.dx, this.dy];
                }
                return;
                
            case "down":
                if (!this.goingUp) {
                    this.dx = 0;
                    this.dy = 10;
                    return [this.dx, this.dy];
                }
                return;
                
            case "left":
                if (!this.goingRight) {
                    this.dx = -10;
                    this.dy = 0;
                    return [this.dx, this.dy];
                }
                return;
                
            case "up":
                if (!this.goingDown) {
                    this.dx = 0;
                    this.dy = -10;
                    return [this.dx, this.dy];
                }
                return;
        }
        
        
    }
    
}

   
