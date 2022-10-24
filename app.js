import { checkList, confirm, listDeleteTodos, menu, pause, readInput } from "./helpers/inquirer.js";
import { readDb, saveFile } from "./helpers/saveFile.js";
import { Todos } from "./models/todos.js";

console.clear();

const main = async () => {
  let op = "";
  const todos = new Todos();

  const todosDb = readDb();
  if (todosDb) {
    //establecer todos
    todos.loadTodosFromArray(todosDb);
  }

  do {
    op = await menu();

    switch (op) {
      case "1":
        //create todo
        const desc = await readInput("Description: ");
        todos.createTodo(desc);
        break;

      case "2":
        //List todos
        // console.log(todos.listArr)
        todos.listTodosCompleted();

        break;

      case "3":
        //list todos completed
        todos.listCompletedPending();
        break;

      case "4":
        //list todos completed
        todos.listCompletedPending(false);
        break;
      case "5":
        //list todos completed
        const ids = await checkList(todos.listArr)
        todos.toggleCompleted(ids)
        break;

      case "6":
        

        const id = await listDeleteTodos(todos.listArr)

        if (id !== '0') {

          const ok = await confirm('Are you sure to delete this todo?')

          console.log()
          if (ok) {
            todos.deleteTodo(id)
            console.log()
            console.log('Todo deleted succesfully')
          }
        }
        break;
    }
    saveFile(todos.listArr);

    await pause();
  } while (op !== "0");
};

main();
