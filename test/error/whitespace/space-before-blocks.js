/* eslint-disable no-unused-vars, no-console */

/**
 * Place 1 space before the leading brace
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#whitespace--before-blocks
 */

class Dog{
  set(attr, obj){
    this[attr] = obj;
  }
}

const dog = new Dog();

// bad
function test(){
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
