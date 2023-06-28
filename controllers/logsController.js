const express = require('express');

const router = express.Router();

const logsArray = require('../models/log');

router.get('/', (req, res) => {
  res.json(logsArray);
});

router.get('/:index', (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.redirect('/*');
  }
});

router.post('/', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.redirect('/*');
  } else {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
  }
});

router.delete('/:index', (req, res) => {
  const { index } = req.params;

  if (!logsArray[index]) {
    return res.redirect('/*');
  } else {
    const deletedLog = logsArray.splice(index, 1);
    return res.status(200).json(deletedLog);
  }
});

// Bonuses

router.get('/', (req, res) => {
  let logs = [...logsArray];

  const { order } = req.query;
  if (order === 'asc') {
    logs.sort((a, b) => a.captainName.localeCompare(b.captainName));
  } else if (order === 'desc') {
    logs.sort((a, b) => b.captainName.localeCompare(a.captainName));
  } else if (order) {
    return res.status(400).json({
      message: 'Invalid order value. Only "asc" or "desc" are allowed.',
    });
  }

  const mistakes = req.query.mistakes;
  if (mistakes === 'true') {
    logs = logs.filter((log) => log.mistakesWereMadeToday === true);
  } else if (mistakes === 'false') {
    logs = logs.filter((log) => log.mistakesWereMadeToday === false);
  } else if (mistakes) {
    return res.status(400).json({
      message: 'Invalid mistakes value. Only "true" or "false" are allowed.',
    });
  }

  res.json(logs);
});

module.exports = router;
