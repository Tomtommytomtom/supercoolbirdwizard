import { WatchAndArm } from "../objects/WatchAndArm";

export class Stats extends Phaser.Scene {
    constructor() {
        super("Stats")
    }

    preload() {
        this.load.setPath('assets');
        this.load.image("arm", 'arm.png')
    }

    create() {
        const width = this.cameras.main.width
        const height = this.cameras.main.height

        const watch = new WatchAndArm(this, width / 2, height / 2)

        this.add.existing(watch)

        this.input.on('pointermove', (pointer) => {
            this.moveCameraWithMouse(pointer);
          });
    }

    moveCameraWithMouse(pointer) {
        // Get normalized [0..1] mouse positions
        const mouseX = pointer.x / this.game.config.width;
        const mouseY = pointer.y / this.game.config.height;
    
        // Decide how far you want the camera to move
        // (Lower values = more subtle movement)
        const maxOffsetX = 50;
        const maxOffsetY = 50;
    
        // Calculate camera offsets
        const offsetX = (mouseX - 0.5) * maxOffsetX; // center around 0.5
        const offsetY = (mouseY - 0.5) * maxOffsetY;
    
        // Move the camera's scroll
        this.cameras.main.scrollX = offsetX;
        this.cameras.main.scrollY = offsetY;
      }
}