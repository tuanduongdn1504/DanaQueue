import { get } from './utils';

export async function getIconCategoriesApi() {
  return get('/caseTypes/icons');
}
