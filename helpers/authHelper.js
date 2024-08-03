const bcrypt = require('bcryptjs');

const hashPassword = async function (password) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

const comparePassword = async function (password, hashedPassword) {
    try {
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { hashPassword, comparePassword };
