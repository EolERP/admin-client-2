import { store } from '../support/store';
import type {TaxListPartsFragment} from "../graphql/generated";

export const taxesStore = store<TaxListPartsFragment[] | undefined>(undefined); // start with no menu