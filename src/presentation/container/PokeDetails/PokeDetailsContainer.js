import { connect } from 'react-redux';
import PokeDetailsComponent from '../../component/PokeDetails/PokeDetailsComponent';

const mapStateToProps = ({ Pokemon, loading }) => ({
  pokemonDetails: Pokemon.pokemonDetails,
  loading: loading.effects.Pokemon.fetchPokemonList,
});

const mapDispatchToProps = ({
  Pokemon: {
    fetchPokemonDetails,
  }
}) => ({
  fetchPokemonDetails: () => fetchPokemonDetails()
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailsComponent);


