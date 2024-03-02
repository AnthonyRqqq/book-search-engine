import { gql } from '@apollo/client';

// For executing the loginUser mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// For executing the addUser mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// For executing the saveBook mutation
export const SAVE_BOOK = gql`
  mutation saveBook($input: Book!, $userId: ID!) {
    saveBook(input: $input, userId: $userId) {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

// For executing the removeBook mutation 
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!, $userId: ID!) {
    removeBook(bookId: $bookId, userId: $userId) {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;