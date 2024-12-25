export class WatchAndArm extends Phaser.GameObjects.Container {
    constructor(scene: Phaser.Scene,x: number,y: number) {
        super(scene,x,y)

        const sprite = scene.add.sprite(0,0,'arm')

        this.add(sprite)

        const circlePos = {
            x: 290,
            y: -548
        } 

        // const circle = scene.add.circle(290,-548,71,0xff0000, 1)

        // this.add(circle)

        const text = scene.add.text(circlePos.x - 20, circlePos.y - 60, "Menu")
        this.add(text)

        this.scale = 0.5

        sprite.setRotation(Phaser.Math.PI2/4)

        scene.tweens.add({
            targets: this,
            scale: 3,
            x: this.x-900,
            y: this.y+1600,
            duration: 1000,
            ease: "linear"
        })
    }
}