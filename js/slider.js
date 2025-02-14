const carouselSlide = document.querySelector('.slider');
const carouselImg = document.querySelectorAll('.slider img');

//Buttons
const PrevBtn = document.querySelector('#PrevBtn');
const NextBtn = document.querySelector('#NextBtn');

//Counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners
NextBtn.addEventListener('click', ()=>{
	if(counter >= carouselImg.length -1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

PrevBtn.addEventListener('click', () => {
	if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
	if(carouselImg[counter].id === 'lastclone'){
		carouselSlide.style.transition = "none";
		counter = carouselImg.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if(carouselImg[counter].id === 'firstclone'){
		carouselSlide.style.transition = "none";
		counter = carouselImg.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});