const typeDefs = `
    // Type for User
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]
    }

    // Type for Book
    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    // Type for Auth
    type Auth {
        token: String
        user: User
    }

    // Query for user accessing the program
    type Query {
        me(profileId: ID!): User
    }

    type Mutation {
        // For login, returns an Auth type
        login(email: String!, password: String!): Auth

        // For creating a user, returns an Auth type
        addUser(username: String!, email: String!, password: String!): Auth

        // For saving a book from an input based on the Book type, returns a User type
        saveBook(input: Book!): User

        // For removing a book based on the bookId, returns a User type
        removeBook(bookId: bookId!): User
    }
`

module.exports = typeDefs