// This is a JavaScript Quiz from BFE.dev

const obj = {
    dev: 'bfe',
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },
    c: () => {
      return this.dev
    },
    d: function() {
      return (() => {
        return this.dev
      })()
    },
    e: function() {
      return this.b()
    },
    f: function() {
      return this.b
    },
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  
  console.log(obj.a())  //bfe
  console.log(obj.b())  //bfe
  console.log(obj.c())  // undefined
  console.log(obj.d())  // bfe
  console.log(obj.e()) //bfe
  console.log(obj.f()()) //undefined
  console.log(obj.g())  // undefined
  console.log(obj.h()())  // undefined
  console.log(obj.i()())  //bfe




//   solution

/*
  Arrow function doesn't have its own this, so this inside of arrow functions is pointed to the this at outer scope.

const obj = {
  dev: 'bfe',
  a: function () {
    return this.dev
  }
}
console.log(obj.a())
// `'bfe'`, `this` points to `obj`

const obj = {
  dev: 'bfe',
  b() {
    return this.dev
  }
}
console.log(obj.b())
// `'bfe'`, shorthand of above

const obj = {
  dev: 'bfe',
  c: () => {
    return this.dev
  }
}

console.log(obj.c())
// undefined, arrow function doesn't have its own `this`
// `this` is pointed to outer scope which is global so undefined is logged

const obj = {
  dev: 'bfe',
  d: function () {
    return (() => {
      return this.dev
    })()
  }
}
console.log(obj.d())
// `'bfe'`
// arrow function doesn't have its own `this`
//  `this` here points to its outer scope, which is the function.
// when obj.d() is called, `this` points to obj,
// so arrow function inside has `this` points to `obj`.

const obj = {
  dev: 'bfe',
  b() {
    return this.dev
  },
  e: function () {
    return this.b()
  }
}
console.log(obj.e())
// `'bfe'`
// when `obje.e()` is called, its `this` is obj
// so for b, its `this` is also obj

const obj = {
  dev: 'bfe',
  b() {
    return this.dev
  },
  f: function () {
    return this.b
  }
}
console.log(obj.f()())
// undefined
// think about obj.f()() as someExpression().
// obj.f() returns function b(), but there is no dot in someExpression,
// so `this` is global and undefined is logged

const obj = {
  dev: 'bfe',
  c: () => {
    return this.dev
  },
  g: function () {
    return this.c()
  }
}
console.log(obj.g())
// undefined
// in g(), `this` is obj
// but for c(), it is arrow function, it doesn't have its own `this`
// so it goes up to global and  undefined is logged

const obj = {
  dev: 'bfe',
  c: () => {
    return this.dev
  },
  h: function () {
    return this.c
  }
}
console.log(obj.h()())
// undefined
// obj.h() returns the arrow function, now the call expression is someExpression(),
// in which there is no dot , also c() is arrow function,
// `this` points to global, so undefined is logged

const obj = {
  dev: 'bfe',
  i: function () {
    return () => {
      return this.dev
    }
  }
}

console.log(obj.i()())
// 'bfe'
// obj.i() returns the anonymous arrow function
// arrow function itself doesn't have `this`,
// but its outer scope, the anonymous function has `this` pointed to obj.
// so the result is 'bfe'
Below is detailed explanation, hang on

CallMemberExpression
Let's first look at how below piece of code is evaluated.

obj.a()
This expression has two parts. 'obj.a' and '()'.

'obj.a' is MemberExpression and '()' is Arguments, as a whole it is CallMemberExpression.

*/
