import { Component, OnInit, Injectable } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, find } from 'rxjs/operators';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {
  response: HighlightResult;

  splitText = "The red fox"
  arr1 = [1, 4, 7, 11, 13];
  arr2 = [13, 18, 19, 34];
  arr3 = ["qwerty", "asdfgh"];
  arr4 = ["tyuiop", "ghjkl", "asdfgh"];
  pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
  tt = {
    a: 1,
    b: 2,
    c: 3,
  }

  combinedExpPilot: any;
  intersection;
  textIntersection;
  tester;
  subt;
  findYoungest;
  findOldest;
  findOldestPilot;
  duplicates;
  unique;
  destructuring = { first: 'Whitner', last: 'Pitners', age: 999 };

  

  constructor() {
    // remove duplicates
    this.duplicates = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl", "Mike", "Mike", "Nancy", "Carl"];
    this.unique = this.duplicates.filter((elem, pos) => {
      return this.duplicates.indexOf(elem) == pos;
    });
    this.minMax();
    const { first: f, last: l, age: a } = this.destructuring;
    console.log(`the output ${f}, ${l.split("")}, ${a}`);
    this.intersection = this.arr1.filter(x => this.arr2.includes(x));
    this.textIntersection = this.arr3.filter(x => this.arr4.includes(x));
    console.log(this.intersection);
    console.log(this.textIntersection);
    console.log(this.splitText.split(''));//characters
    console.log(this.splitText.split(' '));//words

    console.log(this.fibonacci_series(8));
    console.log(this.fibRecursive(5));
    console.log(this.fibIterative(6));
    console.log(this.runFibonacciSeries);

    //big O notation
    // constant O(1)
    // linear O(n)
    // log Θ(n log n)
    //quadratic O(n^2) ,
    //sloppy Θ(n!) traveling salesman
    //
    this.combinedExpPilot = this.pilots.reduce(function (oldest: any, pilot) {
      return oldest + pilot.years;
    }, '');
    console.log(this.combinedExpPilot);

    this.findYoungest = this.pilots.reduce(function (youngest: any, pilot) {
      return (pilot.years || 0) > youngest.years ? youngest : pilot;
    }, {});
    console.log(this.findYoungest.name, this.findYoungest.years);

    this.findOldest = this.pilots.reduce(function (oldest: any, pilot) {
      return (oldest.years || 0) > pilot.years ? oldest : pilot;
    }, {});
    console.log(this.findOldest.name, this.findOldest.years);

    this.findOldestPilot = function () {
      this.pilots.reduce(function (oldest: any, pilot) {
        return (oldest.years || 0) > pilot.years ? oldest : pilot;
      }, {});
      console.log(this.findOldest.name, this.findOldest.years);
    }

    this.subt = this.subtract(2, 1);
    console.log(this.subt);
  }

  minMax() {
    let arrMinMax = [];
    let arr = [1, 2, 3, 4];
    let [a, b, c, d] = arr;
    let matrix1 = a + b + c; //no d
    let matrix2 = d + b + a; //no c
    let matrix3 = a + d + c; //no b
    let matrix4 = b + d + c; //no a

    //console.log(a,b,c,d);  
    let newSumsArray = [];
    let nSums = newSumsArray.push(matrix1, matrix2, matrix3, matrix4)
    console.log(newSumsArray);
    let minSum = newSumsArray.reduce((a, b) => a);
    let maxSum = newSumsArray.reduce((a, b) => b);

    arrMinMax.push(minSum, maxSum);
    console.log(arrMinMax);
    return arrMinMax;
  }

  subtract(a, b) { return a - b };


  ngOnInit(): void {
    console.log(this.findOldest.years);
  }

  //generator function
  * myGenerator() {
    // code goes here...

  }

  * fibonacci(n, current = 0, next = 1) {
    if (n === 0) {
      return current;
    }
    yield current;
    yield* this.fibonacci(n - 1, next, current + next);
  }

  runFibonacciSeries = [...this.fibonacci(20)]

  //remove duplicates
  removeDuplicates(arr) {
    var deduper = {}
    arr.forEach((item) => {
      deduper[item] = null;
    });
    return Object.keys(deduper);
  }


  //find fib element iterative
  fibIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
  }

  //find fib element recursive
  fibRecursive(n) {
    if (n < 2) {
      return n
    }
    return this.fibRecursive(n - 1) + this.fibRecursive(n - 2)
  }

  //series fib to n
  fibonacci_series(n) {
    if (n === 1) {
      return [0, 1];
    }
    else {
      var s = this.fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };

  //console.log(fibonacci_series(8));

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

  destructuringPre = `
destructuring = { first: 'Whitner', last: 'Pitners', age: 999 };
const { first: f, last: l, age: a } = this.destructuring;

console.log( "the output", f , l.split(""),  a );`

  fib = `
*fibonacci(n, current = 0, next = 1) {
    if (n === 0) {
      return current;
    }
    yield current;
    yield* this.fibonacci(n - 1, next, current + next);
  }

runFibonacciSeries = [...this.fibonacci(20)]


//basic
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// ...
`
  spread = `
const arr1 = [1,2,3,4]
const arr2 = [...arr1, 5,6,7,8,9]
console.log(arr2); //outputs [1,2,3,4,5,6,7,8,9,]

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8,9]
const combibedArr = [...arr1, ...arr2]
console.log(combibedArr); //outputs [1,2,3,4,5,6,7,8,9,]

//The spread operator can also be used in a function call.

function mySum(num1, num2, num3){
  console.log(num1 + num2 + num3);
}

let params = [32, 58, 21]

mySum(...params);

`

  map = `//vanilla
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//rxjs
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));

// Logs
// 1
// 4
// 9

//observable.pipe function 

import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0),
    map(n => n * n)
  );

// Subscribe to get values
squareOdd.subscribe(x => console.log(x));
`

  observablesTemp = `
      //COLD is when your observable creates the producer

      // COLD
      var cold = new Observable((observer) => {
      var producer = new Producer();
      // have observer listen to producer here
      });

      //HOT is when your observable closes over the producer

      // HOT
      var producer = new Producer();
      var hot = new Observable((observer) => {
      // have observer listen to producer here
      });
`

  subjects = `
const { Subject } = Rx;

const subject = new Subject();

// you can subscribe to them like any other observable

subject.subscribe(x => console.log('one', x), err => console.error('one', err));
subject.subscribe(x => console.log('two', x), err => console.error('two', err));
subject.subscribe(x => console.log('three', x), err => console.error('three', err));


// and you can next values into subjects.
// NOTICE: each value is sent to *all* subscribers. This is the multicast nature of subjects.

subject.next(1);
subject.next(2);
subject.next(3);

// An error will also be sent to all subscribers
subject.error(new Error('bad'));


// NOTICE: once it's errored or completed, you can't send new values into it
try {
  subject.next(4); //throws ObjectUnsubscribedError
} catch (err) {
  console.error('oops', err);
}

`

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
        if (hashMap[value]) {console.log(hashMap[value]); return true;} else { hashMap[k - value] = true };
    }
    return false;
}
`
  curry = `
