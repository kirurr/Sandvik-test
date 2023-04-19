const about = [document.querySelector('.about-text-anim'), document.querySelector('.about-img-anim')];

const aboutOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-100px'
};

const aboutObserver = new IntersectionObserver(function(entry, observer) 
{
  entry.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('show-anim');
      aboutObserver.unobserve(item.target);
    }
  });
},aboutOptions);

about.forEach(item => {
  aboutObserver.observe(item);
});



const panels = [document.querySelector('.panels-first-row'), document.querySelector('.panels-second-row')];

const panelsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-100px'
};

const panelsObserver = new IntersectionObserver(function(entry, observer) 
{
  entry.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('show-anim');
      panelsObserver.unobserve(item.target);
    }
  });
},panelsOptions);

panels.forEach(item => {
  panelsObserver.observe(item);
});