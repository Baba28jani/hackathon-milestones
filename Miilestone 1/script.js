"use strict";
// .......Toggle Contact..........//
let cont_section = document.getElementById('contact');
let cont_btn = document.getElementById('cont_btn');
cont_btn?.addEventListener('click', () => {
    cont_section.classList.toggle('hide');
});
// ........Toggle Education.........//
let edu_section = document.getElementById('education');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
// ........Toggle Expertise...........//
let exps_section = document.getElementById('expertise');
let exps_btn = document.getElementById('exps_btn');
exps_btn?.addEventListener('click', () => {
    exps_section.classList.toggle('hide');
});
// ...........Toggle Language...........//
let lang_section = document.getElementById('language');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    lang_section.classList.toggle('hide');
});
// ............Toggle Refrence.........//
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
// ..........Toggle Experience..........//
let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
// ...........Print Button.............//
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
