const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector('#bands');

const sortBands = bands.sort((a,b) =>
(strip(a) > strip(b) ? 1:-1)
);

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

list.innerHTML = sortBands.map( band =>
             `<li>${band}</li>`
             ).join('');

/* function createLi(item){ 
 let el = document.createElement('li');
 let textNode = document.createTextNode(`${item}`);
 el.appendChild(textNode);
 list.appendChild(el); 
}*/

/*sortBands.forEach(item => createLi(item));*/