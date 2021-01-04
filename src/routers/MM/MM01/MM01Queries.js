import { gql } from "apollo-boost";

export const GET_POPULAR_BOARD = gql`
  query getPopularBoard(
    $searchValue: String!
    $limit: Int!
    $currentPage: Int!
  ) {
    getPopularBoard(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
      _id
      title
      description
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
