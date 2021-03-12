const card = document.querySelector('.card');
const container = document.querySelector('.container');

//item
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');




container.addEventListener("mousemove", (e) => {
    let xAxis = ((window.innerWidth / 2 - e.pageX)) / 25;
    let yAxis = ((window.innerHeight / 2 - e.pageY)) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate IN
container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(150px) rotateZ(-360deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(125px)';
    purchase.style.transform = 'translateZ(125px)';
})


//Animete OUT
container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'; description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})