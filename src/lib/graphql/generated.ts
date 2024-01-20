import client from "../apollo-client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, MutationOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
  UniversalDateTime: { input: any; output: any; }
};

export type AccountingScheme = {
  __typename?: 'AccountingScheme';
  currency: Currency;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updtOp: User;
};

export type AccountingSchemeSaveArgs = {
  currencyId: Scalars['Int']['input'];
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Country;
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  line1: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
  zipCode: Scalars['String']['output'];
};

export type AddressSaveArgs = {
  city: Scalars['String']['input'];
  countryId: Scalars['Int']['input'];
  line1: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type Attachment = {
  __typename?: 'Attachment';
  contentType: Scalars['String']['output'];
  creationTime: Scalars['Date']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isFolder: Scalars['Boolean']['output'];
  lastModified: Scalars['Date']['output'];
  size: Scalars['Float']['output'];
};

export type AttachmentSaveArgs = {
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Bank = {
  __typename?: 'Bank';
  bankIdentifierCode: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  updtOp: User;
};

export type BankAccount = {
  __typename?: 'BankAccount';
  bank: Bank;
  bankAccountCustomerPrintableNumber: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  iban: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  swift: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type BankAccountSaveArgs = {
  bankAccountCustomerPrintableNumber: Scalars['String']['input'];
  bankId: Scalars['Float']['input'];
  displayName: Scalars['String']['input'];
  iban: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  swift: Scalars['String']['input'];
};

export type BankSaveArgs = {
  bankIdentifierCode: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type BaseSaveArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type CloudFile = {
  __typename?: 'CloudFile';
  contentMD5: Scalars['String']['output'];
  contentSHA1: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  creationTime: Scalars['Date']['output'];
  lastModified: Scalars['Date']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type CloudFolder = {
  __typename?: 'CloudFolder';
  prefix: Scalars['String']['output'];
};

export type ContactPerson = {
  __typename?: 'ContactPerson';
  contactPersonCompanyRelations?: Maybe<Array<ContactPersonCompanyRelation>>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type ContactPersonCompanyRelation = {
  __typename?: 'ContactPersonCompanyRelation';
  contactPerson: ContactPerson;
  customer: Customer;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  role: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type ContactPersonCompanyRelationSaveArgs = {
  contactPersonId: Scalars['Float']['input'];
  customerId: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive: Scalars['Boolean']['input'];
  role: Scalars['String']['input'];
};

export type ContactPersonSaveArgs = {
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName: Scalars['String']['input'];
};

export type Country = {
  __typename?: 'Country';
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  isoCode: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type CountrySaveArgs = {
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  isoCode: Scalars['String']['input'];
};

export type Currency = {
  __typename?: 'Currency';
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  isoCode: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type CurrencySaveArgs = {
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  isoCode: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Address>;
  contactPersonCompanyRelations?: Maybe<Array<ContactPersonCompanyRelation>>;
  customerGroup?: Maybe<CustomerGroup>;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  idNumber: Scalars['String']['output'];
  invoicingEmail: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  legalAddress: Address;
  legalName: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  publicNote?: Maybe<Scalars['String']['output']>;
  salesInvoices: Array<SalesInvoice>;
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
  vatNumber?: Maybe<Scalars['String']['output']>;
  www?: Maybe<Scalars['String']['output']>;
};

export type CustomerGroup = {
  __typename?: 'CustomerGroup';
  customerPriceLists?: Maybe<Array<CustomerPriceList>>;
  customers?: Maybe<Array<Customer>>;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type CustomerGroupSaveArgs = {
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerPriceList = {
  __typename?: 'CustomerPriceList';
  customerGroup: CustomerGroup;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  productPrices?: Maybe<Array<CustomerProductPrice>>;
  validFrom?: Maybe<Scalars['Date']['output']>;
  validTo?: Maybe<Scalars['Date']['output']>;
};

export type CustomerPriceListSaveArgs = {
  customerGroupDisplayName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  productPrices: Array<ProductPriceSaveArgs>;
  validFrom: Scalars['Date']['input'];
  validTo: Scalars['Date']['input'];
};

export type CustomerProductPrice = {
  __typename?: 'CustomerProductPrice';
  currency: Currency;
  id: Scalars['Int']['output'];
  product: Product;
  sellingPrice: Scalars['Float']['output'];
};

export type CustomerProductPriceSaveArgs = {
  currencyId: Scalars['Float']['input'];
  customerPriceListId: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Float']['input'];
  sellingPrice: Scalars['Float']['input'];
};

export type CustomerSaveArgs = {
  address?: InputMaybe<AddressSaveArgs>;
  customerGroupId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  idNumber: Scalars['String']['input'];
  invoicingEmail: Scalars['String']['input'];
  legalAddress: AddressSaveArgs;
  legalName: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNumberSequence = {
  __typename?: 'DocumentNumberSequence';
  current: Scalars['Float']['output'];
  forType: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updtOp: User;
};

export type FactoringContract = {
  __typename?: 'FactoringContract';
  customer: Customer;
  factoringProvider: FactoringProvider;
  id: Scalars['Int']['output'];
  invoicePrintNote: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  organization: Organization;
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type FactoringContractSaveArgs = {
  customerId: Scalars['Int']['input'];
  factoringProviderId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  invoicePrintNote: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
};

export type FactoringProvider = {
  __typename?: 'FactoringProvider';
  bankAccount: BankAccount;
  contact: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  legalName: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type FactoringProviderSaveArgs = {
  contact: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  legalName: Scalars['String']['input'];
  newBankAccount: BankAccountSaveArgs;
};

export type IdAndNumber = {
  id: Scalars['Float']['input'];
  value: Scalars['Float']['input'];
};

export type Menu = {
  __typename?: 'Menu';
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  items: Array<MenuItem>;
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  menu: Menu;
  to: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmSalesInvoice: SalesInvoice;
  createMonthlyInvoice: Array<SalesInvoice>;
  duplicateSalesInvoice: SalesInvoice;
  keepAlive: Scalars['UniversalDateTime']['output'];
  publishSalesInvoice: SalesInvoice;
  saveAccountingScheme: AccountingScheme;
  saveAttachment: Attachment;
  saveBank: Bank;
  saveContactPerson: ContactPerson;
  saveContactPersonCompanyRelation: ContactPersonCompanyRelation;
  saveCountry: Country;
  saveCurrency: Currency;
  saveCustomer: Customer;
  saveCustomerGroup: CustomerGroup;
  saveCustomerPriceList: CustomerPriceList;
  saveCustomerProductPrice: CustomerProductPrice;
  saveFactoringContract: FactoringContract;
  saveFactoringProvider: FactoringProvider;
  saveOrganization: Organization;
  saveProduct: Product;
  saveSalesInvoice: SalesInvoice;
};


export type MutationConfirmSalesInvoiceArgs = {
  args: BaseSaveArgs;
};


export type MutationCreateMonthlyInvoiceArgs = {
  args: SalesInvoiceMonthlySaveArgs;
};


export type MutationDuplicateSalesInvoiceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationPublishSalesInvoiceArgs = {
  args: SalesInvoicePublishArgs;
};


export type MutationSaveAccountingSchemeArgs = {
  args: AccountingSchemeSaveArgs;
};


export type MutationSaveAttachmentArgs = {
  args: AttachmentSaveArgs;
};


export type MutationSaveBankArgs = {
  args: BankSaveArgs;
};


export type MutationSaveContactPersonArgs = {
  args: ContactPersonSaveArgs;
};


export type MutationSaveContactPersonCompanyRelationArgs = {
  args: ContactPersonCompanyRelationSaveArgs;
};


export type MutationSaveCountryArgs = {
  args: CountrySaveArgs;
};


export type MutationSaveCurrencyArgs = {
  args: CurrencySaveArgs;
};


export type MutationSaveCustomerArgs = {
  args: CustomerSaveArgs;
};


export type MutationSaveCustomerGroupArgs = {
  args: CustomerGroupSaveArgs;
};


export type MutationSaveCustomerPriceListArgs = {
  args: CustomerPriceListSaveArgs;
};


export type MutationSaveCustomerProductPriceArgs = {
  args: CustomerProductPriceSaveArgs;
};


export type MutationSaveFactoringContractArgs = {
  args: FactoringContractSaveArgs;
};


export type MutationSaveFactoringProviderArgs = {
  args: FactoringProviderSaveArgs;
};


export type MutationSaveOrganizationArgs = {
  args: OrganizationSaveArgs;
};


export type MutationSaveProductArgs = {
  args: ProductSaveArgs;
};


export type MutationSaveSalesInvoiceArgs = {
  args: SalesInvoiceSaveArgs;
};

export type Organization = {
  __typename?: 'Organization';
  accountingScheme: AccountingScheme;
  bankAccount: BankAccount;
  contact: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  documentNumberSequences: DocumentNumberSequence;
  id: Scalars['Float']['output'];
  idNumber: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  legalAddress: Address;
  legalName: Scalars['String']['output'];
  registration: Scalars['String']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
  vatNumber?: Maybe<Scalars['String']['output']>;
};

export type OrganizationSaveArgs = {
  accountingSchemeId: Scalars['Int']['input'];
  contact: Scalars['String']['input'];
  currentInvoiceDocumentNumber: Scalars['Float']['input'];
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  idNumber: Scalars['String']['input'];
  legalAddress: AddressSaveArgs;
  legalName: Scalars['String']['input'];
  newBankAccount: BankAccountSaveArgs;
  registration: Scalars['String']['input'];
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  customerProductPrices?: Maybe<Array<CustomerProductPrice>>;
  defaultUoM?: Maybe<UnitOfMeasurement>;
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  updtOp: User;
};

export type ProductPriceSaveArgs = {
  currencyId: Scalars['Float']['input'];
  productId: Scalars['Float']['input'];
  sellingPrice: Scalars['Float']['input'];
};

export type ProductSaveArgs = {
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  sku: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  accountingScheme: AccountingScheme;
  accountingSchemes: Array<AccountingScheme>;
  attachment: Attachment;
  attachments: Array<Attachment>;
  bank: Bank;
  banks: Array<Bank>;
  contactPerson: ContactPerson;
  contactPersonCompanyRelation: ContactPersonCompanyRelation;
  contactPersonCompanyRelations: Array<ContactPersonCompanyRelation>;
  contactPersons: Array<ContactPerson>;
  countries: Array<Country>;
  country: Country;
  currencies: Array<Currency>;
  currency: Currency;
  customer: Customer;
  customerGroup: CustomerGroup;
  customerGroups: Array<CustomerGroup>;
  customerPriceList: CustomerPriceList;
  customerPriceLists: Array<CustomerPriceList>;
  customerProductPrice: CustomerProductPrice;
  customerProductPrices: Array<CustomerProductPrice>;
  customers: Array<Customer>;
  customersByArgs: Array<Customer>;
  factoringContract: FactoringContract;
  factoringContracts: Array<FactoringContract>;
  factoringProvider: FactoringProvider;
  factoringProviders: Array<FactoringProvider>;
  factoringProvidersForInvoice: Array<FactoringProvider>;
  mailSentFrom: Scalars['String']['output'];
  menu: Array<Menu>;
  now: Scalars['UniversalDateTime']['output'];
  organization: Organization;
  organizations: Array<Organization>;
  product: Product;
  products: Array<Product>;
  salesInvoice: SalesInvoice;
  salesInvoices: Array<SalesInvoice>;
  salesInvoicesReport: Array<SalesInvoicesInTime>;
};


export type QueryAccountingSchemeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAttachmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryBankArgs = {
  id: Scalars['Int']['input'];
};


export type QueryContactPersonArgs = {
  id: Scalars['Int']['input'];
};


export type QueryContactPersonCompanyRelationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCountryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCurrencyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomerGroupArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomerPriceListArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomerProductPriceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomersByArgsArgs = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  legalName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFactoringContractArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFactoringProviderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFactoringProvidersForInvoiceArgs = {
  args: FactoringContractSaveArgs;
};


export type QueryOrganizationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySalesInvoiceArgs = {
  id: Scalars['Int']['input'];
};

export type SalesInvoice = {
  __typename?: 'SalesInvoice';
  bankAccount: BankAccount;
  currency: Currency;
  currencyMultiplyingRateToAccountingSchemeCurrency: Scalars['Float']['output'];
  customer: Customer;
  documentNo?: Maybe<Scalars['String']['output']>;
  dueDate: Scalars['Date']['output'];
  factoringProvider?: Maybe<FactoringProvider>;
  grandTotal: Scalars['Float']['output'];
  grandTotalAccountingSchemeCurrency: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCalculated: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  isDraft: Scalars['Boolean']['output'];
  issuedOn: Scalars['Date']['output'];
  lines: Array<SalesInvoiceLine>;
  organization: Organization;
  paymentTermInDays: Scalars['Float']['output'];
  printDate?: Maybe<Scalars['Date']['output']>;
  printError?: Maybe<Scalars['String']['output']>;
  printLanguageIsoCode: Scalars['String']['output'];
  printNote?: Maybe<Scalars['String']['output']>;
  printed: Scalars['Boolean']['output'];
  reverseCharge: Scalars['Boolean']['output'];
  totalLines: Scalars['Float']['output'];
  totalLinesAccountingSchemeCurrency: Scalars['Float']['output'];
  transactionDate: Scalars['Date']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
  vatReport: Array<SalesInvoiceVat>;
};

export type SalesInvoiceLine = {
  __typename?: 'SalesInvoiceLine';
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  lineOrder: Scalars['Float']['output'];
  linePrice: Scalars['Float']['output'];
  narration: Scalars['String']['output'];
  product: Product;
  quantity: Scalars['Float']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
};

export type SalesInvoiceLineSaveArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lineOrder: Scalars['Float']['input'];
  linePrice: Scalars['Float']['input'];
  lineTaxId?: InputMaybe<Scalars['Float']['input']>;
  lineTaxIsStandard: Scalars['Boolean']['input'];
  narration: Scalars['String']['input'];
  productId: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

export type SalesInvoiceMonthlySaveArgs = {
  dailyRate: Scalars['Float']['input'];
  day: Scalars['Int']['input'];
  eurToCzkRate: Scalars['Float']['input'];
  month: Scalars['Int']['input'];
  narration: Scalars['String']['input'];
  organizationDivider: Array<IdAndNumber>;
  totalHours: Scalars['Float']['input'];
  year: Scalars['Int']['input'];
};

export type SalesInvoicePublishArgs = {
  attachmentIds: Array<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

export type SalesInvoiceSaveArgs = {
  currencyId: Scalars['Int']['input'];
  customerId: Scalars['Int']['input'];
  factoringProviderId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  issuedOn: Scalars['Date']['input'];
  lines: Array<SalesInvoiceLineSaveArgs>;
  organizationId: Scalars['Int']['input'];
  paymentTermInDays: Scalars['Int']['input'];
  transactionDate: Scalars['Date']['input'];
};

export type SalesInvoiceVat = {
  __typename?: 'SalesInvoiceVat';
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  updtOp: User;
  updtTs: Scalars['UniversalDateTime']['output'];
  vatRatePercent: Scalars['Float']['output'];
  vatTotal: Scalars['Float']['output'];
  vatTotalAccountingSchemeCurrency: Scalars['Float']['output'];
  vatTotalAccountingSchemeCurrencyRaw: Scalars['Float']['output'];
  vatTotalRaw: Scalars['Float']['output'];
};

export type SalesInvoicesInTime = {
  __typename?: 'SalesInvoicesInTime';
  date: Scalars['String']['output'];
  group: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type UnitOfMeasurement = {
  __typename?: 'UnitOfMeasurement';
  conversionRates: Array<UnitOfMeasurementConversion>;
  conversionRates2: Array<UnitOfMeasurementConversion>;
  displayName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  updtOp: User;
};

export type UnitOfMeasurementConversion = {
  __typename?: 'UnitOfMeasurementConversion';
  from: UnitOfMeasurement;
  id: Scalars['Float']['output'];
  to: UnitOfMeasurement;
  unitMultiplyingRate: Scalars['Float']['output'];
  updtOp: User;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isCurrent: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updtOpId: Scalars['Float']['output'];
  updtTs: Scalars['UniversalDateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type AccountingSchemeDetailPartsFragment = { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } };

export type AccountingSchemeListPartsFragment = { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } };

export type AccountingSchemeByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AccountingSchemeByIdQuery = { __typename?: 'Query', accountingScheme: { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } } };

export type AccountingSchemesQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountingSchemesQuery = { __typename?: 'Query', accountingSchemes: Array<{ __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }> };

export type AddressListPartsFragment = { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } };

export type AttachmentListPartsFragment = { __typename?: 'Attachment', id: string, displayName: string, isFolder: boolean, size: number, lastModified: any };

export type AttachmentDetailPartsFragment = { __typename?: 'Attachment', id: string, displayName: string, isFolder: boolean, size: number, lastModified: any };

export type AttachmentByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type AttachmentByIdQuery = { __typename?: 'Query', attachment: { __typename?: 'Attachment', id: string, displayName: string, isFolder: boolean, size: number, lastModified: any } };

export type AttachmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AttachmentsQuery = { __typename?: 'Query', attachments: Array<{ __typename?: 'Attachment', id: string, displayName: string, isFolder: boolean, size: number, lastModified: any }> };

export type BankAccountDetailPartsFragment = { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } };

export type BankAccountListPartsFragment = { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } };

export type BankDetailPartsFragment = { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string };

export type BankListPartsFragment = { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string };

export type BankByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type BankByIdQuery = { __typename?: 'Query', bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } };

export type BanksQueryVariables = Exact<{ [key: string]: never; }>;


export type BanksQuery = { __typename?: 'Query', banks: Array<{ __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string }> };

export type ConfirmSalesInvoiceMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ConfirmSalesInvoiceMutation = { __typename?: 'Mutation', confirmSalesInvoice: { __typename?: 'SalesInvoice', documentNo?: string | null, dueDate: any, grandTotal: number, grandTotalAccountingSchemeCurrency: number, id: number, isActive: boolean, isCalculated: boolean, isCurrent: boolean, isDraft: boolean, issuedOn: any, paymentTermInDays: number, printDate?: any | null, printed: boolean, printError?: string | null, printLanguageIsoCode: string, reverseCharge: boolean, totalLines: number, totalLinesAccountingSchemeCurrency: number, transactionDate: any, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string }, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, lines: Array<{ __typename?: 'SalesInvoiceLine', id: number, lineOrder: number, linePrice: number, narration: string, quantity: number, product: { __typename?: 'Product', id: number } }>, organization: { __typename?: 'Organization', id: number, displayName: string, legalName: string, registration: string, contact: string, idNumber: string, vatNumber?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } }, accountingScheme: { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }, documentNumberSequences: { __typename?: 'DocumentNumberSequence', current: number } }, vatReport: Array<{ __typename?: 'SalesInvoiceVat', id: number, vatRatePercent: number, vatTotal: number, vatTotalAccountingSchemeCurrency: number, vatTotalAccountingSchemeCurrencyRaw: number, vatTotalRaw: number }>, factoringProvider?: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } | null } };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', id: number, displayName: string, isoCode: string }> };

export type CountryDetailPartsFragment = { __typename?: 'Country', id: number, displayName: string, isoCode: string };

export type CountryListPartsFragment = { __typename?: 'Country', id: number, displayName: string, isoCode: string };

export type CountryByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CountryByIdQuery = { __typename?: 'Query', country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } };

export type CurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrenciesQuery = { __typename?: 'Query', currencies: Array<{ __typename?: 'Currency', id: number, isoCode: string, displayName: string }> };

export type CurrencyDetailPartsFragment = { __typename?: 'Currency', id: number, displayName: string, isoCode: string };

export type CurrencyListPartsFragment = { __typename?: 'Currency', id: number, isoCode: string, displayName: string };

export type CurrencyByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CurrencyByIdQuery = { __typename?: 'Query', currency: { __typename?: 'Currency', id: number, displayName: string, isoCode: string } };

export type CustomerDetailPartsFragment = { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, idNumber: string, invoicingEmail: string, note?: string | null, www?: string | null, publicNote?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null, customerGroup?: { __typename?: 'CustomerGroup', id: number, displayName: string, customers?: Array<{ __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }> | null, customerPriceLists?: Array<{ __typename?: 'CustomerPriceList', id: number, displayName: string, validFrom?: any | null, validTo?: any | null, productPrices?: Array<{ __typename?: 'CustomerProductPrice', id: number, sellingPrice: number, product: { __typename?: 'Product', id: number, sku: string, displayName: string }, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }> | null }> | null } | null };

export type CustomerListPartsFragment = { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null };

export type CustomerByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CustomerByIdQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, idNumber: string, invoicingEmail: string, note?: string | null, www?: string | null, publicNote?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null, customerGroup?: { __typename?: 'CustomerGroup', id: number, displayName: string, customers?: Array<{ __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }> | null, customerPriceLists?: Array<{ __typename?: 'CustomerPriceList', id: number, displayName: string, validFrom?: any | null, validTo?: any | null, productPrices?: Array<{ __typename?: 'CustomerProductPrice', id: number, sellingPrice: number, product: { __typename?: 'Product', id: number, sku: string, displayName: string }, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }> | null }> | null } | null } };

export type CustomerPriceListPartsFragment = { __typename?: 'CustomerPriceList', id: number, displayName: string, validFrom?: any | null, validTo?: any | null, productPrices?: Array<{ __typename?: 'CustomerProductPrice', id: number, sellingPrice: number, product: { __typename?: 'Product', id: number, sku: string, displayName: string }, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }> | null };

export type CustomerProductPriceListPartsFragment = { __typename?: 'CustomerProductPrice', id: number, sellingPrice: number, product: { __typename?: 'Product', id: number, sku: string, displayName: string }, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } };

export type CustomerGroupDetailPartsFragment = { __typename?: 'CustomerGroup', id: number, displayName: string, customers?: Array<{ __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }> | null, customerPriceLists?: Array<{ __typename?: 'CustomerPriceList', id: number, displayName: string, validFrom?: any | null, validTo?: any | null, productPrices?: Array<{ __typename?: 'CustomerProductPrice', id: number, sellingPrice: number, product: { __typename?: 'Product', id: number, sku: string, displayName: string }, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }> | null }> | null };

export type CustomerGroupListPartsFragment = { __typename?: 'CustomerGroup', id: number, displayName: string };

export type CustomerGroupByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CustomerGroupByIdQuery = { __typename?: 'Query', customerGroup: { __typename?: 'CustomerGroup', id: number, displayName: string, customers?: Array<{ __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }> | null, customerPriceLists?: Array<{ __typename?: 'CustomerPriceList', id: number, displayName: string, validFrom?: any | null, validTo?: any | null, productPrices?: Array<{ __typename?: 'CustomerProductPrice', id: number, sellingPrice: number, product: { __typename?: 'Product', id: number, sku: string, displayName: string }, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }> | null }> | null } };

export type CustomerGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerGroupsQuery = { __typename?: 'Query', customerGroups: Array<{ __typename?: 'CustomerGroup', id: number, displayName: string }> };

export type CustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomersQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }> };

export type FactoringContractDetailPartsFragment = { __typename?: 'FactoringContract', id: number, invoicePrintNote: string, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, organization: { __typename?: 'Organization', contact: string, displayName: string, id: number, idNumber: string, legalName: string, registration: string, vatNumber?: string | null }, factoringProvider: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } };

export type FactoringContractListPartsFragment = { __typename?: 'FactoringContract', id: number, invoicePrintNote: string, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, organization: { __typename?: 'Organization', contact: string, displayName: string, id: number, idNumber: string, legalName: string, registration: string, vatNumber?: string | null }, factoringProvider: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } };

