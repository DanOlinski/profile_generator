const readline = require('readline');//require readline

const rl = readline.createInterface({//create a place to store input and output. this creates an object FULL of info to process input and output
  input: process.stdin,
  output: process.stdout
});

const questions = {
  q1:'What\'s your name? Nicknames are also acceptable :) ',
  q2:'What\'s an activity you like doing? ',
  q3:'What do you listen to while doing that? ',
  q4:'Which meal is your favourite (eg: dinner, brunch, etc.) ',
  q5:'What\'s your favourite thing to eat for that meal? ',
  q6:'Which sport is your absolute favourite? ',
  q7:'What is your superpower? In a few words, tell us what you are amazing at! ',
};
const answers = {};

rl.question(questions.q1, (answer) => {
  answers.a1 = answer;
  rl.question(questions.q2, (answer) => {
    answers.a2 = answer;
    rl.question(questions.q3, (answer) => {
      answers.a3 = answer;
      rl.question(questions.q4, (answer) => {
        answers.a4 = answer;
        rl.question(questions.q5, (answer) => {
          answers.a5 = answer;
          rl.question(questions.q6, (answer) => {
            answers.a6 = answer;
            rl.question(questions.q7, (answer) => {
              answers.a7 = answer;
              console.log('\n' + `Your Profile has been created: `);
              console.log('Name:', answers.a1);
              console.log('Preffered activity:', answers.a2);
              console.log('Audio preference:', answers.a3);
              console.log('Preffered meal:', answers.a4);
              console.log('Preffered food:', answers.a5);
              console.log('Absolute favorite sport:', answers.a6);
              console.log('Superpower:', answers.a7);
              rl.close();
            });
          });
        });
      });
    });
  });
  
});