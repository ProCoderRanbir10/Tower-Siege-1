class Box {
    constructor (x,y,width,height) {
      var options = {
        super(x,y,width,height);
      } 
       block1 = new Block(120, 325,30,30)
       block2 = new Block(150, 325,30,30)
       block3 = new Block(170, 325,30,30)
       block4 = new Block(190, 325,30,30)
       block5 = new Block(210, 325,30,30)
       block6 = new Block(240, 325,30,30)
       block7 = new Block(270, 325,30,30)
       block8 = new Block(330, 235,30,30)
       block9 = new Block(360, 235,30,30)
       block10 = new Block(390, 235,30,30)
       block11 = new Block(420, 235,30,30)
       block12  = new Block(450, 235,30,30)
       block13 = new Block(360, 195,30,30)
       block14 = new Block(360, 195,30,30)
       block15 = new Block(390, 195,30,30)
       block16 = new Block(420, 195,30,30)

       World.add(world, this.body);
    }
}