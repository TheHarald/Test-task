const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  
  function formatTitle(number, titles, type){
    let lastDigit = number % 10;
    let title = ''
    let num = ''
    if(lastDigit === 1) title = titles[0]
    if(lastDigit === 0 || (lastDigit > 4 && lastDigit < 10)) title = titles[1]
    if(lastDigit > 1 && lastDigit < 5) title = titles[2]
    if(number === 1){
      switch(type){
        case 'seconds':
          num = 'одна'
          break
        case 'minutes':
          num = 'одна'
          break
        case 'hours':
          num = 'один'
          break

      }
    }
    
    if(number === 0){
      switch(type){
        case 'seconds':
          num = 'ноль'
          break
        case 'minutes':
          num = 'ноль'
          break
        case 'hours':
          num = 'ноль'
          break
      }
    }

    if(number > 1)
    {
      num = number
    }
    return `${num} ${title}`
  }

  function formatTime(date){
      let secondsValue = date.getSeconds()
      let minutes = date.getMinutes()
      let hours = date.getHours()
      return `
        ${formatTitle(hours,['час', 'часов', 'часа'],'hours')},
        ${formatTitle(minutes,['минута', 'минут', 'минуты'],'minutes')},
        ${formatTitle(secondsValue,['секунда', 'секунд', 'секунды'],'seconds')}
      `
  }

  return (seconds) => {
    let date = new Date()
      timerEl.textContent = formatTime(date)
    let timerId = setInterval(()=>{
      date = new Date()
      timerEl.textContent = formatTime(date)
    }, seconds*1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
