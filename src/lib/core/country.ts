import { store } from '../support/store';
import type {CountryRow} from "../model/country";

export const countriesStore = store<CountryRow[] | undefined>(undefined); // start with no menu