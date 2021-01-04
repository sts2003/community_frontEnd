import { gql } from "apollo-boost";

export const GET_FREE_BOARD = gql`
  query getFreeBoard {
    getFreeBoard {
      _id
      title
      description
    }
  }
`;

export const GET_FREE_DETAIL = gql`
  query getFreeDetail($id: String!) {
    getFreeDetail(id: $id) {
      _id
      title
      description
    }
  }
`;

export const GET_FREE_TOTALPAGE = gql`
  query getFreeTotalPage($searchValue: String!, $limit: Int!) {
    getFreeTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_FREE_TOTAL_PAGE = gql`
  query getFreeTotalPage($limit: Int!, $searchValue: String!) {
    getFreeTotalPage(limit: $limit, searchValue: $searchValue)
  }
`;

export const GET_FREE_TOTALPAGE_ONLY_CNT = gql`
  query getFreeTotalPageOnlyCnt($searchValue: String!, $limit: Int!) {
    getFreeTotalPageOnlyCnt(searchValue: $searchValue, limit: $limit)
  }
`;

export const DELETE_FREE = gql`
  mutation deleteFree($id: String!) {
    deleteFree(id: $id)
  }
`;

export const UPDATE_FREE = gql`
  mutation updateFree($id: String!, $title: String!, $description: String!) {
    updateFree(id: $id, title: $title, description: $description)
  }
`;
export const GET_FREE_NEXT_ID = gql`
  query getFreeNextId($id: String!) {
    getFreeNextId(id: $id) {
      id
    }
  }
`;

export const GET_FREE_BEFORE_ID = gql`
  query getFreeBeforeId($id: String!) {
    getFreeBeforeId(id: $id) {
      id
    }
  }
`;
