const { Book, User } = require('../models');
// Import token and authentication code
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        // For finding current user profile
        me: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        }
    },

    Mutation: {
        // For logging in an existing user
        login: async (parent, { email, password }) => {
            // Checks for valid user
            const user = await User.findOne({ email });

            // Throws error if no valid user matching email
            if (!user) {
                throw AuthenticationError;
            };

            // Checks for correct password
            const correctPassword = await user.isCorrectPassword(password);

            // Throws error if incorrect password
            if (!correctPassword) {
                throw AuthenticationError;
            };

            // Creates authentication token
            const token = signToken(user);
            return { token, user };
        },

        // For creating new users
        addUser: async (parent, { username, email, password }) => {
            // Creates new user
            const user = await User.create({ username, email, password });

            // Immediately creates token on user creation
            const token = signToken(user);
            return { token, user };
        },

        // For saving a new book to the user's array of saved books
        saveBook: async (parent, { input, userId }) => {
            return User.findOneAndUpdate(
                { _id: userId},
                {
                    $addToSet: { savedBooks: input }
                },
                {
                    new: true,
                    runValidators: true
                }
            );
        },

        // For removing a book from the user's array of saved books using the book's id
        removeBook: async (parent, { bookId, userId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId: bookId}}},
                {
                    new: true,
                    runValidators: true
                }
            );
        }
    }
};

module.exports = resolvers;