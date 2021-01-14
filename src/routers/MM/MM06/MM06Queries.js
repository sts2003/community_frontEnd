import { gql } from "apollo-boost";

export const GET_ALL_NEWSES = gql`
  query getAllNewses {
    getAllNewses {
      _id
      title
      description
    }
  }
`;
// export const GET_ALL_NEWS_DETAIL = gql`
//   query getAllNewsDetail($id: String!) {
//     getAllNewsDetail(id: $id) {
//       id
//       title
//       description
//     }
//   }
// `;
