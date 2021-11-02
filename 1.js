let dash = require('lodash')

const anggota_kelas = ['budi', 'sita', 'ayu', 'rena', 'omen'];
let mengumpulkan_tugas = ['rena', 'omen'];

const diff = dash.differenceBy(anggota_kelas, mengumpulkan_tugas)
console.log('A')
console.log(diff)

console.log('B')
let chunks = dash.chunk(anggota_kelas, 2);
console.log(chunks);

console.log('C')

let me = dash.kebabCase(anggota_kelas)
console.log(me)

console.log('D')
let c = dash.slice(anggota_kelas,1)
console.log(c)

console.log('E')
let d = dash.reverse(anggota_kelas)
console.log(d)