export type FactoringContractByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FactoringContractByIdQuery = { __typename?: 'Query', factoringContract: { __typename?: 'FactoringContract', id: number, invoicePrintNote: string, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, organization: { __typename?: 'Organization', contact: string, displayName: string, id: number, idNumber: string, legalName: string, registration: string, vatNumber?: string | null }, factoringProvider: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } } };

export type FactoringContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type FactoringContractsQuery = { __typename?: 'Query', factoringContracts: Array<{ __typename?: 'FactoringContract', id: number, invoicePrintNote: string, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, organization: { __typename?: 'Organization', contact: string, displayName: string, id: number, idNumber: string, legalName: string, registration: string, vatNumber?: string | null }, factoringProvider: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } }> };

export type FactoringProviderDetailPartsFragment = { __typename?: 'FactoringProvider', id: number, displayName: string, legalName: string, contact: string, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } } };

export type FactoringProviderListPartsFragment = { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string };

export type FactoringProviderByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FactoringProviderByIdQuery = { __typename?: 'Query', factoringProvider: { __typename?: 'FactoringProvider', id: number, displayName: string, legalName: string, contact: string, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } } } };

export type FactoringProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type FactoringProvidersQuery = { __typename?: 'Query', factoringProviders: Array<{ __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string }> };

