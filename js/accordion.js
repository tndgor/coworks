
const topics = document.querySelectorAll('.topic');

topics.forEach(function(topic){
  
    topic.addEventListener('click', function(event) {
        if(event.target.closest('.topic__btn')) {

            const isOpend = topic.classList.toggle('topic--open');

            const content = topic.querySelector('.topic__content');
            const img = topic.querySelector('.topic__icon');


            if(isOpend) {
                img.src = './img/faq/btn-minus.svg';
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                img.src = './img/faq/btn-plus.svg';
                content.style.maxHeight = 0;
            }
        }
    });
})