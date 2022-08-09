export interface UserData {
  address: Address;
  company: Company;
  email: string | null;
  id: number;
  name: string | null;
  phone: string | null;
  username: string | null;
  website: string | null;
}

export interface Address {
  city: string;
  geo: Geo;
  street: string | null;
  suite: string | null;
  zipcode: string | null;
}

export interface Company {
  bs: string | null;
  catchPhrase: string | null;
  name: string | null;
}

export interface Geo {
  lat: string | null;
  lng: string | null;
}
