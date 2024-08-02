import type {AddressRow} from "../model/address";

export const addressOneLiner = (address: AddressRow | undefined | null) =>
    address
        ? `${address.line1}, ${address.country.isoCode}-${address.zipCode} ${address.city}`
        : '';

export const addressService = {
    getDetailSafeEntity: (): AddressRow => {
        return { country: {} } as any;
    },
};
