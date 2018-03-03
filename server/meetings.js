const express = require('express');
const meetingsRouter = express.Router();

const { createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
    etElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

module.exports = meetingsRouter;