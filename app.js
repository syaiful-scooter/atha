//**alat bantu saja, tidak berfungsi */
const _logo = document.querySelectorAll(`#logo path`);
// console.log(_logo);

for (let i = 0; i < _logo.length; i++) {
    console.log(`Letter ${i} is ${_logo[i].getTotalLength()}`);
}