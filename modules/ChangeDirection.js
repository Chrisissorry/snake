export class ChangeDirection {
    constructor(keyCode, direction) {
        this.keyCode = keyCode;
        this.direction = direction;
    }

    changeDirection(){
        switch(this.keyCode) {
            // left
            case 37:
                if(this.direction === 'right') break;
                this.direction = 'left';
                return;
            // up
            case 38:
                if(this.direction === 'down') break;
                this.direction = 'up';
                return;
            // right
            case 39:
                if(this.direction === 'left') break;
                this.direction = 'right';
                return;
            // down
            case 40:
                if(this.direction === 'up') break;
                this.direction = 'down';
                return;
        }
    }
}