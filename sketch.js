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

    container.style.alignContent = 'flex-start';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    for (let j = 0; j < val; j++) {
        for (let i = 0; i < val; i++) {
            const box = document.createElement('div');

            box.style.width = boxsize + 'px';
            box.style.height = boxsize + 'px';

            // Desktop: mouseover event
            box.addEventListener('mouseover', () => {
                if (enable == false) return;
                if (multi == true) {
                    box.style.backgroundColor = color();
                } else {
                    box.style.backgroundColor = chooser;
                }
            });

            // Mobile: touchmove event
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

// Handle touchmove for continuous drawing on mobile
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

// Prevent default touch behavior on container
container.addEventListener('touchstart', (e) => {
    if (enable) {
        e.preventDefault();
    }
});

// Create mobile button
const mobileBtn = document.createElement('button');
mobileBtn.id = 'mobileDrawBtn';
mobileBtn.textContent = 'Start Drawing';
mobileBtn.style.display = 'none';
mobileBtn.style.padding = '15px 30px';
mobileBtn.style.fontSize = '16px';
mobileBtn.style.fontWeight = 'bold';
mobileBtn.style.margin = '10px';
mobileBtn.style.cursor = 'pointer';

// Insert button before container
container.parentNode.insertBefore(mobileBtn, container);

// Function to check screen size and show/hide button
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        mobileBtn.style.display = 'block';
    } else {
        mobileBtn.style.display = 'none';
    }
}

// Check on load and resize
checkScreenSize();
window.addEventListener('resize', checkScreenSize);

// Mobile button click event
mobileBtn.addEventListener('click', () => {
    grid();
    enable = true;
});

container.addEventListener('dblclick', () => {
    grid();
    enable = true;
});

container.addEventListener('click', () => {
    enable = false;
})

input.addEventListener('click', () => {
    container.innerHTML = '';
    number = document.getElementById('number').value;
});
