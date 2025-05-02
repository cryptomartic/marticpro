const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));




// About Us
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));



// service 
router.get('/AI-Investment', forwardAuthenticated, (req, res) => res.render('ai'));
// Signals 
router.get('/long-term-investments', forwardAuthenticated, (req, res) => res.render('long'));
// Mentorshipd 
router.get('/market-oriented-investments', forwardAuthenticated, (req, res) => res.render('market'));










// Investing 
router.get('/investing', forwardAuthenticated, (req, res) => res.render('investing'));


// TERMS
router.get('/term-and-condition', forwardAuthenticated, (req, res) => res.render('terms'));

//PRIVACY POLICY
router.get('/privacy-policy', forwardAuthenticated, (req, res) => res.render('privacy'));

//REFUND POLICY
router.get('/refund-policy', forwardAuthenticated, (req, res) => res.render('refund'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);
router.get('/invest', ensureAuthenticated, (req, res) =>
  res.render('invest', {
    user: req.user
  })
);
router.get('/deposit-funds', ensureAuthenticated, (req, res) =>
  res.render('deposits', {
    user: req.user
  })
);


router.get('/withdrawal', ensureAuthenticated, (req, res) =>
  res.render('withdrawal', {
    user: req.user
  })
);
router.get('/view-withdrawal', ensureAuthenticated, (req, res) =>
  res.render('history', {
    user: req.user
  })
);
router.get('/premium-VIP', ensureAuthenticated, (req, res) =>
  res.render('premium', {
    user: req.user
  })
);

router.get('/RTW', ensureAuthenticated, (req, res) =>
  res.render('rtw', {
    user: req.user
  })
);


router.get('/withdrawal-success', ensureAuthenticated, (req, res) =>
  res.render('success', {
    user: req.user
  })
);
router.get('/earnings', ensureAuthenticated, (req, res) =>
  res.render('earnings', {
    user: req.user
  })
);
router.get('/help-desk', ensureAuthenticated, (req, res) =>
  res.render('help', {
    user: req.user
  })
);

router.get('/deposit-success', ensureAuthenticated, (req, res) =>
  res.render('deposit', {
    user: req.user
  })
);
router.get('/checkout', ensureAuthenticated, (req, res) =>
  res.render('checkout', {
    user: req.user
  })
);
router.get('/bloop', ensureAuthenticated, (req, res) =>
  res.render('complete', {
    user: req.user
  })
);
router.get('/select-coin-19843667164', ensureAuthenticated, (req, res) =>
  res.render('coin', {
    user: req.user
  })
);
router.get('/bit-pay', ensureAuthenticated, (req, res) =>
  res.render('bitpay', {
    user: req.user
  })
);
router.get('/ether-pay', ensureAuthenticated, (req, res) =>
  res.render('etherpay', {
    user: req.user
  })
);

router.get('/tron-pay', ensureAuthenticated, (req, res) =>
  res.render('tronpay', {
    user: req.user
  })
);

router.get('/binance-pay', ensureAuthenticated, (req, res) =>
  res.render('binance', {
    user: req.user
  })
);


router.get('/sol-pay', ensureAuthenticated, (req, res) =>
  res.render('solpay', {
    user: req.user
  })
);

router.get('/litecoin-pay', ensureAuthenticated, (req, res) =>
  res.render('ltc', {
    user: req.user
  })
);



router.get('/trc20-pay', ensureAuthenticated, (req, res) =>
  res.render('usdt', {
    user: req.user
  })
);

router.get('/bep20-pay', ensureAuthenticated, (req, res) =>
  res.render('bep', {
    user: req.user
  })
);






module.exports = router;
