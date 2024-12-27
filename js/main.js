const body = document.querySelector('body');
const sideber = document.querySelector('.sideber');
const toggle = document.querySelector('.sideberProfileClose');
const SearchBtn = document.querySelector('.sideberMenuSearch');
const modeSwtich = document.querySelector('.toggleSwitch');
const modeText = document.querySelector('.modeText');
const text = document.querySelector('.text')
const click = document.querySelector('.click')

click.addEventListener('click', () => {   
    sideber.classList.toggle('close') 
})
toggle.addEventListener('click', () => {   
    sideber.classList.toggle('close') 
})

modeSwtich.addEventListener('click', () => {
    body.classList.toggle('dark')  
    
    if(body.classList.contains('dark')){
        modeText.innerText = 'Light Mode'
    }else{
        modeText.innerText = 'Dark mode'
    }
})
