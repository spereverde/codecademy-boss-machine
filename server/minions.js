const express = require('express');
const minionsRouter = express.Router();

const { createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
    etElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./db');

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

module.exports = minionsRouter;