import { gql } from "apollo-boost";

export const GET_ALL_ANONYMOUS = gql`
  query getAllAnonymousBoard {
    getAllAnonymousBoard {
      _id
      title
      description
    }
  }
`;
