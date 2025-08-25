const container = document.getElementById('container');
const input = document.getElementById('Enter');
let number = 16;
input.addEventListener('click',()=>{

    number = document.getElementById('number').value;
});
function color(){
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    const color = `rgb(${R}, ${G}, ${B})`  
    return color;
}
container.addEventListener('dblclick',()=>{
    for(let j=0;j<21;j++){
        for(let i=0;i<15;i++){
            const box = document.createElement('div');
            
            box.style.width = number+'px';
            box.style.height = number+'px'; 
            box.style.border = '1px solid black'
            
            box.style.display = 'inline-block';
            container.appendChild(box); 
            box.addEventListener('mouseover',()=>{

                box.style.backgroundColor = color();
                
            });
            
            container.appendChild(box); 
        }
    }
});

input.addEventListener('click',()=>{
    container.innerHTML = '';
    number = document.getElementById('number').value;

});
