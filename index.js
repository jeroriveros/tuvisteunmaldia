const yesBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click',function () {
    alert('“Ríe cuando estés triste, llorar es demasiado fácil” -La Joaqui. JAdsjadsj beso y abrazo a la distancia bebita')
});

const noBtn = document.querySelector('#yesBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})