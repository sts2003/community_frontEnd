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

export const GET_ALL_FREES = gql`
  query getFreeBoard {
    getFreeBoard {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_NEWSES = gql`
  query getAllNewses {
    getAllNewses {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_ANONYMOUS = gql`
  query getAllAnonymousBoard {
    getAllAnonymousBoard {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_TIPS = gql`
  query getAllTips {
    getAllTips {
      _id
      title
      description
    }
  }
`;
