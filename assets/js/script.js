const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const sliderList = document.querySelector('#slider__list');

let state = 0;
next.addEventListener('click', () =>{
    state = (state + 1) % sliderList.children.length;
    sliderList.style.setProperty('--x', state);
    prevDot.classList.remove('current')
    dots[state].classList.add('current')
});

prev.addEventListener('click', () =>{
    if (state===0){
        state = sliderList.children.length - 1;
    }else{
        state--;
    }
    sliderList.style.setProperty('--x', state);
});
let prevDot = null;

for (let i = 0; i<sliderList.children.length; i++){
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    dot.dataset.index = i;
    
    if (i === state){
        dot.classList.add('current');
    }
    dots.append(dot);
    dot.addEventListener('click', () => {
        prevDot?.classList.remove('current');
        dot.classList.add('current');
        prevDot = dot;
        state = i; 
        sliderList.style.setProperty('--x', state);
    })
}
