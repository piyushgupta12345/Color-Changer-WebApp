const button = document.querySelector('button');
const container = document.querySelector('.container');
const h2 = document.querySelector('h2');

function random_Color() {
    const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    let cons = '#';
    for (let i = 0; i < 6; i++) {
        cons += color[Math.floor(Math.random() * color.length)];
        // cons = cons + color[i]
    }
    return cons;
}

button.addEventListener('click', () => {
    container.style.color = random_Color();
    document.body.style.backgroundColor = random_Color();
    h2.innerText = random_Color();
    console.log(button)

})