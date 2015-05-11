'use strict';

var through2 = require( 'through2' );

module.exports = function( callback )
{
	var nchunks = 0, nbytes = 0;

	function data( chunk, enc, cb )
	{
		++nchunks;
		nbytes += chunk.length;
		cb( null, chunk );
	}

	function end( cb )
	{
		var data = {
			chunks : nchunks,
			bytes  : nbytes
		};
		callback( data );
		cb( );
	}

	return through2( data, end );
}
