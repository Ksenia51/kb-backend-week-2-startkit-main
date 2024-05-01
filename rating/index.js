const { PATH_TO_RATING_FILE } = require("./config");
const makeRatingFile = require("./rating-file");
const createRating = require("./calculations");
const updateRating = require("./calculations");

module.exports = {
    makeRatingFile,
    PATH_TO_RATING_FILE,
    createRating,
    updateRating,
};
