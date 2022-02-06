import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Geo {
        lat: String!,
        lng: String!,
    }
    type Address {
        street: String!,
        suite: String!,
        city: String!,
        zipcode: String!
        geo: Geo!
    }
    type Company {
        name: String!,
        catchPhrase: String!,
        bs: String!
    }
    type UserList {
        id: ID!,
        name: String!,
        username: String!,
        email: String!,
        address: Address!,
        phone: String!,
        website: String!,
        company: Company!
    }

    type Query {
        usersList: [UserList!]!
    }

    type Mutation {
        deleteUser(id: ID!): UserList!
    }
`;