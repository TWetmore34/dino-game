const character = document.querySelector('.character')
var block = document.querySelector('.block')

const jump = () => {
    if(character.classList !== 'animate'){
    character.classList.add('animate')
    
    setInterval(() => {
        character.classList.remove('animate')
    },500)
}}

var checkDead = () => { setInterval(() => {
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('you lose!');
    }
}, 10);

}