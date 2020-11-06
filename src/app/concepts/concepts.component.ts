import { Component, OnInit, Injectable } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {
  response: HighlightResult;

  constructor() { }

  ngOnInit(): void {
  }

  greetPromice = () => {
    const greetingPoster = new Promise((resolve, reject) => {
      console.log('Inside Promise (proof of being eager)');
      resolve('Welcome! Nice to meet you.');
    });

    console.log('Before calling then on Promise');

    greetingPoster.then(res => console.log(`Greeting from promise: ${res}`));
  }

  greetObservable = () => {
    const greetingLady$ = new Observable(observer => {
      console.log('Inside Observable (proof of being lazy)');
      observer.next('Hello! I am glad to get to know you.');
      observer.complete();
    });

    console.log('Before calling subscribe on Observable');

    greetingLady$.subscribe({
      next: console.log,
      complete: () => console.log('End of conversation with preety lady')
    });
  }


  greetingObservableSynchronously = () => {
    const greetingLady$ = new Observable(observer => {
      observer.next('Hello! I am glad to get to know you.');
      observer.complete();
    });

    console.log('Before calling subscribe on Observable');

    greetingLady$.subscribe({
      next: console.log,
      complete: () => console.log('End of conversation with preety lady')
    });

    console.log('After calling subscribe on Observable (proof of being able to execute sync)');
  }


  greetingObservableAsynchronously = () => {
    const tiredGreetingLady$ = new Observable(observer => {
      setTimeout(() => {
        observer.next('Hello! I am glad to get to know you.');
        observer.complete();
      }, 2000);
    });

    console.log('Before calling subscribe on Observable');

    tiredGreetingLady$.subscribe({
      next: console.log,
      complete: () => console.log('End of conversation with tired preety lady')
    });

    console.log('After calling subscribe on Observable (proof of being able to execute async)');
  }


  greetingObservableOverTime = () => {
    const notifications$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('New notification');
      }, 2000);

      return () => clearInterval(interval);
    });

    const subscription = notifications$.subscribe(console.log);

    setTimeout(() => subscription.unsubscribe(), 8000);
  }

  greetingObservableOperator = () => {
    const notifications$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('New notification');
      }, 2000);

      return () => clearInterval(interval);
    });

    const enhancedNotifications$ = notifications$.pipe(
      map(message => `${message} ${new Date()}`)
    );

    const subscription = enhancedNotifications$.subscribe(console.log);

    setTimeout(() => subscription.unsubscribe(), 8000);
  }



  readonly = `
//TS Implementation
class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; //Compiler Error

//Vanilla JS use defineProperty method
Object.defineProperty(obj, "prop", {
    value: "test",
    writable: false //this property is not needed as it is default, true to overide
});
`
  prototype = `
//Object Constructor
function Person(first, last, age, eyecolor) {
this.firstName = first;
this.lastName = last;
this.age = age;
this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

//Note
/*__proto__ is the actual object that is used in the
lookup chain to resolve methods, etc. prototype is the
object that is used to build __proto__ when you create
an object with new: So prototype is not available on
the instances themselves (or other objects), but only
on the constructor functions.*/

( new Foo ).__proto__ === Foo.prototype;
( new Foo ).prototype === undefined;

/*
The __proto__ property of Object.prototype is an accessor
property (a getter function and a setter function) that
exposes the internal [[Prototype]] (either an object or null)
of the object through which it is accessed.

The use of __proto__ is controversial and discouraged. 

Create a class, avoid using legacy __proto__
*/

class Animal {
  eat() {
    this.full = true;
  }
}

class Rabbit extends Animal {}

const rabbit = new Rabbit();
rabbit.eat();

`
  findSum = `
function hasSumK(arr, k) {
    hashMap = {};
    for (let value of arr) {
        if (hashMap[value]) { return true;} else { hashMap[k - value] = true };
    }
    return false;
}
`

  findSums(arr, k) {
    let hashMap
    hashMap = {};
    for (let value of arr) {
      if (hashMap[value]) { return true; } else { hashMap[k - value] = true };
    }
    return false;
  }
  operatorObservable =
    `
greetingObservableOperator = () => {
    const notifications$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('New notification');
      }, 2000);

      return () => clearInterval(interval);
    });

    /*RxJS operators to an Observable
    Please note the dollar sign. Using the dollar sign in the name of a
    variable that is an observable, is considered best practice. This way
    it’s easy to identify if your variable is an observable or not.*/

    const enhancedNotifications$ = notifications$.pipe(
      map(message => \`\${ message } \${ new Date() }\`)
    );

    const subscription = enhancedNotifications$.subscribe(console.log);

    setTimeout(() => subscription.unsubscribe(), 8000);
  }
`

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

}
