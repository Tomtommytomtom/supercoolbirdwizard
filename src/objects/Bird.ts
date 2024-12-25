export class Bird extends Phaser.Physics.Arcade.Sprite {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: Phaser.Textures.Texture | string,
    ) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.scale = 0.1;
        this.play("idle");

        this.setBounce(0.2);
        this.setCollideWorldBounds(true);

        console.log(this);
    }

    move(cursors) {

        if (cursors.left.isDown) {
            this.setVelocityX(-300);

            this.play("run", true);
            this.flipX = true;
        } else if (cursors.right.isDown) {
            this.setVelocityX(300);

            this.play("run", true);
            this.flipX = false;
        } else {
            this.setVelocityX(0);

            this.play("idle", true);
        }

        if (cursors.up.isDown && this.body.touching.down) {
            this.setVelocityY(-330);
        }
    }
}
