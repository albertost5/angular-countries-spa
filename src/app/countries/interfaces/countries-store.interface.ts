import {Country} from './country.interface';
import {Region} from './region.type';

export interface CountrieStore {
  byCapital: CountryItem
  byCountry: CountryItem
  byRegion: RegionItem
}

interface CountryItem {
  term: string;
  countries: Country[]
}

interface RegionItem {
  term?: Region;
  countries: Country[]
}


