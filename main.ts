import inquirer from "inquirer"
const wordCounter = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter a text:',
    },
  ]);

  const text = answers.text.trim(); // remove trailing spaces
  const words = text.split(' '); // remove empty strings
  const wordCount = words.length;
 

  console.log(`The text contains ${wordCount} word(s).`);
};

wordCounter()


 