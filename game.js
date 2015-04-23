var sceneData = [
    
    //1
    { question: "To start the game, choose your gender:", 

    image: '1.gif',

    choices: [
        { answer: "I'm a Woman ", next: 2 },
        { answer: "I'm a Man", next: 3},
        ]
    },
 
    //2
    { question: "It's your day off! You have five hours until you have to pick your kids up from school. You get out of bed and you realize that your daughter has been playing dress up with your clothes and now they're all over the floor. What do you do?", 

    image: '2.gif',

    choices: [
        { answer: "Pick them up, fold them, and put them away.", next: 4},
        { answer: "You'll get to it later. Leave it there for now.", next: 5},
        ]
    },


    //3
    { question: "It's your day off! You have five hours until you have to pick your kids up from school. You get out of bed and you realize that your kids have emptied your laundry basket onto the floor. What do you do?", 

    image: '3.gif',

    choices: [
        { answer: "Pick them up and put them back in the laundry basket.", next: 6},
        { answer: "You'll get to it later. Leave it there for now.", next: 7},
        ]
    },


    //4
    { question: "That took you exactly 16 minutes. You have have 4 hours and 44 minutes left on your day off. You are super hungry from picking up all those clothes. Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", 

    image: '4.gif',

    choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 8},
        { answer: "Eat breakfat and do the dishes later.", next: 9},
        ]
    }, 

    //5
    { question: "Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", 
    
    image: '5.gif',

    choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 10},
        { answer: "Eat breakfat and do the dishes later.", next: 11},
        ]
    },

    //6
    { question: "That took you exactly 4 minutes. You have 4 hours and 56 minutes left on your day off. You are super hungry from picking up all those clothes. Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", 

    image: '6.gif',

    choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 12},
        { answer: "Eat breakfat and do the dishes later.", next: 13},
        ]
    },

    //7
    { question: "Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", 

    image: '7.gif',

    choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 14},
        { answer: "Eat breakfat and do the dishes later.", next: 15},
        ]
    },

    //8
    { question: "That took you exactly 11 minutes. Then, you eat breakfast. Now you have 4 hours and 13 minutes left on your day off. Take a break:", 

    image: '8.gif',

    choices: [
        { answer: "Watch TV.", next: 16 },
        { answer: "Go for a run.", next: 16},
        ]
    }, 

    //9
    { question: "You do the dishes and it takes you 11 minutes. Now you have 4 hours and 13 minutes left on your day off. Take a break:", 

    image: '9.gif',

    choices: [
        { answer: "Watch TV.", next: 16 },
        { answer: "Go for a run.", next: 16},
        ]
    }, 

    //10
    { question: "That took you exactly 11 minutes. Then, you ate breakfast but realized that there were clothes you need to put away. After spending 16 minutes cleaning the room, you have 4 hours and 13 minutes left on your day off. What do you do?", 

    image: '10.gif',

    choices: [
        { answer: "Watch TV.", next: 16 },
        { answer: "Go for a run.", next: 16},
        ]
    }, 

    //11
    { question: "You eat breakfast in 20 minutes. You have so many chores to do! You do all the dishes in the sink and put the clothes away in your room. Now you have 4 hours and 13 minutes on your day off! What are you going to do?", 

    image: '11.gif',

    choices: [
        { answer: "Watch TV.", next: 16 },
        { answer: "Go for a run.", next: 16},
        ]
    }, 

    //12
    { question: "You eat breakfast in 20 minutes. You have 4 hours and 33 minutes left on your day off! What are you going to do?", 

    image: '12.gif',

    choices: [
        { answer: "Watch TV.", next: 17 },
        { answer: "Go for a run.", next: 17},
        ]
    }, 

    //13
    { question: "You eat breakfast in 20 minutes and do the dishes in 3 minutes. You still have 4 hours and 33 minutes left on your day off! What are you going to do?", 

    image: '13.gif',

    choices: [
        { answer: "Watch TV.", next: 17 },
        { answer: "Go for a run.", next: 17},
        ]
    }, 

    //14
    { question: "That took you 3 minutes. You ate breakfast in 20 minutes, but you realized that there still were clothes you need to put away. You pick up the clothes in 4 minutes. You have 4 hours and 33 minutes on your day off! What are you going to do?", 

    image: '14.gif',

    choices: [
        { answer: "Watch TV.", next: 17 },
        { answer: "Go for a run.", next: 17},
        ]
    }, 

    //15
    { question: "You eat breakfast in 20 minutes. You have so many chores to do! You do all the dishes in the sink and put the clothes away in your room. Now you have 4 hours and 33 minutes on your day off! What are you going to do?", 

    image: '15.gif',

    choices: [
        { answer: "Watch TV.", next: 17 },
        { answer: "Go for a run.", next: 17},
        ]
    }, 

    //16
    { question: "Wow, you spent 2 hours and 36 minutes relaxing! You have 37 minutes left to make dinner before you pick up your kids from school!", 

    image: '16.gif',

    choices: [
        { answer: "Make dinner.", next: 18 },
        ]
    }, 

    //17
    { question: "Wow, you spent 4 hours and 16 minutes relaxing! You have 17 minutes left to make dinner before you pick up your kids from school!", 

    image: '17.gif',

    choices: [
        { answer: "Make dinner.", next: 18 },
        ]
    }, 

    //18 END
    { question: "Time to pick your kids up! Hope you enjoyed your day off! If you were a woman, then you had 2 hours and 36 minutes of leisure time. If you were a man, then you had 4 hours and 16 minutes. The rest of the time was spent doing chores. Eek, that's a big difference!",

    image: '18.gif',

    choices: [
        { answer: "Start Over.", next: 1 },
        ]   
    }, 
];

var ScenesModel = function(scenes) {
    var self = this;
    self.scenes = ko.observableArray(scenes);

    self.activequestion = ko.observable(scenes[0].question)
    self.activechoices = ko.observableArray(scenes[0].choices)
    self.activeimage = ko.observable(scenes[0].image)

    self.nextScene = function(choice) {
        self.activequestion(scenes[choice.next - 1].question);
        self.activechoices(scenes[choice.next - 1].choices);
        self.activeimage(scenes[choice.next - 1].image);

        if (choice.next == 1){
            window.location.href = "index.html";
        }

    }
};

ko.applyBindings(new ScenesModel(sceneData));

/*
        score
        pictures

*/