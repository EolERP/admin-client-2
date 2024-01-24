import { store } from '../support/store';
import type {CountryListPartsFragment} from "../graphql/generated";

export const countriesStore = store<CountryListPartsFragment[] | undefined>(undefined); // start with no menu