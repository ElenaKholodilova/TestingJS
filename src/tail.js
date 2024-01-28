export function kolobok (string) {
 switch (string) {
  case 'дедушка':
     return  'Я от дедушки ушел';
  case 'заяц':
     return  'Я от зайчика ушел';
  case 'лиса':
      return  'Меня съели';
   default:
     return  'Не ожидал встречи !';
 }
}

console.log(kolobok('дедушка'))
console.log(kolobok('бабушка'))
console.log(kolobok('лиса'))

export function  NewYear(string) {
  switch (string) {
    case 'Дед Мороз':
    case 'Снегурочка':  
      return  `${string}! ${string}! ${string}!`;
   default:
        return  'Герой другой сказки';  
  }
}

console.log(NewYear('Дед Мороз'))
console.log(NewYear('Снегурочка'))
console.log(NewYear('Кощей'))

