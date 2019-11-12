// 2 - map methodunu kullanarak "triples" isimli diziyi; yani aşağıdaki dizinin elemanlarının 3 ile çarpımıyla elde edilen diziyi oluşturun.

var numbers = [1, 4, 9];

let triples = numbers.map(num => {
  return num * 3;
});
