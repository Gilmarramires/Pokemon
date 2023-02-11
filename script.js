const app = new Vue({
    el: "#app",
    data: {
      pokemonNameId: "",
      pokemon: null,
      error: null,
      loading: false,
      pokemonImagem: ""
    },
    methods: {
      async searchPokemon() {
        this.loading = true;
        this.error = null;
        this.pokemon = null;
        this.pokemonImagem = "";
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${this.pokemonNameId}`
          );
          this.pokemon = {
            name: response.data.name,
            types: response.data.types.map(t => t.type.name).join(","),
            abilities: response.data.abilities.map(a => a.ability.name).join(",")
          };
          this.pokemonImagem = await response.data.sprites.front_default;
        } catch (error) {
          this.error = "Você digitou o nome errado :(";
        }
        this.loading = false;
      }
    }
  });
  
  Vue.config.productionTip = false;

