const express = require('express');
const router = express.Router();

router.get('/vorstand', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get('/presse', (req, res, next) => {
  res.json();
});
router.get('/beitreten', (req, res, next) => {
  res.json();
});
router.get('/roterfaden', (req, res, next) => {
  res.json();
});
router.get('/satzung', (req, res, next) => {
  res.json();
});
router.get('/veranstaltungen', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});
router.get('/berichte', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get('/imprint', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get('/links', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

module.exports = router;
