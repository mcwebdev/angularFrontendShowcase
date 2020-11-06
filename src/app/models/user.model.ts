import { Deserializable } from './deserializable.model';
import { Task } from './task.model';

export class User implements Deserializable {
  public id: number;
  public firstName: string;
  public lastName: string;
  public position: string;
  public tasks: Task[];

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our tasks to prevent already deserialized tasks from being overwritten.
    Object.assign(this, input);

    // Iterate over all tasks for our user and map them to a proper `Task` model
    this.tasks = input.tasks.map(task => new Task().deserialize(task));

    return this;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
