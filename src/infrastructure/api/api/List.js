/* eslint-disable import/no-unresolved */
// @flow
import APIHandler from '../APIHandler';
import * as Globals from '../../../application/common/Globals';

export default {
  getListData: (param) => APIHandler.get(`${Globals.PokemonList}${param}`),
  getPokemonDetails: (param) => APIHandler.get(`${Globals.PokemonList}${param}`),
};
