/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    // teoricamente deberia de jalar los css
    moduleNameMapper: {
        '\\.(css|sass)$': '<rootDir>/styleMock.js',
    },
};