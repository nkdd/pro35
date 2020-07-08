class Form{
    constructor(){
        this.Q1 = createInput("Name");
        this.A1 = createInput(" ");
        this.Q2 = createInput("Dream Job");
        this.A2 = createInput(" ");
        this.Q3 = createInput("Why?");
        this.A3 = createInput(" ");
        this.Q4 = createInput("Who created interest");
        this.A4 = createInput(" ");
        this.button = createButton("Submit");
        this.greeting = createElement("h2");
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref('/').update({
            gameState : state
        });
    }
    display(){
        this.Q1.position(550,200);
        this.A1.position(550,230);
        this.Q2.position(550,280);
        this.A2.position(550,310);
        this.Q3.position(550,360);
        this.A3.position(550,390);
        this.Q4.position(550,430);
        this.A4.position(550,460);
        this.button.position(650,500);
        var title = createElement('h2');
        title.html("SURVEY ABOUT YOUR FUTURE");
        title.position(450,90);

        this.button.mousePressed(()=>{
            this.Q1.hide();
            this.Q2.hide();
            this.Q3.hide();
            this.Q4.hide();
            //this.A1.hide();
            this.A2.hide();
            this.A3.hide();
            this.A4.hide();
            this.button.hide();
            this.greeting.html("Thank You!");
            this.greeting.position(550,270);
        });
        
    }
}