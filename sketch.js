const container = document.getElementById('container');
const input = document.getElementById('Clear');
let size = document.getElementById('number');
size.value = 10;
const sizeDisplay = document.getElementById('sizeDisplay');
let enable = false;
sizeDisplay.textContent = `${size.value} x ${size.value}`;
size.addEventListener('input', () => {
    sizeDisplay.textContent = `${size.value} x ${size.value}`;
    container.innerHTML = '';
}); 

const random = document.getElementById('randomMode');
const single = document.getElementById('singleMode');
const picker = document.getElementById('colorPicker');
let chooser = "#000000";
let multi = false;
let singular = true;
picker.addEventListener('input', (c) => {
    enable = false;
    chooser = c.target.value;
})
random.addEventListener('click', () => {
    enable = false;
    multi = true;
    singular = false;
    random.style.background = "black";
    random.style.color = "white";
    single.style.background = "white";
    single.style.color = "black";
});
single.addEventListener('click', () => {
    enable = false;
    singular = true;
    multi = false;
    single.style.background = "black";
    single.style.color = "white";

    random.style.background = "white";
    random.style.color = "black";

});

function color() {
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    const color = `rgb(${R}, ${G}, ${B})`
    return color;
}

function grid() {
    const val = Number(size.value);
    const width = container.clientWidth;
    const boxsize = width / val;

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${val}, 1fr)`;

    for (let j = 0; j < val; j++) {
        for (let i = 0; i < val; i++) {
            const box = document.createElement('div');

            box.style.width = boxsize + 'px';
            box.style.height = boxsize + 'px';

            box.addEventListener('mouseover', () => {
                if (enable == false) return;
                if (multi == true) {
                    box.style.backgroundColor = color();
                } else {
                    box.style.backgroundColor = chooser;
                }
            });

            box.addEventListener('touchstart', (e) => {
                if (enable == false) return;
                e.preventDefault();
                if (multi == true) {
                    box.style.backgroundColor = color();
                } else {
                    box.style.backgroundColor = chooser;
                }
            });

            container.appendChild(box);
        }
    }
}
grid()
container.addEventListener('touchmove', (e) => {
    if (enable == false) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (element && element.parentElement === container) {
        if (multi == true) {
            element.style.backgroundColor = color();
        } else {
            element.style.backgroundColor = chooser;
        }
    }
});

container.addEventListener('touchstart', (e) => {
    if (enable) {
        e.preventDefault();
    }
});

const mobileBtn = document.createElement('button');
mobileBtn.id = 'mobileDrawBtn';
mobileBtn.textContent = 'Start Drawing';
mobileBtn.style.display = 'none';
mobileBtn.style.padding = '15px 30px';
mobileBtn.style.fontSize = '16px';
mobileBtn.style.fontWeight = 'bold';
mobileBtn.style.margin = '10px';
mobileBtn.style.cursor = 'pointer';
mobileBtn.style.background = '#4CAF50';
mobileBtn.style.color = 'white';
mobileBtn.style.border = 'none';
mobileBtn.style.borderRadius = '4px';

const stopBtn = document.createElement('button');
stopBtn.id = 'mobileStopBtn';
stopBtn.textContent = 'Stop Drawing';
stopBtn.style.display = 'none';
stopBtn.style.padding = '15px 30px';
stopBtn.style.fontSize = '16px';
stopBtn.style.fontWeight = 'bold';
stopBtn.style.margin = '10px';
stopBtn.style.cursor = 'pointer';
stopBtn.style.background = '#f44336';
stopBtn.style.color = 'white';
stopBtn.style.border = 'none';
stopBtn.style.borderRadius = '4px';

container.parentNode.insertBefore(mobileBtn, container);
container.parentNode.insertBefore(stopBtn, container);

function checkScreenSize() {
    if (window.innerWidth <= 768) {
        mobileBtn.style.display = 'inline-block';
        stopBtn.style.display = 'inline-block';
    } else {
        mobileBtn.style.display = 'none';
        stopBtn.style.display = 'none';
    }
}

checkScreenSize();
window.addEventListener('resize', checkScreenSize);

mobileBtn.addEventListener('click', () => {
    
    enable = true;
});

stopBtn.addEventListener('click', () => {
    enable = false;
});

container.addEventListener('dblclick', () => {
    
    enable = true;
});

container.addEventListener('click', () => {
    enable = false;
})

input.addEventListener('click', () => {
    container.innerHTML = '';
    number = document.getElementById('number').value;
});
