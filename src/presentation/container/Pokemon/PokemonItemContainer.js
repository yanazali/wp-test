import { connect } from 'react-redux';
import PokemonItemComponent from '../../component/Pokemon/PokemonItemComponent';

const mapStateToProps = ({ Pokemon, loading }) => ({
  loading: loading.effects.Pokemon.fetchPokemonList,
});

const mapDispatchToProps = ({
  Pokemon: {
    setPokemonName,
  }
}) => ({
  setPokemonName: (s) => setPokemonName(s)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItemComponent);