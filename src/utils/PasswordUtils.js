const bcrypt = require('bcrypt');

const PasswordUtils = {
    hashPassword: async (plainPassword) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(plainPassword, salt);
    },

    comparePassword: async (plainPassword, hashedPassword) => {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
};

module.exports = PasswordUtils;
