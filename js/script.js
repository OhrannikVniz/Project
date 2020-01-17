$( '.order-button').click( function() {
    window.alert('Увага! Для замовлення 3D друку необхідно надати файли формату .STL або .WRL, або ж замовити 3D-моделювання');
    location.href = 'order.html';
});

const clockContainer = document.querySelector(".clock");
setInterval(
  () => (clockContainer.innerText = new Date().toLocaleTimeString()),
  1000
);
