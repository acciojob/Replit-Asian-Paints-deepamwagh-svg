//your JS code here. If required.
const gridContainer = document.getElementById('grid-container');

for(let i = 1; i <= 9; i++){
const div = document.createElement('div');
div.className = 'grid-item';
div.id = i;
div.textContent = i;
gridContainer.appendChild(div);
}

const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('reset_button');

changeBtn.addEventListener('click', () => {
const blockId = document.getElementById('block_id').value;
const color = document.getElementById('colour_id').value;

document.querySelectorAll('.grid-item').forEach(item => {
item.style.background = 'transparent';
});

if(blockId >= 1 && blockId <= 9){
const box = document.getElementById(blockId);
box.style.background = color;
}
});

resetBtn.addEventListener('click', () => {
document.querySelectorAll('.grid-item').forEach(item => {
item.style.background = 'transparent';
});
});
