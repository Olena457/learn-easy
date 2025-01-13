import { createSelector } from '@reduxjs/toolkit';

export const selectFilters = state => state.filters;

export const selectLanguages = createSelector(
  [selectFilters],
  filters => filters.languages
);

export const selectLevels = createSelector(
  [selectFilters],
  filters => filters.levels
);

export const selectPrices = createSelector(
  [selectFilters],
  filters => filters.prices
);
