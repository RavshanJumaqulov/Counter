// let Person = new Object();
let table = document.querySelector('#table')

//habar

const Person = {
    ism: 'Diyor',
    familiyasi: 'Jabborov',
    yoshi: 45,
    tell: '+998 77 765 56 45',
    uylanganmi: true,
}

console.log(Person);



Person.sharfi = 'Vali'

console.log(Person);




let mas = [
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Dilyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Azim', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Axror', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
    { id: 1, ismi: 'Diyor', familiyasi: 'Jabborov', yoshi: 45, tell: '+998 77 765 56 45' },
]

table.innerHTML = mas.map(element => {
    return (
        `<tr>
            <td> ${element.id}</td>
            <td>${element.ismi}</td>
            <td>${element.familiyasi}</td>
            <td>${element.yoshi}</td>
            <td>${element.tell}</td>
        </tr>`
    )
}).join('')



a=1;
let Tas = () => {
    document.querySelector('#ekran').innerHTML = a
    return a= a+1;
}