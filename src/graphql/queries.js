import { gql } from 'apollo-boost';

import * as FRAGMENTS from './fragments';

export const RESTAURANT_SEARCH_QUERY = gql`
${FRAGMENTS.ResponseStatusFields}
${FRAGMENTS.RestaurantFields}

query search_restaurants($address: String, $lat: String, $lon: String) {
  search_restaurants(address: $address, lat: $lat, lon: $lon) {
    response_status {
      ...ResponseStatusFields
    }
    total_results
    results {
      ...RestaurantFields
    }
  }
}
`;

export const RESTAURANT_QUERY = gql`
${FRAGMENTS.RestaurantFields}

query restaurant($id: String!) {
  restaurant(id: $id) {
    ...RestaurantFields
  }
}
`;
