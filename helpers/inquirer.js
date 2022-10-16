import inquirer from "inquirer";
import Color from 'colors'
import { validate } from "uuid";

const question = [
  {
    type: "list",
    name: "option",
    message: "what do you want to do?",
    choices: [
      {
        value: "1",
        name: "1. Create todo",
      },
      {
        value: "2",
        name: "2. List Todos",
      },
      {
        value: "3",
        name: "3. List todos completed",
      },
      {
        value: "4",
        name: "4. List todos pending",
      },
      {
        value: "5",
        name: "5. Complete todos(s)",
      },
      {
        value: "6",
        name: "6. Delete todo",
      },
      {
        value: "0",
        name: "7. Exit",
      },
    ],
  },
];

export const menu = async () => {

  console.clear();

  console.log("==========================".green);
  console.log("          Menu            ");
  console.log("==========================\n".green);

  const { option } = await inquirer.prompt(question);

  return option;
};

export const pause = async () => {
  const questionContinue = [
    {
      type: "input",
      name: "desc",
      message: "Press ENTER to continue".green,
    },
  ];
  console.log("\n");

  await inquirer.prompt(questionContinue);
};

export const readInput = async (message) => {

  const question = [

    {
      type: "input",
      name: "description",
      message,

      validate(value) {

        if (value.length === 0) {
          return "Please write todo";
        } else {
          return true;
        }
      },
    },
  ];

  const { description } = await inquirer.prompt(question)

  return description;
};