export type MailSentFromQueryVariables = Exact<{ [key: string]: never; }>;


export type MailSentFromQuery = { __typename?: 'Query', mailSentFrom: string };

export type MenuQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuQuery = { __typename?: 'Query', menu: Array<{ __typename?: 'Menu', id: number, displayName: string, items: Array<{ __typename?: 'MenuItem', id: number, to: string, displayName: string }> }> };

export type MenuListPartsFragment = { __typename?: 'Menu', id: number, displayName: string, items: Array<{ __typename?: 'MenuItem', id: number, to: string, displayName: string }> };

export type MenuItemListPartsFragment = { __typename?: 'MenuItem', id: number, to: string, displayName: string };

export type OrganizationDetailPartsFragment = { __typename?: 'Organization', id: number, displayName: string, legalName: string, registration: string, contact: string, idNumber: string, vatNumber?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } }, accountingScheme: { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }, documentNumberSequences: { __typename?: 'DocumentNumberSequence', current: number } };

export type OrganizationListPartsFragment = { __typename?: 'Organization', contact: string, displayName: string, id: number, idNumber: string, legalName: string, registration: string, vatNumber?: string | null };

export type OrganizationByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type OrganizationByIdQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: number, displayName: string, legalName: string, registration: string, contact: string, idNumber: string, vatNumber?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } }, accountingScheme: { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }, documentNumberSequences: { __typename?: 'DocumentNumberSequence', current: number } } };

