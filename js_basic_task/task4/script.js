const $elem = document.querySelector('.someText');
const link = document.querySelector('a')
$elem.addEventListener('click', function(Event){
    $elem.textContent = prompt('введите текст ссылки...');
    Event.preventDefault();
})
