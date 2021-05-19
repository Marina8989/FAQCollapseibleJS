const blockBtn = document.querySelectorAll('.fa-chevron-down');
const btnTimes = document.querySelectorAll('.fa-times');
const answerBlock = document.querySelectorAll('.answer');

blockBtn.forEach(item => {
    item.addEventListener('click', () => {
         item.parentNode.classList.toggle('active');
         item.parentNode.parentNode.classList.toggle('active');
         item.parentNode.parentNode.classList.toggle('back');
    })
})