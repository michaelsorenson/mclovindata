// Stacktracer
const express = require( 'express' );
const router  = express.Router();

const request = require( 'request' );

router.post('/download', function( req, res ) {
  const file = `./ceopdf/mcdonalds_data.pdf`;
  res.download(file);
});
    
module.exports = router;
    