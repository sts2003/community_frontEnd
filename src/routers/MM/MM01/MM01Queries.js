import { gql } from "apollo-boost";

export const GET_POPULAR_BOARD = gql`
  query getPopularBoard {
    getPopularBoard {
      _id
      title
      description
    }
  }
`;

export const GET_POPULAR_DETAIL = gql`
  query getPopularDetail($id: String!) {
    getPopularDetail(id: $id) {
      _id
      title
      description
    }
  }
`;

export const GET_POPULAR_NEXT_ID = gql`
  query getPopularNextId($id: String!) {
    getPopularNextId(id: $id) {
      _id
    }
  }
`;

export const GET_POPULAR_BEFORE_ID = gql`
  query getPopularBeforeId($id: String!) {
    getPopularBeforeId(id: $id) {
      _id
    }
  }
`;

export const GET_POPULAR_TOTALPAGE = gql`
  query getPopularTotalPage($searchValue: String!, $limit: Int!) {
    getPopularTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_POPULAR_TOTAL_PAGE = gql`
  query getPopularTotalPage($limit: Int!, $searchValue: String!) {
    getPopularTotalPage(limit: $limit, searchValue: $searchValue)
  }
`;

export const GET_POPULAR_TOTALPAGE_ONLY_CNT = gql`
  query getPopularTotalPageOnlyCnt($searchValue: String!, $limit: Int!) {
    getPopularTotalPageOnlyCnt(searchValue: $searchValue, limit: $limit)
  }
`;
