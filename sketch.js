    const container = document.getElementById('container');
    const input = document.getElementById('Enter');
    let size = document.getElementById('number');
    size.value = 10;
    const sizeDisplay = document.getElementById('sizeDisplay');

    sizeDisplay.textContent = `${size.value} x ${size.value}`;
    size.addEventListener('input', () => {
    sizeDisplay.textContent = `${size.value} x ${size.value}`;
    });
    


    function color(){
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        const color = `rgb(${R}, ${G}, ${B})`  
        return color;
    }
    container.addEventListener('dblclick',()=>{
        const val = Number(size.value);

        const width = container.clientWidth;
        const boxsize = width / val;
        container.style.alignContent = 'flex-start';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        
        for(let j=0;j<val;j++){
            for(let i=0;i<val;i++){
                const box = document.createElement('div');
                
                box.style.width = boxsize+'px';
                box.style.height = boxsize+'px'; 
                
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