const consoleLog = document.querySelector('#consoleLog')

consoleLog.addEventListener('click', () => {
    alert("Служит для вывода информации в консоль")
})

const alerting = document.querySelector('#alert')

alerting.addEventListener('click', () => {
    alert("Служит для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»")
})

const prompting = document.querySelector('#prompt')

prompting.addEventListener('click', () => {
    alert("Служит для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена».")
})