const notCurry = (x, y, z) => x + y + z; // a regular function
const curry = x => y => z => x + y + z; // a curry function
`

  curry2 = `
// JavaScript substring: str.substr(start[, length])
const curriedSubstring = start => length => str => str.substr(start, length);
const getSubstring = (start, length, str) => curriedSubstring (start) (length) (str);
const getFirstCharacters = (length, str) => curriedSubstring (0) (length) (str);
const getFirstCharacter = str => curriedSubstring (0) (1) (str);
`

  curry3 = `
// Object oriented approach
const getUglyFirstCharacterAsLower = str=> str.substr (0, 1).toLowerCase ();

// Functional approach
const curriedSubstring = start => length => str => str.substr(start, length);
const curriedLowerCase = str => str.toLowerCase ();
const getComposedFirstCharacterAsLower = str => curriedLowerCase (curriedSubstring (0) (1) (str));
`

  curry4 = `
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
`
  curry5 = `
//getNewComposedFirstCharacterAsLower
const getNew = compose (curriedLowerCase, curriedSubstring (0) (1));
  if (getComposedFirstCharacterAsLower ('Martin') === getNew ('Martin') {
console.log ('These two provide equal results.');
}
`
  curry6 = `
match(something).equals(something).then(result).else(default);

//instead of:

match(something).equals(something, result).else(default);
`



  findSums(arr, k) {
    let hashMap
    hashMap = {};
    for (let value of arr) {
      if (hashMap[value]) { console.log(hashMap[value]); return true; } else { hashMap[k - value] = true };
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

  generics = `
/*common example is returning JSON. <T> means that it will return as the type that was passed in.
In this case it's JSON. Using generics are better than using <any>.*/

const getJSON = <T>(config: {
    url: string,
    headers?: { [key: string]: string },
  }): Promise<T> => {
    const fetchConfig = ({
      method: 'GET',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(config.headers || {})
    });
    return fetch(config.url, fetchConfig)
      .then<T>(response => response.json());
  }
`

}
