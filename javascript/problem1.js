/**
 * @function annon.
 * @description Multiples of 3 and 5
 * @url https://projecteuler.net/problem=1
 * @param  int limit
 * @return int sum
 */
(function( limit )
{
	var i, sum = 0;

	for( i = 0; i <= limit; i++ )
	{
		if( i % 3 === 0 || i % 5 === 0  )
		{
			sum += i;
		}
	}

	return sum;

})( 1000 );
