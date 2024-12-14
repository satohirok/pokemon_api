$('#fetchButton').click(() => {
  const pokemonId = Math.floor(Math.random() * 151) + 1;
  const fetchJson = (url) => $.ajax({ url, dataType: 'json'});

  const fetchAndDisplayName = (speciesUrl) => {
    fetchJson(speciesUrl)
        .then((data) => {
          const name = data.names.find((name) => name.language.name === 'ja').name
          $('#pokemonName').text(name);
        })
  }

  fetchJson(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((data) => {
        console.log(data);
       
        fetchAndDisplayName(data.species.url);
        $('#pokemonImage').attr('src',data.sprites.front_default);
        // fetchAndDisplayTypes(data.types);
        // $('#pokemonWeight').text(`重さ: ${data.weight / 10} kg`);
      })
      .catch(() => console.error('ポケモンデータ取得エラーです'));
  console.log('これからAPIを取得します');
});
