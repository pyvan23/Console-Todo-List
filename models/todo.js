import { v4 as uuidv4 } from "uuid";

 export class Todo {
  id = "";
  description = "";
  createdDate = null;

  constructor(description) {

    this.id = uuidv4();
    this.description = description;
    this.createdDate = null;
    
  }
}


