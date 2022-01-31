const gridElement = document.getElementById('grid');

for (let i = 1; i<=64; i++) {

    const node = document.createElement('div');
    node.classList.add('square');

    node.addEventListener('click', function(){
        console.log(this);
        this.classList.add('clicked');
    })

    gridElement.appendChild(node);

}https://github.com/Kensir01/js-campominato-grid.git