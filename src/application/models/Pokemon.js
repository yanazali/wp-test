import { List } from '../../infrastructure/api/api';
export const Pokemon = {
  state: {
    pokemonList: [],
    pokemonDetails: {},
    pokemonName: "",
    pokemonSearch: "",
    loadMore: "",
    totalTasks: 3,
    offset: 0
  },
  reducers: {
    setPokemonList(state, payload) {
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...payload],
        // pokemonList: payload
      };
    },
    clearPokemonList(state, payload) {
      return {
        ...state,
        pokemonList: [],
      };
    },
    setPokemonDetails(state, payload) {
      return {
        ...state,
        pokemonDetails: payload,
      };
    },
    setPokemonName(state, payload) {
      return {
        ...state,
        pokemonName: payload,
      };
    },
    setPokemonSearch(state, payload) {
      return {
        ...state,
        pokemonSearch: payload,
      };
    },
    setLoadMore(state, payload) {
      return {
        ...state,
        loadMore: payload,
      };
    },
    setOffset(state, payload) {
      return {
        ...state,
        offset: state.offset + parseInt(payload),
      };
    },
    setOffsetSearch(state, payload) {
      return {
        ...state,
        offset: parseInt(payload),
      };
    },
    clear() {
      return {
        arrBeneficiary: [],
      };
    },
  },
  effects: (dispatch) => ({
    async fetchPokemonList(payload, rootState) {
      try {
        const response = await List.getListData(`?limit=10&offset=${rootState.Pokemon.offset}`).toPromise();
        dispatch.Pokemon.setLoadMore(response.next);
        dispatch.Pokemon.setOffset(10);
        let res = "";
        if (rootState.Pokemon.pokemonSearch) {
          res = response.results.filter(item => {
            return item.name.toLowerCase().includes(rootState.Pokemon.pokemonSearch.toLowerCase())
          })
        } else {
          res = response.results;
        }

        dispatch.Pokemon.setPokemonList(res);

      } catch (error) {
        console.log('error', error);
      }
    },
    async fetchPokemonListSearch(payload, rootState) {
      dispatch.Pokemon.clearPokemonList();
      try {
        const response = await List.getListData(`?limit=10&offset=0`).toPromise();
        dispatch.Pokemon.setLoadMore(response.next);
        dispatch.Pokemon.setOffset(10);
        let res = "";
        if (rootState.Pokemon.pokemonSearch) {
          res = response.results.filter(item => {
            return item.name.toLowerCase().includes(rootState.Pokemon.pokemonSearch.toLowerCase())
          })
        } else {
          res = response.results;
        }
        dispatch.Pokemon.setPokemonList(res);

      } catch (error) {
        console.log('error', error);
      }
    },
    async fetchPokemonDetails(payload, rootState) {
      try {
        const response = await List.getPokemonDetails(`${rootState.Pokemon.pokemonName}`).toPromise();
        dispatch.Pokemon.setPokemonDetails(response);

      } catch (error) {
        console.log('error', error);
      }
    },
    setPokemonName(payload, rootState) {
      try {
        dispatch.Pokemon.setPokemonName(payload);

      } catch (error) {
        console.log('error', error);
      }
    },
    setPokemonSearch(payload, rootState) {
      try {
        dispatch.Pokemon.setPokemonSearch(payload);

      } catch (error) {
        console.log('error', error);
      }
    },
  }),
};
