import { createBlacklistFilter } from 'redux-persist-transform-filter';

const pokemonFilter = createBlacklistFilter('Pokemon', ['totalTasks']);

export const AllFilters = [pokemonFilter];
