export class Snake {
   constructor() {
       this.snakeSegmentWide = 10;
       this.snakeSegmentHeight = 10;
       this.body = [
           {X: 200, Y: 200},
           {X: 190, Y: 200},
           {X: 180, Y: 200},
       ]
   }
       
    draw() {
        console.log(this.body)
        console.log("hurray");
    }
}