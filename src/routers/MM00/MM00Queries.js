import { gql } from "apollo-boost";

export const GET_POPULAR_NOTICE = gql`
  query getPopularNotice {
    getPopularNotice {
      _id
      title
      description
    }
  }
`;
