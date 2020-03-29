const { gql } = require("apollo-server");
const {makeExecutableSchema} = require('graphql-tools');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  type Booking {
    booking_id: Int!
    email: String!
    activity_id: String!
    name: String
    image_url: String
    amount: String!
    status: String!
    times: JSON
  }

  type Customer {
    customer_id: String
    email: String
    default_card_id: String
    cards: JSON
    bookings: Booking
  }

  type Joining {
    joining_id: Int!
    booking_id: Int!
    activity_id: String!
    name: String
    image_url: String
    amount: String!
    status: String!
    times: JSON
    email: String!
  }

  type Location {
    email: String
    name: String
    address: String
    phone: String
    postal_code: String
    city: String
    max_group_size: String
    duration: String
    payment: String
    advance_scheduling: String
    scheduling_via: String
    category_type: String
    waiver: String
    refund_policy: String
    logo: String
    opening_hours: String
    monday: [String]
    tuesday: [String]
    wednesday: [String]
    thursday: [String]
    friday: [String]
    saturday: [String]
    sunday: [String]
    timing_b: String
    timing_c: String
    deposit_for_booking: String
    special_pricing: String
    discount: String
    locations: String
    summer_winter: String
    customization: String
    things_to_bring: String
    equipment: String
    food_beverage: String
    age_suitability: String
    under_18: String
    wheelchair_access: String
    payment_processor: String
    parking: String
    json: String
    image_url: String
    standard_pricing: String
    standard_price_text: String
    description: String
    activity_id: String!
    latitude: String
    longitude: String
  }

  input LocationType {
    email: String
    name: String
    address: String
    phone: String
    postal_code: String
    city: String
    max_group_size: String
    duration: String
    payment: String
    advance_scheduling: String
    scheduling_via: String
    category_type: String
    waiver: String
    refund_policy: String
    logo: String
    opening_hours: String
    monday: [String]
    tuesday: [String]
    wednesday: [String]
    thursday: [String]
    friday: [String]
    saturday: [String]
    sunday: [String]
    timing_b: String
    timing_c: String
    deposit_for_booking: String
    special_pricing: String
    discount: String
    locations: String
    summer_winter: String
    customization: String
    things_to_bring: String
    equipment: String
    food_beverage: String
    age_suitability: String
    under_18: String
    wheelchair_access: String
    payment_processor: String
    parking: String
    json: String
    image_url: String
    standard_pricing: String
    description: String
    latitude: String
    longitude: String
  }

  type Mutation {
    putLocation(input: LocationType): Location
  }

  type Query {
    getLocation(email: String!): Location
    getBooking(bookingId: Int!): Booking
    listBookings(email: String!): [Booking]
    listJoinings(email: String!): [Joining]
    activities: [Location]
    listNearestLocations(latitude: String, longitude: String): [Location]
  }

  scalar JSON

  schema {
    query: Query
    mutation: Mutation
  }
`;

const resolveFunctions = {
  JSON: GraphQLJSON
};

// const jsSchema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });

module.exports = typeDefs;