export type OrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationsQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', contact: string, displayName: string, id: number, idNumber: string, legalName: string, registration: string, vatNumber?: string | null }> };

export type ProductDetailPartsFragment = { __typename?: 'Product', id: number, displayName: string, sku: string, defaultUoM?: { __typename?: 'UnitOfMeasurement', id: number, displayName: string } | null };

export type ProductListPartsFragment = { __typename?: 'Product', id: number, sku: string, displayName: string };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: number, displayName: string, sku: string, defaultUoM?: { __typename?: 'UnitOfMeasurement', id: number, displayName: string } | null } };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, sku: string, displayName: string }> };

export type SalesInvoiceDetailPartsFragment = { __typename?: 'SalesInvoice', documentNo?: string | null, dueDate: any, grandTotal: number, grandTotalAccountingSchemeCurrency: number, id: number, isActive: boolean, isCalculated: boolean, isCurrent: boolean, isDraft: boolean, issuedOn: any, paymentTermInDays: number, printDate?: any | null, printed: boolean, printError?: string | null, printLanguageIsoCode: string, reverseCharge: boolean, totalLines: number, totalLinesAccountingSchemeCurrency: number, transactionDate: any, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string }, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, lines: Array<{ __typename?: 'SalesInvoiceLine', id: number, lineOrder: number, linePrice: number, narration: string, quantity: number, product: { __typename?: 'Product', id: number } }>, organization: { __typename?: 'Organization', id: number, displayName: string, legalName: string, registration: string, contact: string, idNumber: string, vatNumber?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } }, accountingScheme: { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }, documentNumberSequences: { __typename?: 'DocumentNumberSequence', current: number } }, vatReport: Array<{ __typename?: 'SalesInvoiceVat', id: number, vatRatePercent: number, vatTotal: number, vatTotalAccountingSchemeCurrency: number, vatTotalAccountingSchemeCurrencyRaw: number, vatTotalRaw: number }>, factoringProvider?: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } | null };

export type SalesInvoiceListPartsFragment = { __typename?: 'SalesInvoice', id: number, documentNo?: string | null, grandTotalAccountingSchemeCurrency: number };

