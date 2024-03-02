import { gql } from '@apollo/client';

// For getting the current user, executes 'me' query
export const GET_ME = gql`
    query me($userId: ID!) {
        user(_id: $userId) {
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