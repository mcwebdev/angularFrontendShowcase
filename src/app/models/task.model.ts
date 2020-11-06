import {Deserializable} from './deserializable.model';

export class Task implements Deserializable {
  public task: string;
  public status: string;
  public creationDate: Date;
  public token: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
  
  getHp() {
    return this.token * 1.36;
  }
}