export type SalesInvoiceByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SalesInvoiceByIdQuery = { __typename?: 'Query', salesInvoice: { __typename?: 'SalesInvoice', documentNo?: string | null, dueDate: any, grandTotal: number, grandTotalAccountingSchemeCurrency: number, id: number, isActive: boolean, isCalculated: boolean, isCurrent: boolean, isDraft: boolean, issuedOn: any, paymentTermInDays: number, printDate?: any | null, printed: boolean, printError?: string | null, printLanguageIsoCode: string, reverseCharge: boolean, totalLines: number, totalLinesAccountingSchemeCurrency: number, transactionDate: any, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string }, customer: { __typename?: 'Customer', id: number, legalName: string, displayName: string, vatNumber?: string | null, invoicingEmail: string, note?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, address?: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } } | null }, lines: Array<{ __typename?: 'SalesInvoiceLine', id: number, lineOrder: number, linePrice: number, narration: string, quantity: number, product: { __typename?: 'Product', id: number } }>, organization: { __typename?: 'Organization', id: number, displayName: string, legalName: string, registration: string, contact: string, idNumber: string, vatNumber?: string | null, legalAddress: { __typename?: 'Address', id: number, city: string, line1: string, zipCode: string, country: { __typename?: 'Country', id: number, displayName: string, isoCode: string } }, bankAccount: { __typename?: 'BankAccount', id: number, displayName: string, bankAccountCustomerPrintableNumber: string, iban: string, swift: string, bank: { __typename?: 'Bank', id: number, displayName: string, bankIdentifierCode: string } }, accountingScheme: { __typename?: 'AccountingScheme', id: number, displayName: string, currency: { __typename?: 'Currency', id: number, isoCode: string, displayName: string } }, documentNumberSequences: { __typename?: 'DocumentNumberSequence', current: number } }, vatReport: Array<{ __typename?: 'SalesInvoiceVat', id: number, vatRatePercent: number, vatTotal: number, vatTotalAccountingSchemeCurrency: number, vatTotalAccountingSchemeCurrencyRaw: number, vatTotalRaw: number }>, factoringProvider?: { __typename?: 'FactoringProvider', contact: string, displayName: string, id: number, legalName: string } | null } };

export type DuplicateSalesInvoiceMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateSalesInvoiceMutation = { __typename?: 'Mutation', duplicateSalesInvoice: { __typename?: 'SalesInvoice', id: number } };

export type PublishSalesInvoiceMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  attachmentIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type PublishSalesInvoiceMutation = { __typename?: 'Mutation', publishSalesInvoice: { __typename?: 'SalesInvoice', id: number } };

export type SalesInvoiceLineDetailPartsFragment = { __typename?: 'SalesInvoiceLine', id: number, lineOrder: number, linePrice: number, narration: string, quantity: number, product: { __typename?: 'Product', id: number } };

export type SalesInvoiceVatDetailPartsFragment = { __typename?: 'SalesInvoiceVat', id: number, vatRatePercent: number, vatTotal: number, vatTotalAccountingSchemeCurrency: number, vatTotalAccountingSchemeCurrencyRaw: number, vatTotalRaw: number };

export type SalesInvoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type SalesInvoicesQuery = { __typename?: 'Query', salesInvoices: Array<{ __typename?: 'SalesInvoice', id: number, documentNo?: string | null, grandTotalAccountingSchemeCurrency: number }> };

export type UnitOfMeasurementDetailPartsFragment = { __typename?: 'UnitOfMeasurement', id: number, displayName: string };

export const AccountingSchemeListPartsFragmentDoc = gql`
    fragment AccountingSchemeListParts on AccountingScheme {
  id
  displayName
  currency {
    id
    isoCode
    displayName
  }
}
    `;
export const AttachmentListPartsFragmentDoc = gql`
    fragment AttachmentListParts on Attachment {
  id
  displayName
  isFolder
  size
  lastModified
}
    `;
export const AttachmentDetailPartsFragmentDoc = gql`
    fragment AttachmentDetailParts on Attachment {
  ...AttachmentListParts
}
    ${AttachmentListPartsFragmentDoc}`;
export const BankListPartsFragmentDoc = gql`
    fragment BankListParts on Bank {
  id
  displayName
  bankIdentifierCode
}
    `;
export const BankAccountDetailPartsFragmentDoc = gql`
    fragment BankAccountDetailParts on BankAccount {
  id
  displayName
  bank {
    ...BankListParts
  }
  bankAccountCustomerPrintableNumber
  iban
  swift
}
    ${BankListPartsFragmentDoc}`;
export const BankDetailPartsFragmentDoc = gql`
    fragment BankDetailParts on Bank {
  id
  displayName
  bankIdentifierCode
}
    `;
export const CountryDetailPartsFragmentDoc = gql`
    fragment CountryDetailParts on Country {
  id
  displayName
  isoCode
}
    `;
export const CurrencyDetailPartsFragmentDoc = gql`
    fragment CurrencyDetailParts on Currency {
  id
  displayName
  isoCode
}
    `;
export const CountryListPartsFragmentDoc = gql`
    fragment CountryListParts on Country {
  id
  displayName
  isoCode
}
    `;
export const AddressListPartsFragmentDoc = gql`
    fragment AddressListParts on Address {
  id
  city
  line1
  zipCode
  country {
    ...CountryListParts
  }
}
    ${CountryListPartsFragmentDoc}`;
export const CustomerListPartsFragmentDoc = gql`
    fragment CustomerListParts on Customer {
  id
  legalName
  displayName
  vatNumber
  invoicingEmail
  legalAddress {
    ...AddressListParts
  }
  address {
    ...AddressListParts
  }
  note
}
    ${AddressListPartsFragmentDoc}`;
export const ProductListPartsFragmentDoc = gql`
    fragment ProductListParts on Product {
  id
  sku
  displayName
}
    `;
export const CurrencyListPartsFragmentDoc = gql`
    fragment CurrencyListParts on Currency {
  id
  isoCode
  displayName
}
    `;
export const CustomerProductPriceListPartsFragmentDoc = gql`
    fragment CustomerProductPriceListParts on CustomerProductPrice {
  id
  sellingPrice
  product {
    ...ProductListParts
  }
  currency {
    ...CurrencyListParts
  }
}
    ${ProductListPartsFragmentDoc}
${CurrencyListPartsFragmentDoc}`;
export const CustomerPriceListPartsFragmentDoc = gql`
    fragment CustomerPriceListParts on CustomerPriceList {
  id
  displayName
  validFrom
  validTo
  productPrices {
    ...CustomerProductPriceListParts
  }
}
    ${CustomerProductPriceListPartsFragmentDoc}`;
export const CustomerGroupDetailPartsFragmentDoc = gql`
    fragment CustomerGroupDetailParts on CustomerGroup {
  id
  displayName
  customers {
    ...CustomerListParts
  }
  customerPriceLists {
    ...CustomerPriceListParts
  }
}
    ${CustomerListPartsFragmentDoc}
${CustomerPriceListPartsFragmentDoc}`;
export const CustomerDetailPartsFragmentDoc = gql`
    fragment CustomerDetailParts on Customer {
  id
  legalName
  displayName
  vatNumber
  idNumber
  invoicingEmail
  legalAddress {
    ...AddressListParts
  }
  address {
    ...AddressListParts
  }
  note
  customerGroup {
    ...CustomerGroupDetailParts
  }
  www
  publicNote
}
    ${AddressListPartsFragmentDoc}
${CustomerGroupDetailPartsFragmentDoc}`;
export const CustomerGroupListPartsFragmentDoc = gql`
    fragment CustomerGroupListParts on CustomerGroup {
  id
  displayName
}
    `;
