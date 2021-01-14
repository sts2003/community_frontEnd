import { gql } from "apollo-boost";

export const GET_ALL_TIPS = gql`
  query getAllTips {
    getAllTips {
      _id
      title
      description
    }
  }
`;
