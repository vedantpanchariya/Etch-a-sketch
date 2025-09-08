    const container = document.getElementById('container');
    const input = document.getElementById('Clear');
    let size = document.getElementById('number');
    size.value = 10;
    const sizeDisplay = document.getElementById('sizeDisplay');
    let enable  = false;
    sizeDisplay.textContent = `${size.value} x ${size.value}`;
    size.addEventListener('input', () => {
    sizeDisplay.textContent = `${size.value} x ${size.value}`;
    });
    
    
    const random = document.getElementById('randomMode');
    const single = document.getElementById('singleMode');
    const picker = document.getElementById('colorPicker');

    let chooser = "#000000";

    let multi = false;
    let singular = true;

    picker.addEventListener('input',(c)=>{
        enable = false;
        chooser = c.target.value;
    })

    random.addEventListener('click',()=>{
        enable = false;
        multi = true;
        singular = false;
    });
    single.addEventListener('click',()=> {
        enable = false;
        singular = true; 
        multi = false;
    });

    
    
    function color(){
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        const color = `rgb(${R}, ${G}, ${B})`  
        return color;
    }

    function grid(){
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
                    if(enable == false) return;
                    if(multi == true){
                        box.style.backgroundColor = color();
                    }else{
                        box.style.backgroundColor = chooser;
                    }
                    
                });
                
                container.appendChild(box); 
                
            }
        }
    }

    container.addEventListener('dblclick',()=>{
        grid();
        enable = true;
    });
    container.addEventListener('click',()=>{
        enable = false;
    })
    
    input.addEventListener('click',()=>{
        container.innerHTML = '';
        number = document.getElementById('number').value;
    });