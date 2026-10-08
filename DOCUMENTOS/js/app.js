const toggle = document.querySelector('#dark-mode-toggle');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    localStorage.setItem('theme', 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
});


const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('activo');
});


document.querySelectorAll('#menu a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); 
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
        
      
        menu.classList.remove('activo'); 
    });
});


const formulario = document.querySelector('#contacto form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;

   
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const boton = formulario.querySelector('button');
    const textoOriginal = boton.textContent;
    
    boton.textContent = '¡Mensaje Enviado!';
    boton.style.backgroundColor = '#28a745'; 
    boton.style.color = '#fff';
    

    formulario.reset();

  
    setTimeout(() => {
        boton.textContent = textoOriginal;
        boton.style.backgroundColor = ''; 
        boton.style.color = '';
    }, 3000);
});