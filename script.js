window.onload = () => {
  carregar();
};

function carregar() {
  const msg = document.querySelector('.mensagem');
  const msg2 = document.querySelector('.mensagem2');
  const img = document.querySelector('.img');
  const footer = document.querySelector('.footer');
  const date = new Date();
  const hora = date.getHours();
  const minute = date.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`;

  if (hora >= 0 && hora < 12) {
    msg2.textContent = 'Bom Dia!';
    img.src = './assets/photo_manha.png';
    document.body.style.backgroundImage =
      'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
  } else if (hora >= 12 && hora < 18) {
    msg2.textContent = 'Boa Tarde!';
    img.src = './assets/photo_tarde.png';
    document.body.style.backgroundImage =
      'linear-gradient(to right, #fa709a 0%, #fee140 100%)';
  } else {
    msg2.textContent = 'Boa Noite!';
    img.src = './assets/photo_noite.png';
    document.body.style.backgroundImage =
      'linear-gradient(to right, #434343 0%, black 100%)';
    footer.style.color = 'white';
  }
}
