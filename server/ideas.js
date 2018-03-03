const express = require('express');
const ideasRouter = express.Router();

const { createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
    etElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./db');

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

module.exports = ideasRouter;