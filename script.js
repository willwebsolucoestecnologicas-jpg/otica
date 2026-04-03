const slider = document.getElementById('slider');
const imgSobreposta = document.getElementById('img-sobreposta');
const container = document.querySelector('.simulador-container');

slider.addEventListener('input', (e) => {
  const valor = e.target.value;
  
  // Corta a imagem da frente revelando a de trás
  imgSobreposta.style.clipPath = `polygon(0 0, ${valor}% 0, ${valor}% 100%, 0 100%)`;
  
  // Move a linha branca divisória
  container.style.setProperty('--posicao-linha', `${valor}%`);
});

// Adicione isso no CSS para a linha se mover com o JS:
// .simulador-container::before { left: var(--posicao-linha, 50%); }