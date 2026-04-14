const formulario=document.querySelector('#formulario');

function validarFormulario(event) {
     event.preventDefault();
 
const nome = document.querySelector('#nome').value;
const email = document.querySelector('#email').value;
const msg = document.querySelector('#msg').value;

if (nome === ""|| email === "" || msg === "") {
          alert("Por favor, preenche todos os campos antes de enviar.");
    } else {
          alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
     }
}
 
formulario.addEventListener('submit', validarFormulario);


    const btnTema = document.querySelector('#btn-tema');
    const body = document.body;

        function alternarTema() {
       body.classList.toggle('dark-theme');

       
        if (body.classList.contains('dark-theme')) {
            btnTema.innerText = "☀️";
            } else {
                btnTema.innerText = "🌙";
            }
        }
        btnTema.addEventListener('click', alternarTema);
         
        const meusProjetos = [
            {
                título: "Projeto 01 - Cine Top",
                descriçao: "Site que mostra a lista dos filmes mais assistidos do momento com uma breve descrição de cada um.",
                link: "https://github.com/rosianesalesweb/Portfpolio-html-css-js"
            },
            {
                título: "Projeto 02 - Portfólio",
                descriçao: "Meu portfólio de apresentação feito com HTML, CSS e JavaScript.",
                link: "  https://github.com/rosianesalesweb/Portfpolio-html-css-js"
            },
            {
                título:"Projeto 03 - Boutique de Mimos (Moda e Beleza)",
                descriçao: " Uma vitrine virtual ficticia de perfumes, maquiagens e acessórios femininos, para praticar o visual de uma loja online.",
                link:"  https://github.com/rosianesalesweb/Portfpolio-html-css-js"    
            }
            ];

            
            function renderizarProjetos() {
                const container = document.querySelector('.projetos-container');

                container.innerHTML = "";

                meusProjetos.forEach(projeto => {
                    const cardHTML = `
                    <article class="card-projeto">
                    <h3>${projeto.título}</h3>
                    <p>${projeto.descriçao}</p>
                    <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
                    </article>
                    `;
                    container.innerHTML += cardHTML;
                    });
            }

            renderizarProjetos ();















   