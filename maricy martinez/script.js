/*!
 * Copyright (c) 2022 Brad Traversy
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

document.addEventListener('DOMContentLoaded', () => {

  // Menu lateral
  document.querySelectorAll('.menu-lateral a').forEach(link => {
      link.addEventListener('click', function() {
          document.querySelector('.menu-lateral').classList.remove('open');
          document.querySelector('.imenu').style.opacity = '1';
      });
  });

  document.querySelector('.imenu').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.add('open');
      document.querySelector('.imenu').style.opacity = '1';
  });

  document.querySelector('.close-btn').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
  });

  // Função para verificar se um elemento está visível na tela
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Função para adicionar a classe de animação quando o elemento está visível na tela
  function toggleAnimation() {
      var textoDeslizante = document.querySelector('.texto-deslizante');
      if (isElementInViewport(textoDeslizante)) {
          textoDeslizante.classList.add('aparecer');
      }
  }

  // Adicionar evento de rolagem para ativar a função de alternância de animação
  window.addEventListener('scroll', toggleAnimation);
  // Chame a função para verificar se o elemento está visível quando a página for carregada
  toggleAnimation();

// Animação para os elementos com a classe 'animate'
const animateElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar o elemento após a animação
        }
    });
}, { threshold: 0.5 });

animateElements.forEach(element => {
    observer.observe(element);
});

  // Valores
  const valores = document.querySelectorAll('.valor');

  const observerValores = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observerValores.unobserve(entry.target); // Parar de observar após mostrar
          }
      });
  }, {
      threshold: 0.1
  });

  valores.forEach(valor => {
      observerValores.observe(valor);
  });

  // Contagem
  const counters = document.querySelectorAll('.counter');

  const updateCounter = (counter) => {
      counter.innerText = '0';
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;

      const incrementCounter = () => {
          const c = +counter.innerText;
          if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              requestAnimationFrame(incrementCounter);
          } else {
              counter.innerText = target;
          }
      };

      incrementCounter();
  };

  const observerCounters = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              updateCounter(counter);
              observer.unobserve(counter); // Desativar o observador após a atualização do contador
          }
      });
  }, { threshold: 0.1 });

  counters.forEach(counter => {
      observerCounters.observe(counter);
  });

});

//relatos
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Alexandre Carvalho',
    position: '',
    photo:
      '',
    text:
    "Pelo presente mensagem, venho agradecer a um exemplo de advogada, Dra Maricy, pelos serviços prestados com dedicação, desempenho e honestidade, caráter e profissionalismo de um gabarito enorme.Parabéns, Dra. E muito obrigada por tudo.",
  },
 
  {
    name: 'Elizabete Areias',
    position: '',
    photo: '',
    text:
    "Eu indiquei a Dra. Maricy para outras pessoas e amigos, minha advogada é muito boa com seus compromissos e muito dedicada no que faz.",
  },
  {
    name: 'André Silva',
    position: '',
    photo: '',
    text:
    "Minha advogada, Dra. Maricy executou um ótimo trabalho para mim. Eu a indico para meus amigos e conhecidos. Obrigada pelo seu ótimo trabalho e eficiência.",
  },
  {
    name: 'Genival Nery',
    position: '',
    photo: '',
    text:
    "Seu conhecimento jurídico é impressionante! É incrível como você consegue aplicar as leis de forma clara e precisa para obter resultados positivos. Sua habilidade em argumentar é admirável! Além de ser uma advogada talentosa, você é extremamente ética.",
  },
  {
    name: 'Marcelo Campos',
    position: '',
    photo: '',
    text:
    "Contratar a Dra. Maricy foi uma das melhores decisões que tomei para o meu caso trabalhista. Desde o primeiro contato, fui extremamente bem atendido, com uma comunicação clara e direta, o que me trouxe muita tranquilidade durante todo o processo. A atuação dela foi impecável, demonstrando profundo conhecimento das leis trabalhistas e uma dedicação exemplar. O resultado alcançado foi além das minhas expectativas, e eu não poderia estar mais satisfeito com o trabalho realizado. Recomendo a Dra. Maricy a todos que buscam uma Advogada profissional, competente e comprometida.",
  },
  {
    name: 'Fábio Guedes',
    position: '',
    photo: '',
    text:
    "Dr. Maricy gostaria de agradecer pelo excelente trabalho, todos os processos que eu e minha família colocamos em suas mãos foram concretizados com sucesso! Obrigado pelo profissionalismo.",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)



