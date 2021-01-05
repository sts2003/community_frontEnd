import { gql } from "apollo-boost";

export const TRY_LOGIN = gql`
  mutation tryLogin($email: String!) {
    tryLogin(email: $email)
  }
`;
export const CHECK_CODE = gql`
  mutation checkCode($email: String!) {
    checkCode(email: $email) {
      secretCode
    }
  }
`;

export const CHECK_SECRET_CODE = gql`
  mutation checkSecretCode($email: String!, $code: String!) {
    checkSecretCode(email: $email, code: $code)
  }
`;

export const GET_USER = gql`
  mutation getUser($email: String!, $secretCode: String!) {
    getUser(email: $email, secretCode: $secretCode) {
      email
      nickName
      name
      mobile
    }
  }
`;
