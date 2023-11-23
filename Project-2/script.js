document.addEventListener('DOMContentLoaded', function() {
    const types = [...new Set(pokedex.flatMap(pokemon => pokemon.type))].sort();
    const typeStats = initializeTypeStats(types);
    const pokedexContainer = document.getElementById('pokedex');
    createTypeSections(pokedexContainer, types);
    createTypeNavigation(types); 

    const pokemonCardsByType = initializePokemonCardsByType(types);

    pokedex.forEach(pokemon => {
        pokemon.type.forEach(type => {
            const pokemonCard = createPokemonCard(pokemon);
            pokemonCardsByType[type].push(pokemonCard);
            updateTypeStats(typeStats, type, pokemon);
        });
    });

    appendSortedPokemonCards(pokemonCardsByType);
    updateTypeInfos(types, typeStats);
    updateTypeHeadings(types, typeStats);
});

function createTypeNavigation(types) {
    const navBar = document.getElementById('type-nav');
    types.forEach(type => {
        const navItem = document.createElement('a');
        navItem.href = `#${type}`;
        navItem.textContent = type;
        navBar.appendChild(navItem);
    });
}

function initializeTypeStats(types) {
    const typeStats = {};
    types.forEach(type => {
        typeStats[type] = { count: 0, totalHP: 0, totalAttack: 0, totalDefense: 0, totalSpAttack: 0, totalSpDefense: 0, totalSpeed: 0 };
    });
    return typeStats;
}

function createTypeSections(container, types) {
    types.forEach(type => {
        const section = document.createElement('section');
        section.classList.add('section');
        section.id = type;
        section.innerHTML = `
            <h2>Type: ${type} (<span id="count-${type}"></span>)</h2>
            <div class="type-info"></div>
            <div class="pokemon-container"></div>
        `;
        container.appendChild(section);
    });
}

function createPokemonCard(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    // Add an event listener to open the Pokémon's URL in a new tab
    pokemonCard.addEventListener('click', () => {
        window.open(pokemon.url, '_blank');
    });

    // Create and append h3 element for the name
    const name = document.createElement('h3');
    name.textContent = pokemon.name;
    pokemonCard.appendChild(name);

    // Create and append the image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('pokemon-image-container');
    const img = document.createElement('img');
    img.src = pokemon.sprite;
    img.alt = pokemon.name;
    imgContainer.appendChild(img);
    pokemonCard.appendChild(imgContainer);

    // Create and append stats container
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');
    statsContainer.innerHTML = `
    <div class="stat"><strong>HP:&nbsp;</strong>   ${pokemon.base.HP}</div>
    <div class="stat"><strong>Attack:&nbsp;</strong> ${pokemon.base.Attack}</div>
    <div class="stat"><strong>Defense:&nbsp;</strong> ${pokemon.base.Defense}</div>
    <div class="stat"><strong>Sp. Attack:&nbsp;</strong> ${pokemon.base['Sp. Attack']}</div>
    <div class="stat"><strong>Sp. Defense:&nbsp;</strong> ${pokemon.base['Sp. Defense']}</div>
    <div class="stat"><strong>Speed:&nbsp;</strong> ${pokemon.base.Speed}</div>
    `;
    pokemonCard.appendChild(statsContainer);

    return pokemonCard;
}

function updateTypeStats(typeStats, type, pokemon) {
    typeStats[type].count++;
    typeStats[type].totalHP += pokemon.base.HP;
    typeStats[type].totalAttack += pokemon.base.Attack;
    typeStats[type].totalDefense += pokemon.base.Defense;
    typeStats[type].totalSpAttack += pokemon.base['Sp. Attack'];
    typeStats[type].totalSpDefense += pokemon.base['Sp. Defense'];
    typeStats[type].totalSpeed += pokemon.base.Speed;
}

function updateTypeInfos(types, typeStats) {
    types.forEach(type => {
        const stats = typeStats[type];
        const typeInfo = document.querySelector(`#${type} .type-info`);
        
        // Update the type info text
        typeInfo.textContent = `Total HP: ${stats.totalHP} | Total Attack: ${stats.totalAttack}`;

        // Create and append the "Back to Top" link
        const backToTopLink = document.createElement('a');
        backToTopLink.href = '#top';
        backToTopLink.textContent = 'Back to Top';
        backToTopLink.classList.add('back-to-top');

        // Append the link after the type info
        typeInfo.parentNode.insertBefore(backToTopLink, typeInfo.nextSibling);
    });
}

function updateTypeHeadings(types, typeStats) {
    types.forEach(type => {
        const headingCount = document.getElementById(`count-${type}`);
        if (headingCount) {
            headingCount.textContent = typeStats[type].count;
        }
    });
}

function initializePokemonCardsByType(types) {
    let pokemonCardsByType = {};
    types.forEach(type => pokemonCardsByType[type] = []);
    return pokemonCardsByType;
}

function appendSortedPokemonCards(pokemonCardsByType) {
    for (let type in pokemonCardsByType) {
        let cards = pokemonCardsByType[type];
        cards.sort((a, b) => {
            let nameA = a.querySelector('h3').textContent;
            let nameB = b.querySelector('h3').textContent;
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });
        cards.forEach(card => document.querySelector(`#${type} .pokemon-container`).appendChild(card));
    }
}

function createPokemonCard(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    // Add an event listener to open the Pokémon's URL in a new tab
    pokemonCard.addEventListener('click', () => {
        window.open(pokemon.url, '_blank');
    });

    // Create and append h3 element for the name
    const name = document.createElement('h3');
    name.textContent = pokemon.name;
    pokemonCard.appendChild(name);

    // Create and append the image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('pokemon-image-container');
    const img = document.createElement('img');
    img.src = pokemon.sprite;
    img.alt = pokemon.name;
    imgContainer.appendChild(img);
    pokemonCard.appendChild(imgContainer);

    // Create and append stats container
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');
    statsContainer.innerHTML = `
    <div class="stat"><strong>HP:&nbsp;</strong>   ${pokemon.base.HP}</div>
    <div class="stat"><strong>Attack:&nbsp;</strong> ${pokemon.base.Attack}</div>
    <div class="stat"><strong>Defense:&nbsp;</strong> ${pokemon.base.Defense}</div>
    <div class="stat"><strong>Sp. Attack:&nbsp;</strong> ${pokemon.base['Sp. Attack']}</div>
    <div class="stat"><strong>Sp. Defense:&nbsp;</strong> ${pokemon.base['Sp. Defense']}</div>
    <div class="stat"><strong>Speed:&nbsp;</strong> ${pokemon.base.Speed}</div>
    `;
    pokemonCard.appendChild(statsContainer);

    return pokemonCard;
}
