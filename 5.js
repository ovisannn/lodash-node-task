const topik = document.getElementById('fill-me');

topik.innerHTML ='HALO!';


let topik2 = document.querySelectorAll('.change-all-of-me'); 
for (let index = 0; index < topik2.length; index++) {
    topik2[index].innerHTML = 'HALO JUGA!' 
}

const h2 = document.getElementsByTagName('h2');
h2[0].innerHTML =  'Apa kabar!';

let tag = document.createElement("div");
tag.classList.add('container-button');
document.querySelector('#container').appendChild(tag);
document.querySelector('.container-button').style.border = '1px solid black';
document.querySelector('.container-button').style.display = 'inline-block';
document.querySelector('.container-button').style.padding = '20px';


let button = document.createElement("button");
tag.classList.add('button-1')
button.innerHTML = "Ini button"
document.querySelector('.container-button').appendChild(button)

let button2 = document.createElement("button");
tag.classList.add('button-2')
button2.innerHTML = "Ini juga button"
document.querySelector('.container-button').appendChild(button2)
