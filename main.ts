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

function proteinChoice(first: Boolean) {
    story.printDialog("Connie: Okay! Let's bring out our friend, Ham, to tell us all about protein!", 80, 90, 50, 150);
    ham = sprites.create(assets.image`bigHam`);
    scaling.scaleToPercent(ham, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    ham.setPosition(110, 45);
    connie.setPosition(50, 45);
    story.printDialog("Ham: HI THERE! I AM HAM!", 80, 90, 50, 150);
    story.printDialog(userName +": Why are you yelling?", 80, 90, 50, 150);
    story.printDialog("Connie: Ham just likes to do that.", 80, 90, 50, 150);
    story.printDialog("Ham: PROTEIN IS FOUND IN DIFFERENT MEATS AND SEAFOOD BUT ARE NOT EXCLUSIVE TO THOSE FOOD ITEMS. NUTS, BEANS, LENTILS, SEEDS, SOY PRODUCTS, AND EVEN PEAS ALL CONTAIN PROTEIN!", 80, 90, 50, 150);
    story.printDialog("Connie: Ham, tell "+ userName +" why proteins are so important for a balanced meal.", 80, 90, 50, 150);
    story.printDialog("Ham: PROTEINS ARE MADE OF AMINO ACIDS. YOUR BODY NEEDS AMINO ACIDS FOR A VARIETY OF REASONS, LIKE REPAIRING MUSCLES AND BONES. YOUR BODY EVEN USES AMINO ACIDS TO MAKE NECESSARY HORMONES THAT YOUR BODY NEEDS TO LIVE AND FUNCTION!", 80, 90, 50, 150);
    story.printDialog("Connie: Thank you so much Ham! That was extremely informative and energetic!", 80, 90, 50, 150);
    story.printDialog("Ham: IT WAS MY PLEASURE.", 80, 90, 50, 150);
    sprites.destroy(ham);
    connie.setPosition(80, 45);
    if(first) {
        story.printDialog("Connie: Would you like to hear about fruits now, "+ userName +"?", 80, 90, 50, 150);
        story.showPlayerChoices("Yes", "No");
        if(story.checkLastAnswer("No")) {
            story.printDialog("Connie: When are you going to learn your decisions are meaningless?", 80, 90, 50, 150);
            story.printDialog(userName +": Sorry. I will learn about fruits then.", 80, 90, 50, 150);
        }
    }
}

function fruitChoice(first: Boolean) {
    story.printDialog("Connie: Amazing! Let's bring out Apple to teach you about the wonders of fruit.", 80, 90, 50, 150);
    apple = sprites.create(assets.image`apple`);
    scaling.scaleToPercent(apple, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    apple.setPosition(110, 45);
    connie.setPosition(50, 45);
    story.printDialog("Apple: Hiya! I heard you wanted to learn about fruit.", 80, 90, 50, 150);
    story.printDialog(userName +": I guess.", 80, 90, 50, 150);
    story.printDialog("Apple: I love your enthusiasm! Fruits are vital in any healthy diet. Do you know why?", 80, 90, 50, 150);
    story.showPlayerChoices("Yes", "No")
    if(story.checkLastAnswer("Yes")) {
        story.printDialog("Apple: No you don't!", 80, 90, 50, 150);
    } else {
        story.printDialog("Apple: Well that's why I'm here!", 80, 90, 50, 150);
    }
    story.printDialog("Apple: I'm going to teach you about fruits!", 80, 90, 50, 150);
    story.printDialog("Connie: Can you stop talking and start teaching?", 80, 90, 50, 150);
    story.printDialog("Apple: I was literally about to get there. Anyways, fruits provide a plethora of important nutrients like fiber, vitamin C, and potassium. These vitamins and minerals help your body lower blood pressure, and the risk of many diseases and health problems!", 80, 90, 50, 150);
    story.printDialog("Connie: Thank you Apple! That was extremely engaging, I'm sure "+ userName +" really enjoyed that!", 80, 90, 50, 150);
    story.showPlayerChoices("I did.", "I did not.");
    if(story.checkLastAnswer("I did.")) {
        story.printDialog("Connie: Great!", 80, 90, 50, 150);
    } else {
        story.printDialog("Connie: You are extremely ungrateful.", 80, 90, 50, 150);
        story.printDialog(userName +": Sorry.", 80, 90, 50, 150);
    }
    sprites.destroy(apple);
    connie.setPosition(80, 45);
    if(first) {
        story.printDialog("Connie: Would you like to learn about protein now?", 80, 90, 50, 150);
        story.showPlayerChoices("Yes", "Yes");
    }
}

function dairyChoice() {
    story.printDialog("Connie: Dairy, more specifically.", 80, 90, 50, 150);
    story.showPlayerChoices("Is this when milk splashes on my face and tells me about his benefits?", "I'm lactose intolerant");
    if (story.checkLastAnswer("Is this when milk splashes on my face and tells me about his benefits?")) {
        story.printDialog("(You notice some weird stares from the people around you. Why do they keep doing that?)", 80, 90, 50, 150);
        story.printDialog("Connie: What is wrong with you milk can't talk.", 80, 90, 50, 150);
        story.printDialog(userName + ": Oh, sorry I thought we were going with the usual bit.", 80, 90, 50, 150);
        story.printDialog("Connie: What are you talking about?", 80, 90, 50, 150);
        story.printDialog(userName + ": Oh I thought-", 80, 90, 50, 150);
        story.printDialog("Connie: Don't. Anyways, dairy provides calcium, an important mineral that is essential to bone health!", 80, 90, 50, 150);
    }
    story.printDialog("Connie: Fortified soy milk is a great option for those that choose not to consume dairy products or are lactose intolerant. The nutrition content in fortified soymilk is extremely similar to other dairy products! The vitamin D and phosphorus that both dairy and fortified soy milk provide are also vital in bone building.", 80, 90, 50, 150);
    story.printDialog(userName + ": Thank you, that was very informative.", 80, 90, 50, 150);
    story.printDialog("Connie: It feels good to be appreciated.", 80, 90, 50, 150);
}

function makeDay1() {
    scene.setBackgroundImage(assets.image`cityscape`);
    story.printDialog("(You're at your local farmers market that's weirdly in a forest, you need fresh produce for a healthy meal)", 80, 90, 50, 150);
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
    story.printDialog(userName + ": This was very... informative thank you. Um, how do I leave?", 80, 90, 50, 150);
    story.printDialog("Connie: You buy something!", 80, 90, 50, 150);
    story.printDialog(userName +": Okay... I guess I'll take some carrots and a loaf of bread.", 80, 90, 50, 150);
    story.printDialog("Connie: Sounds good! Bye, "+ userName +"!", 80, 90, 50, 150);
    sprites.destroy(connie);
}

function makeDay2() {
    scene.setBackgroundImage(assets.image`forest2`);
    story.printDialog("(After learning the importance of grains and vegetables in a healthy diet, you ate your dinner and still felt hungry and unsatisfied. You go to a new market because the last one was weird and you're definitely normal.)", 80, 90, 50, 150);
    story.printDialog("(You start shaking after hearing the flapping of wings approaching you.)", 80, 90, 50, 150);
    connie = sprites.create(assets.image`forestBat`);
    scaling.scaleToPercent(connie, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    connie.setPosition(80, 45);
    story.printDialog("Connie: Hello, "+ userName +"! It's good to see you again. How was the meal that you prepared with carrots and bread?", 80, 90, 50, 150);
    story.printDialog(userName +": Unfulfilling and boring.", 80, 90, 50, 150);
    story.printDialog("Connie: Well that's because you didn't finish your plate of healthy food silly!", 80, 90, 50, 150);
    story.printDialog(userName +": I was still missing things from my plate?", 80, 90, 50, 150);
    story.printDialog("Connie: Duh. You can't have a balanced meal with only 2 food groups. You were missing fruits and protein on your plate. Would you like to learn more about them?", 80, 90, 50, 150);
    story.printDialog(userName +": No, I think I can just go home and look it up. Thanks tho...", 80, 90, 50, 150);
    story.printDialog("Connie: Proteins or fruit "+ userName +".", 80, 90, 50, 150);
    story.printDialog(userName +": I kinda just want to go home. I'm not even hungry.", 80, 90, 50, 150);
    story.printDialog("(You start to notice weird stares from the people around you in the market.)", 80, 90, 50, 150);
    story.printDialog("Connie: Proteins or fruit?", 80, 90, 50, 150);
    story.showPlayerChoices("Protein", "Fruit");
    if(story.checkLastAnswer("Protein")) {
        proteinChoice(true);
        fruitChoice(false);
    } else {
        fruitChoice(true);
        proteinChoice(false);
    }
    story.printDialog("Connie: Now with your new knowledge of 2 new food groups, you can make a balanced plate of food!", 80, 90, 50, 150);
    story.printDialog(userName +": If I buy more food do I get to leave?", 80, 90, 50, 150);
    story.printDialog("Connie: Yes!", 80, 90, 50, 150);
    story.printDialog("(You buy assorted veggies, a loaf of bread, ham, and an apple and notice that the cashier is looking at you like you're crazy. You're definitely not crazy though.)", 80, 90, 50, 150);
    sprites.destroy(connie);
}

function makeDay3() {
    scene.setBackgroundImage(assets.image`moon`);
    story.printDialog("Your last meal was delicious and felt extremely satisfying. You feel healthier and more energized, but you can't help the feeling there was something you're still missing... You go to a new market in hopes to escape Connie and her wacky friends.", 80, 90, 50, 150);
    story.printDialog(userName +": I seemingly ate all the food groups? Why do I feel like there's still something missing...", 80, 90, 50, 150);
    story.printDialog("(The hairs on your skin stand up as you start hearing the flapping of wings again. When will you escape the tiny bat's grasp? You thought you were free when you learned all the major food groups. How much longer must you stay in this never ending cycle?)", 80, 90, 50, 150);
    connie = sprites.create(assets.image`forestBat`);
    scaling.scaleToPercent(connie, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    connie.setPosition(80, 45);
    story.printDialog("Connie: Grocery shopping again so soon?", 80, 90, 50, 150);
    story.printDialog(userName +": Yes, I felt like there was something missing in my diet.", 80, 90, 50, 150);
    story.printDialog("Connie: Because you were.", 80, 90, 50, 150);
    story.printDialog(userName +": I was? I thought you taught me all the food groups that needed to be on my plate for a healthy and balanced meal?", 80, 90, 50, 150);
    story.printDialog("Connie: Yes, but what you're missing isn't supposed to be on your plate.", 80, 90, 50, 150);
    story.printDialog(userName +": What do you mean?", 80, 90, 50, 150);
    story.printDialog("Connie: You're missing a nice cold glass of milk!", 80, 90, 50, 150);
    story.printDialog(userName +": Milk?", 80, 90, 50, 150);
    dairyChoice();
    story.printDialog(userName +": Connie, how do I make a balanced meal with all food groups?", 80, 90, 50, 150);
    story.printDialog("Connie: I'm glad you asked. Let's get all of our food friends out here!", 80, 90, 50, 150);
    sprites.destroy(connie);

    carrot = sprites.create(assets.image`carrot`);
    scaling.scaleToPercent(carrot, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    carrot.setPosition(30, 45);

    bread = sprites.create(assets.image`bread`);
    scaling.scaleToPercent(bread, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    bread.setPosition(60, 45);

    ham = sprites.create(assets.image`bigHam`);
    scaling.scaleToPercent(ham, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    ham.setPosition(105, 45);

    apple = sprites.create(assets.image`apple`);
    scaling.scaleToPercent(apple, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    apple.setPosition(140, 45);

    story.printDialog("Everyfood: Hello " + userName + ".", 80, 90, 50, 150);
    story.printDialog("Connie: Now, friends, merge into the ultimate food item!", 80, 90, 50, 150);
    sprites.destroy(carrot);
    sprites.destroy(bread);
    sprites.destroy(ham);
    sprites.destroy(apple);
    scene.setBackgroundImage(assets.image`flash`);
    story.printDialog("(A bright flash appears. You're momentarily blinded. The lights die down and you see a burger.)", 80, 90, 50, 150);
    scene.setBackgroundImage(assets.image`moon`);
    connie = sprites.create(assets.image`forestBat`);
    scaling.scaleToPercent(connie, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    connie.setPosition(50, 45);
    burger = sprites.create(assets.image`bigBurger`);
    scaling.scaleToPercent(burger, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle);
    burger.setPosition(110, 45);
    story.printDialog("Burger: please eat me. there is nothing for me in this realm.", 80, 90, 50, 150);
    story.printDialog("Connie: Oh Burger! You always light up the room with your peppy and energetic personality! Tell "+ userName +" about yourself!", 80, 90, 50, 150);
    story.printDialog("Burger: my whole grain bun provides the grain for a balanced diet. my grass fed beef is packed with protein. my tomatoes and lettuce are filled with vital vitamins and minerals that fruits and vegetables provide. finally, my cheese is dairy, and will give your body essential nutrients to build your bones. please eat me.", 80, 90, 50, 150);
    story.printDialog(userName +": This feels kinda wrong to eat you.", 80, 90, 50, 150);
    story.printDialog("Connie: Oh he won't mind!", 80, 90, 50, 150);
    story.printDialog("Burger: please.", 80, 90, 50, 150);
    sprites.destroy(connie);
    sprites.destroy(burger);
    scene.setBackgroundImage(assets.image`flash`);
    story.setPagePauseLength(5000, 5000);
    story.printDialog("You grab the burger and eat it. You are enlightened, finally eating every food group needed for a balanced and healthy diet in one bite. The vitamins and minerals course through your veins and you reach your full potential. Finally, you wake up in an all white room, alone.", 80, 101, 200, 150);
}

function menu() {
    scene.setBackgroundImage(assets.image`lilypads`);
    game.splash("Day at the Farmer's Market", "Learning to eat healthy!");
    music.stopAllSounds()
    userName = game.askForString("What is your name?");
}

let burger: Sprite;
let carrot: Sprite;
let bread: Sprite;
let apple: Sprite;
let ham: Sprite;
let connie: Sprite;
let userName: string;

music.play(music.stringPlayable("C5 A B A G A B G ", 120), music.PlaybackMode.LoopingInBackground)
menu();
scene.setBackgroundImage(assets.image`lilypads`);
music.play(music.stringPlayable("G B A G C5 B A B ", 110), music.PlaybackMode.UntilDone)
story.printDialog("Day 1", 135, 75, 50, 150);
makeDay1();
scene.setBackgroundImage(assets.image`lilypads`);
music.play(music.stringPlayable("G B A G C5 B A B ", 110), music.PlaybackMode.UntilDone)
story.printDialog("Day 2", 135, 75, 50, 150);
makeDay2();
scene.setBackgroundImage(assets.image`lilypads`);
music.play(music.stringPlayable("G B A G C5 B A B ", 110), music.PlaybackMode.UntilDone)
story.printDialog("Day 3", 135, 75, 50, 150);
makeDay3();