export const OrganizationListPartsFragmentDoc = gql`
    fragment OrganizationListParts on Organization {
  contact
  displayName
  id
  idNumber
  legalName
  registration
  vatNumber
}
    `;
export const FactoringProviderListPartsFragmentDoc = gql`
    fragment FactoringProviderListParts on FactoringProvider {
  contact
  displayName
  id
  legalName
}
    `;
export const FactoringContractDetailPartsFragmentDoc = gql`
    fragment FactoringContractDetailParts on FactoringContract {
  id
  customer {
    ...CustomerListParts
  }
  organization {
    ...OrganizationListParts
  }
  factoringProvider {
    ...FactoringProviderListParts
  }
  invoicePrintNote
}
    ${CustomerListPartsFragmentDoc}
${OrganizationListPartsFragmentDoc}
${FactoringProviderListPartsFragmentDoc}`;
export const FactoringContractListPartsFragmentDoc = gql`
    fragment FactoringContractListParts on FactoringContract {
  id
  customer {
    ...CustomerListParts
  }
  organization {
    ...OrganizationListParts
  }
  factoringProvider {
    ...FactoringProviderListParts
  }
  invoicePrintNote
}
    ${CustomerListPartsFragmentDoc}
${OrganizationListPartsFragmentDoc}
${FactoringProviderListPartsFragmentDoc}`;
export const BankAccountListPartsFragmentDoc = gql`
    fragment BankAccountListParts on BankAccount {
  id
  displayName
  bank {
    ...BankListParts
  }
  bankAccountCustomerPrintableNumber
  iban
  swift
}
    ${BankListPartsFragmentDoc}`;
export const FactoringProviderDetailPartsFragmentDoc = gql`
    fragment FactoringProviderDetailParts on FactoringProvider {
  id
  displayName
  legalName
  contact
  bankAccount {
    ...BankAccountListParts
  }
}
    ${BankAccountListPartsFragmentDoc}`;
export const MenuItemListPartsFragmentDoc = gql`
    fragment MenuItemListParts on MenuItem {
  id
  to
  displayName
}
    `;
export const MenuListPartsFragmentDoc = gql`
    fragment MenuListParts on Menu {
  id
  displayName
  items {
    ...MenuItemListParts
  }
}
    ${MenuItemListPartsFragmentDoc}`;
export const UnitOfMeasurementDetailPartsFragmentDoc = gql`
    fragment UnitOfMeasurementDetailParts on UnitOfMeasurement {
  id
  displayName
}
    `;
export const ProductDetailPartsFragmentDoc = gql`
    fragment ProductDetailParts on Product {
  id
  displayName
  sku
  defaultUoM {
    ...UnitOfMeasurementDetailParts
  }
}
    ${UnitOfMeasurementDetailPartsFragmentDoc}`;
export const SalesInvoiceLineDetailPartsFragmentDoc = gql`
    fragment SalesInvoiceLineDetailParts on SalesInvoiceLine {
  id
  lineOrder
  linePrice
  narration
  quantity
  product {
    id
  }
}
    `;
export const AccountingSchemeDetailPartsFragmentDoc = gql`
    fragment AccountingSchemeDetailParts on AccountingScheme {
  id
  displayName
  currency {
    id
    isoCode
    displayName
  }
}
    `;
export const OrganizationDetailPartsFragmentDoc = gql`
    fragment OrganizationDetailParts on Organization {
  id
  displayName
  legalAddress {
    ...AddressListParts
  }
  legalName
  registration
  contact
  idNumber
  vatNumber
  bankAccount {
    ...BankAccountListParts
  }
  accountingScheme {
    ...AccountingSchemeDetailParts
  }
  documentNumberSequences {
    current
  }
}
    ${AddressListPartsFragmentDoc}
${BankAccountListPartsFragmentDoc}
${AccountingSchemeDetailPartsFragmentDoc}`;
export const SalesInvoiceVatDetailPartsFragmentDoc = gql`
    fragment SalesInvoiceVatDetailParts on SalesInvoiceVat {
  id
  vatRatePercent
  vatTotal
  vatTotalAccountingSchemeCurrency
  vatTotalAccountingSchemeCurrencyRaw
  vatTotalRaw
}
    `;
export const SalesInvoiceDetailPartsFragmentDoc = gql`
    fragment SalesInvoiceDetailParts on SalesInvoice {
  currency {
    ...CurrencyListParts
  }
  customer {
    ...CustomerListParts
  }
  documentNo
  dueDate
  grandTotal
  grandTotalAccountingSchemeCurrency
  id
  isActive
  isCalculated
  isCurrent
  isDraft
  issuedOn
  lines {
    ...SalesInvoiceLineDetailParts
  }
  organization {
    ...OrganizationDetailParts
  }
  paymentTermInDays
  printDate
  printed
  printError
  printLanguageIsoCode
  reverseCharge
  totalLines
  totalLinesAccountingSchemeCurrency
  transactionDate
  vatReport {
    ...SalesInvoiceVatDetailParts
  }
  factoringProvider {
    ...FactoringProviderListParts
  }
}
    ${CurrencyListPartsFragmentDoc}
${CustomerListPartsFragmentDoc}
${SalesInvoiceLineDetailPartsFragmentDoc}
${OrganizationDetailPartsFragmentDoc}
${SalesInvoiceVatDetailPartsFragmentDoc}
${FactoringProviderListPartsFragmentDoc}`;
export const SalesInvoiceListPartsFragmentDoc = gql`
    fragment SalesInvoiceListParts on SalesInvoice {
  id
  documentNo
  grandTotalAccountingSchemeCurrency
}
    `;
export const AccountingSchemeByIdDoc = gql`
    query accountingSchemeById($id: Int!) {
  accountingScheme(id: $id) {
    ...AccountingSchemeDetailParts
  }
}
    ${AccountingSchemeDetailPartsFragmentDoc}`;
export const AccountingSchemesDoc = gql`
    query AccountingSchemes {
  accountingSchemes {
    ...AccountingSchemeListParts
  }
}
    ${AccountingSchemeListPartsFragmentDoc}`;
export const AttachmentByIdDoc = gql`
    query AttachmentById($id: String!) {
  attachment(id: $id) {
    ...AttachmentListParts
  }
}
    ${AttachmentListPartsFragmentDoc}`;
export const AttachmentsDoc = gql`
    query Attachments {
  attachments {
    ...AttachmentListParts
  }
}
    ${AttachmentListPartsFragmentDoc}`;
export const BankByIdDoc = gql`
    query bankById($id: Int!) {
  bank(id: $id) {
    ...BankDetailParts
  }
}
    ${BankDetailPartsFragmentDoc}`;
export const BanksDoc = gql`
    query Banks {
  banks {
    ...BankListParts
  }
}
    ${BankListPartsFragmentDoc}`;
export const ConfirmSalesInvoiceDoc = gql`
    mutation ConfirmSalesInvoice($id: Int!) {
  confirmSalesInvoice(args: {id: $id}) {
    ...SalesInvoiceDetailParts
  }
}
    ${SalesInvoiceDetailPartsFragmentDoc}`;
export const CountriesDoc = gql`
    query Countries {
  countries {
    ...CountryListParts
  }
}
    ${CountryListPartsFragmentDoc}`;
