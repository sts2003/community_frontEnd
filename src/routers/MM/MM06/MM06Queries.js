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

export const GET_NEWS_DETAIL = gql`
  query getNewsDetail($id: String!) {
    getNewsDetail(id: $id) {
      _id
      title
      description
      # createdAt
    }
  }
`;

export const GET_NEWS_NEXT_ID = gql`
  query getNewsNextId($id: String!) {
    getNewsNextId(id: $id) {
      _id
    }
  }
`;

export const GET_NEWS_BEFORE_ID = gql`
  query getNewsBeforeId($id: String!) {
    getNewsBeforeId(id: $id) {
      _id
    }
  }
`;
