import { connect } from 'react-redux';
import PokemonListComponent from '../../component/Pokemon/PokemonListComponent';

const mapStateToProps = ({ Pokemon, loading }) => ({
  pokemonList: Pokemon.pokemonList,
  loading: loading.effects.Pokemon.fetchPokemonList,
});

const mapDispatchToProps = ({
  Pokemon: {
    fetchPokemonList,
    setPokemonSearch,
    fetchPokemonListSearch,
  }
}) => ({
  fetchPokemonList: () => fetchPokemonList(),
  setPokemonSearch: (s) => setPokemonSearch(s),
  fetchPokemonListSearch: () => fetchPokemonListSearch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListComponent);