export const CountryByIdDoc = gql`
    query countryById($id: Int!) {
  country(id: $id) {
    ...CountryDetailParts
  }
}
    ${CountryDetailPartsFragmentDoc}`;
export const CurrenciesDoc = gql`
    query Currencies {
  currencies {
    ...CurrencyListParts
  }
}
    ${CurrencyListPartsFragmentDoc}`;
export const CurrencyByIdDoc = gql`
    query currencyById($id: Int!) {
  currency(id: $id) {
    ...CurrencyDetailParts
  }
}
    ${CurrencyDetailPartsFragmentDoc}`;
export const CustomerByIdDoc = gql`
    query CustomerById($id: Int!) {
  customer(id: $id) {
    ...CustomerDetailParts
  }
}
    ${CustomerDetailPartsFragmentDoc}`;
export const CustomerGroupByIdDoc = gql`
    query customerGroupById($id: Int!) {
  customerGroup(id: $id) {
    ...CustomerGroupDetailParts
  }
}
    ${CustomerGroupDetailPartsFragmentDoc}`;
export const CustomerGroupsDoc = gql`
    query CustomerGroups {
  customerGroups {
    ...CustomerGroupListParts
  }
}
    ${CustomerGroupListPartsFragmentDoc}`;
export const CustomersDoc = gql`
    query Customers {
  customers {
    ...CustomerListParts
  }
}
    ${CustomerListPartsFragmentDoc}`;
export const FactoringContractByIdDoc = gql`
    query factoringContractById($id: Int!) {
  factoringContract(id: $id) {
    ...FactoringContractDetailParts
  }
}
    ${FactoringContractDetailPartsFragmentDoc}`;
export const FactoringContractsDoc = gql`
    query FactoringContracts {
  factoringContracts {
    ...FactoringContractListParts
  }
}
    ${FactoringContractListPartsFragmentDoc}`;
export const FactoringProviderByIdDoc = gql`
    query factoringProviderById($id: Int!) {
  factoringProvider(id: $id) {
    ...FactoringProviderDetailParts
  }
}
    ${FactoringProviderDetailPartsFragmentDoc}`;
export const FactoringProvidersDoc = gql`
    query FactoringProviders {
  factoringProviders {
    ...FactoringProviderListParts
  }
}
    ${FactoringProviderListPartsFragmentDoc}`;
export const MailSentFromDoc = gql`
    query MailSentFrom {
  mailSentFrom
}
    `;
export const MenuDoc = gql`
    query Menu {
  menu {
    ...MenuListParts
  }
}
    ${MenuListPartsFragmentDoc}`;
export const OrganizationByIdDoc = gql`
    query organizationById($id: Int!) {
  organization(id: $id) {
    ...OrganizationDetailParts
  }
}
    ${OrganizationDetailPartsFragmentDoc}`;
export const OrganizationsDoc = gql`
    query Organizations {
  organizations {
    ...OrganizationListParts
  }
}
    ${OrganizationListPartsFragmentDoc}`;
export const ProductByIdDoc = gql`
    query productById($id: Int!) {
  product(id: $id) {
    ...ProductDetailParts
  }
}
    ${ProductDetailPartsFragmentDoc}`;
export const ProductsDoc = gql`
    query Products {
  products {
    ...ProductListParts
  }
}
    ${ProductListPartsFragmentDoc}`;
export const SalesInvoiceByIdDoc = gql`
    query SalesInvoiceById($id: Int!) {
  salesInvoice(id: $id) {
    ...SalesInvoiceDetailParts
  }
}
    ${SalesInvoiceDetailPartsFragmentDoc}`;
export const DuplicateSalesInvoiceDoc = gql`
    mutation DuplicateSalesInvoice($id: Int!) {
  duplicateSalesInvoice(id: $id) {
    id
  }
}
    `;
export const PublishSalesInvoiceDoc = gql`
    mutation PublishSalesInvoice($id: Int!, $attachmentIds: [String!]!) {
  publishSalesInvoice(args: {id: $id, attachmentIds: $attachmentIds}) {
    id
  }
}
    `;
export const SalesInvoicesDoc = gql`
    query SalesInvoices {
  salesInvoices {
    ...SalesInvoiceListParts
  }
}
    ${SalesInvoiceListPartsFragmentDoc}`;
