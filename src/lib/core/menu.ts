import { writable } from 'svelte/store';
import { store } from '../support/store';
import type { MenuListPartsFragment } from '../graphql/generated';

export const menuStore = store<MenuListPartsFragment | undefined>(undefined); // start with no menu
export const profileMenuOpened = writable<boolean>(false);
