'use strict';

var fs               = require( 'fs' );
var streamConclusion = require( '../../' );


describe( 'conclusion', function( ) {
	it( 'should count correctly', function( ) {

		var size = 512 * 1024;

		return new Promise( function( resolve, reject ) {
			function result( data )
			{
				expect( data.chunks ).to.be.at.least( 1 );
				expect( data.bytes ).to.equal( size );
				resolve( );
			}

			var rs = fs.createReadStream( '/dev/urandom', { start: 0, end: size - 1 } );
			var ws = fs.createWriteStream( '/dev/null' );
			rs.pipe( streamConclusion( result ) ).pipe( ws );
		} );
	} );
} );
