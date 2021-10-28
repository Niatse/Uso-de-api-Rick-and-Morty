const app = document.querySelector
('#app');

fetch(
    'https://rickandmortyapi.com/api/character'
)


.then(response => response.json())
.then(data => {
    const characters = data.results;
    for (const oneCharacter of characters)
    {
        const htmlStructure = `
        <div class="character-box">
        <h2>
          ${oneCharacter.name}
        </h2>
        
        <img
        src="${oneCharacter.image}"</img>

        <p>
         <b>Status:</b>
         ${oneCharacter.status}
        </p>

        <p>
         <b>Especie:</b>
         ${oneCharacter.species}
        </p>

        <p>
         <b>Genero:</b>
         ${oneCharacter.gender}
        </p>
        </div>
        `;
        
        app.insertAdjacentHTML(
            'beforeend',
            htmlStructure
        )
    }
})
