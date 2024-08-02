import {store} from "../support/store";
import type {CustomerRow} from "../model/customer";

export const customersStore = store<CustomerRow[] | undefined>(undefined);