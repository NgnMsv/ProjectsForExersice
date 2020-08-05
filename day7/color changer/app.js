const colorChanger = document.querySelector('#color-changer')

colorChanger.addEventListener('click' , function () {
    var siteBody = document.querySelector('body');
    siteBody.classList.toggle('pink')
});