export const accountingSchemeById = (
            options: Omit<
              WatchQueryOptions<AccountingSchemeByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<AccountingSchemeByIdQuery> & {
              query: ObservableQuery<
                AccountingSchemeByIdQuery,
                AccountingSchemeByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: AccountingSchemeByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<AccountingSchemeByIdQuery> & {
                query: ObservableQuery<
                  AccountingSchemeByIdQuery,
                  AccountingSchemeByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const AccountingSchemes = (
            options: Omit<
              WatchQueryOptions<AccountingSchemesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<AccountingSchemesQuery> & {
              query: ObservableQuery<
                AccountingSchemesQuery,
                AccountingSchemesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: AccountingSchemesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<AccountingSchemesQuery> & {
                query: ObservableQuery<
                  AccountingSchemesQuery,
                  AccountingSchemesQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const AttachmentById = (
            options: Omit<
              WatchQueryOptions<AttachmentByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<AttachmentByIdQuery> & {
              query: ObservableQuery<
                AttachmentByIdQuery,
                AttachmentByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: AttachmentByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<AttachmentByIdQuery> & {
                query: ObservableQuery<
                  AttachmentByIdQuery,
                  AttachmentByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Attachments = (
            options: Omit<
              WatchQueryOptions<AttachmentsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<AttachmentsQuery> & {
              query: ObservableQuery<
                AttachmentsQuery,
                AttachmentsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: AttachmentsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<AttachmentsQuery> & {
                query: ObservableQuery<
                  AttachmentsQuery,
                  AttachmentsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const bankById = (
            options: Omit<
              WatchQueryOptions<BankByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<BankByIdQuery> & {
              query: ObservableQuery<
                BankByIdQuery,
                BankByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: BankByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<BankByIdQuery> & {
                query: ObservableQuery<
                  BankByIdQuery,
                  BankByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Banks = (
            options: Omit<
              WatchQueryOptions<BanksQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<BanksQuery> & {
              query: ObservableQuery<
                BanksQuery,
                BanksQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: BanksDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<BanksQuery> & {
                query: ObservableQuery<
                  BanksQuery,
                  BanksQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const ConfirmSalesInvoice = (
            options: Omit<
              MutationOptions<any, ConfirmSalesInvoiceMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<ConfirmSalesInvoiceMutation, ConfirmSalesInvoiceMutationVariables>({
              mutation: ConfirmSalesInvoiceDoc,
              ...options,
            });
            return m;
          }
export const Countries = (
            options: Omit<
              WatchQueryOptions<CountriesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CountriesQuery> & {
              query: ObservableQuery<
                CountriesQuery,
                CountriesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CountriesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CountriesQuery> & {
                query: ObservableQuery<
                  CountriesQuery,
                  CountriesQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const countryById = (
            options: Omit<
              WatchQueryOptions<CountryByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CountryByIdQuery> & {
              query: ObservableQuery<
                CountryByIdQuery,
                CountryByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CountryByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CountryByIdQuery> & {
                query: ObservableQuery<
                  CountryByIdQuery,
                  CountryByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Currencies = (
            options: Omit<
              WatchQueryOptions<CurrenciesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CurrenciesQuery> & {
              query: ObservableQuery<
                CurrenciesQuery,
                CurrenciesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CurrenciesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CurrenciesQuery> & {
                query: ObservableQuery<
                  CurrenciesQuery,
                  CurrenciesQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const currencyById = (
            options: Omit<
              WatchQueryOptions<CurrencyByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CurrencyByIdQuery> & {
              query: ObservableQuery<
                CurrencyByIdQuery,
                CurrencyByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CurrencyByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CurrencyByIdQuery> & {
                query: ObservableQuery<
                  CurrencyByIdQuery,
                  CurrencyByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const CustomerById = (
            options: Omit<
              WatchQueryOptions<CustomerByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CustomerByIdQuery> & {
              query: ObservableQuery<
                CustomerByIdQuery,
                CustomerByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CustomerByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CustomerByIdQuery> & {
                query: ObservableQuery<
                  CustomerByIdQuery,
                  CustomerByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const customerGroupById = (
            options: Omit<
              WatchQueryOptions<CustomerGroupByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CustomerGroupByIdQuery> & {
              query: ObservableQuery<
                CustomerGroupByIdQuery,
                CustomerGroupByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CustomerGroupByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CustomerGroupByIdQuery> & {
                query: ObservableQuery<
                  CustomerGroupByIdQuery,
                  CustomerGroupByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const CustomerGroups = (
            options: Omit<
              WatchQueryOptions<CustomerGroupsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CustomerGroupsQuery> & {
              query: ObservableQuery<
                CustomerGroupsQuery,
                CustomerGroupsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CustomerGroupsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CustomerGroupsQuery> & {
                query: ObservableQuery<
                  CustomerGroupsQuery,
                  CustomerGroupsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Customers = (
            options: Omit<
              WatchQueryOptions<CustomersQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<CustomersQuery> & {
              query: ObservableQuery<
                CustomersQuery,
                CustomersQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: CustomersDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<CustomersQuery> & {
                query: ObservableQuery<
                  CustomersQuery,
                  CustomersQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const factoringContractById = (
            options: Omit<
              WatchQueryOptions<FactoringContractByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<FactoringContractByIdQuery> & {
              query: ObservableQuery<
                FactoringContractByIdQuery,
                FactoringContractByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: FactoringContractByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<FactoringContractByIdQuery> & {
                query: ObservableQuery<
                  FactoringContractByIdQuery,
                  FactoringContractByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const FactoringContracts = (
            options: Omit<
              WatchQueryOptions<FactoringContractsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<FactoringContractsQuery> & {
              query: ObservableQuery<
                FactoringContractsQuery,
                FactoringContractsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: FactoringContractsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<FactoringContractsQuery> & {
                query: ObservableQuery<
                  FactoringContractsQuery,
                  FactoringContractsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const factoringProviderById = (
            options: Omit<
              WatchQueryOptions<FactoringProviderByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<FactoringProviderByIdQuery> & {
              query: ObservableQuery<
                FactoringProviderByIdQuery,
                FactoringProviderByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: FactoringProviderByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<FactoringProviderByIdQuery> & {
                query: ObservableQuery<
                  FactoringProviderByIdQuery,
                  FactoringProviderByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const FactoringProviders = (
            options: Omit<
              WatchQueryOptions<FactoringProvidersQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<FactoringProvidersQuery> & {
              query: ObservableQuery<
                FactoringProvidersQuery,
                FactoringProvidersQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: FactoringProvidersDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<FactoringProvidersQuery> & {
                query: ObservableQuery<
                  FactoringProvidersQuery,
                  FactoringProvidersQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const MailSentFrom = (
            options: Omit<
              WatchQueryOptions<MailSentFromQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<MailSentFromQuery> & {
              query: ObservableQuery<
                MailSentFromQuery,
                MailSentFromQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: MailSentFromDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<MailSentFromQuery> & {
                query: ObservableQuery<
                  MailSentFromQuery,
                  MailSentFromQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Menu = (
            options: Omit<
              WatchQueryOptions<MenuQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<MenuQuery> & {
              query: ObservableQuery<
                MenuQuery,
                MenuQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: MenuDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<MenuQuery> & {
                query: ObservableQuery<
                  MenuQuery,
                  MenuQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const organizationById = (
            options: Omit<
              WatchQueryOptions<OrganizationByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<OrganizationByIdQuery> & {
              query: ObservableQuery<
                OrganizationByIdQuery,
                OrganizationByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: OrganizationByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<OrganizationByIdQuery> & {
                query: ObservableQuery<
                  OrganizationByIdQuery,
                  OrganizationByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Organizations = (
            options: Omit<
              WatchQueryOptions<OrganizationsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<OrganizationsQuery> & {
              query: ObservableQuery<
                OrganizationsQuery,
                OrganizationsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: OrganizationsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<OrganizationsQuery> & {
                query: ObservableQuery<
                  OrganizationsQuery,
                  OrganizationsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const productById = (
            options: Omit<
              WatchQueryOptions<ProductByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<ProductByIdQuery> & {
              query: ObservableQuery<
                ProductByIdQuery,
                ProductByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: ProductByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<ProductByIdQuery> & {
                query: ObservableQuery<
                  ProductByIdQuery,
                  ProductByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const Products = (
            options: Omit<
              WatchQueryOptions<ProductsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<ProductsQuery> & {
              query: ObservableQuery<
                ProductsQuery,
                ProductsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: ProductsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<ProductsQuery> & {
                query: ObservableQuery<
                  ProductsQuery,
                  ProductsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const SalesInvoiceById = (
            options: Omit<
              WatchQueryOptions<SalesInvoiceByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<SalesInvoiceByIdQuery> & {
              query: ObservableQuery<
                SalesInvoiceByIdQuery,
                SalesInvoiceByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: SalesInvoiceByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<SalesInvoiceByIdQuery> & {
                query: ObservableQuery<
                  SalesInvoiceByIdQuery,
                  SalesInvoiceByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const DuplicateSalesInvoice = (
            options: Omit<
              MutationOptions<any, DuplicateSalesInvoiceMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<DuplicateSalesInvoiceMutation, DuplicateSalesInvoiceMutationVariables>({
              mutation: DuplicateSalesInvoiceDoc,
              ...options,
            });
            return m;
          }
export const PublishSalesInvoice = (
            options: Omit<
              MutationOptions<any, PublishSalesInvoiceMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<PublishSalesInvoiceMutation, PublishSalesInvoiceMutationVariables>({
              mutation: PublishSalesInvoiceDoc,
              ...options,
            });
            return m;
          }
export const SalesInvoices = (
            options: Omit<
              WatchQueryOptions<SalesInvoicesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<SalesInvoicesQuery> & {
              query: ObservableQuery<
                SalesInvoicesQuery,
                SalesInvoicesQueryVariables
              >;
            }
          > => {
  const q = client.watchQuery({
    query: SalesInvoicesDoc,
    ...options,
  });
  var result = readable<
      ApolloQueryResult<SalesInvoicesQuery> & {
    query: ObservableQuery<
        SalesInvoicesQuery,
        SalesInvoicesQueryVariables
    >;
  }
  >(
      {data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q},
      (set) => {
        q.subscribe((v: any) => {
          set({...v, query: q});
        });
      }
  );
  return result;
}
        