//const listNilai = ['a','b','c']
//console.log (listNilai[2])

const dataMahasiswa = [
{
    nama:'Ruth',
    npm:'19421093',
    prodi:'Informatika'
},
{
    nama:'sapin',
    npm:'19421066',
    prodi:'Informatika'
}
]
//console.log(dataMahasiswa[0].nama)
for (let i in dataMahasiswa) {
console.log (dataMahasiswa[i].nama+'-'+dataMahasiswa[i].npm + '-'+dataMahasiswa[i].prodi)}
