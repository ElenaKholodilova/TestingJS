{
  console.group('Boolen')
  console.log('true', true)
  console.log('false', false)
  const a = 0
  const b = 0
  const c = 1
  const d = '1'

  console.log(`${a} === ${b}`, a === b) //true
  console.log(`${a} == ${b}`, a == b)  //true

  console.log(`${c} === ${d}`, c === d) //false
  //eslint-disable-next-line
  console.log (`${c} == ${d}`, c == d) //true

let obj1 = {}
let obj2 = {}
console .log('obj1'=='obj2', obj1==obj2)
console .groupEnd()
}

const a = 10
 // подставка переменной в обычную строку
 console.log('a is ' + a + '.') // a is 10.
 // в шаблонную строку
 console.log(`a is ${a}.`) // a is 10.
