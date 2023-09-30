function makeExampleStory() {
    burger = sprites.create(assets.image`bigBurger`);
    scaling.scaleToPercent(burger, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    burger.setPosition(80,45);
    story.printDialog("Hello " + userName, 80, 90, 50, 150);
    story.showPlayerChoices("nuh uh", "ok");
    if(story.checkLastAnswer("nuh uh")) {
        story.printDialog("darn", 80, 90, 50, 150);
    } else {
        story.printDialog("great", 80, 90, 50, 150);
    }
}

function vegetableChoice(first: Boolean) {
    story.printDialog("Connie: Alright! Let me bring out our friend, Carrot, to tell you all about vegetables and their importance in a nutritional and balanced diet.", 80, 90, 50, 150);
    story.printDialog(userName + ": Bring out who?", 80, 90, 50, 150);
    carrot = sprites.create(assets.image`carrot`);
    scaling.scaleToPercent(carrot, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    carrot.setPosition(110, 45);
    connie.setPosition(50, 45);
    story.printDialog("Carrot: Hi! I'm Carrot! And I'm here to tell you about why vegetables should be a part of a well balanced plate of food. Vegetables should take up a quarter of your plate. The veggies you consume should be varied so you get all the vitamins that we veggies offer.", 80, 90, 50, 150);
    story.printDialog("Connie: Carrot, tell " + userName + " what vitamins vegetables provide!", 80, 90, 50, 150);
    story.printDialog("Carrot: Alright! I'll start off with my favorite, vitamin A! ", 80, 90, 50, 150);
    story.printDialog(userName + ": Why am I talking to a carrot?", 80, 90, 50, 150);
    story.printDialog("Carrot: Carrots, like me, leafy greens, and sweet potatoes provide amazing sources of vitamin A that keeps your eyes and skin healthy while also protecting you from infection.", 80, 90, 50, 150);
    story.printDialog("Connie: Thank you Carrot!", 80, 90, 50, 150);
    sprites.destroy(carrot);
    connie.setPosition(80,45);
    if(first) {
        story.printDialog("Would you like to hear about grains now, " + userName + "?", 80, 90, 50, 150);
        story.printDialog(userName +": No, I'd like to go home...", 80, 90, 50, 150);
        story.printDialog("Connie: No! Bread, come out and tell "+ userName +" all about the importance of grains please.", 80, 90, 50, 150);
    }
}

function grainChoice(first: Boolean) {
    if(first) {
        story.printDialog("Connie: Alright! Let me bring out our friend, Bread, to tell you all about grains and their importance in a nutritional and balanced diet.", 80, 90, 50, 150);
        story.printDialog(userName +": Bring out who?", 80, 90, 50, 150);
    }
    bread = sprites.create(assets.image`bread`);
    scaling.scaleToPercent(bread, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    bread.setPosition(110, 45);
    connie.setPosition(50, 45);
    story.printDialog("Bread: I am bread.", 80, 90, 50, 150);
    story.printDialog(userName +": Why is there talking bread?", 80, 90, 50, 150);
    story.printDialog("Connie: Can I get some more energy, please?", 80, 90, 50, 150);
    story.printDialog("Bread: No.", 80, 90, 50, 150);
    story.printDialog("Connie: Well, "+ userName +", would like to learn more about grains and their importance in a well balanced and healthy diet. ", 80, 90, 50, 150);
    story.showPlayerChoices("No, not really...", "Yes, Bread, tell me more.")
    if (story.checkLastAnswer("No, not really...")) {
        story.printDialog("Connie: Too bad! Bread, tell him about grains. Now.", 80, 90, 50, 150);
    }
    story.printDialog("Bread: I am bread. Grains, like bread, supply the consumer with essential nutrients like several B vitamins and fiber. These help with weight and blood pressure and control cholesterol levels.", 80, 90, 50, 150);
    story.printDialog("Connie: ... Okay! That was extremely informative and boring!", 80, 90, 50, 150);
    sprites.destroy(bread);
    connie.setPosition(80, 45);
    if(first) {
        story.printDialog("Connie: Would you like to hear about vegetables now?", 80, 90, 50, 150);
        story.printDialog(userName +": No...", 80, 90, 50, 150);
        story.printDialog("Connie: You don't get a choice!", 80, 90, 50, 150);
    }
}

function makeDay1() {
    story.printDialog("(You're at your local farmers market thats weirdly in a forest, you need fresh produce for a healthy meal)", 80, 90, 50, 150);
    story.printDialog(userName +": All of these fresh produce options are so confusing... Where do I start with my balanced meal!?", 80, 90, 50, 150);
    story.printDialog("(You hear the flapping of wings approaching)", 80, 90, 50, 150);
    connie = sprites.create(assets.image`forestBat`);
    scaling.scaleToPercent(connie, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    connie.setPosition(80, 45);
    story.printDialog("Connie: Hi, I'm Connie. Do you need help with something?", 80, 90, 50, 150);
    story.printDialog(userName +": Oh... Um I'm " + userName + ", yea. I just don't know where to start with my nutritional and well balanced dinner for tonight. There are just so many healthy options!", 80, 90, 50, 150);
    story.printDialog("Connie: Well, a healthy diet starts with the 2 biggest food groups, vegetables and grains. Which would you like to hear about first?", 80, 90, 50, 150);
    story.showPlayerChoices("Vegetables", "Grains");
    if(story.checkLastAnswer("Vegetables")) {
        vegetableChoice(true);
        grainChoice(false);
    } else {
        grainChoice(true);
        vegetableChoice(false);
    }
    story.printDialog(userName + ": This was very… informative thank you. Um, how do I leave?", 80, 90, 50, 150);
    story.printDialog("Connie: You buy something!", 80, 90, 50, 150);
    story.printDialog(userName +": Okay... I guess I'll take some carrots and a loaf of bread.", 80, 90, 50, 150);
    story.printDialog("Connie: Sounds good! Bye, "+ userName +"!", 80, 90, 50, 150);
}

function makeDay2() {

}

function makeDay3() {

}

function menu() {
    scene.setBackgroundImage(assets.image`lilypads`);
    game.splash("Day at the Farmer's Market", "Learning to eat healthy!");
    userName = game.askForString("What is your name?");
}

let burger: Sprite;
let cheese: Sprite;
let carrot: Sprite;
let bread: Sprite;
let apple: Sprite;
let ham: Sprite;
let connie: Sprite;
let userName: string;

menu();
scene.setBackgroundImage(assets.image`cityscape`);
makeDay1();
makeDay2();
makeDay3();

