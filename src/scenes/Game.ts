import { Scene } from "phaser";
import { Bird } from "../objects/Bird";

export class Game extends Scene {
  player: Bird;

  constructor() {
    super("Game");
  }

  preload() {
    this.load.setPath("assets");

    this.load.atlas("bird_idle_atlas", "bird_idle.png", "bird_idle.json");
    this.load.atlas(
      "bird_running_atlas",
      "bird_running.png",
      "bird_running.json",
    );
  }

  create() {
    

    this.anims.create({
      key: "run", // A name for this animation
      frames: this.anims.generateFrameNames("bird_running_atlas", {
        start: 0,
        end: 5,
      }),
      frameRate: 8,
      repeat: -1, // Loop forever
    });

    this.anims.create({
      key: "idle", // A name for this animation
      frames: this.anims.generateFrameNames("bird_idle_atlas", {
        start: 0,
        end: 1,
      }),
      frameRate: 2,
      repeat: -1, // Loop forever
    });

    this.player = new Bird(this, 300, 300, "bird_idle_atlas");
  }

  update(time: number, delta: number): void {
    const cursors = this.input.keyboard?.createCursorKeys()
    
    const keys = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

    this.player.move(cursors)

    if(keys?.isDown) {
      console.log("enter")

      this.scene.pause("MainGame")
      this.scene.launch("Stats")
    }
  }
}
