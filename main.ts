function makeStory() {
    burger = sprites.create(assets.image`bigBurger`)
    scaling.scaleToPercent(burger, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    burger.setPosition(80,45)
    story.printDialog("Hello i am a burger", 80, 90, 50, 150)
    story.showPlayerChoices("nuh uh", "ok")
    if(story.checkLastAnswer("nuh uh")) {
        story.printDialog("darn", 80, 90, 50, 150)
    } else {
        story.printDialog("great", 80, 90, 50, 150)
    }
}
scene.setBackgroundImage(assets.image`forest2`);
makeStory();

let burger: Sprite;
