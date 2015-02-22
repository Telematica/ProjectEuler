/**
 *----------------
	 2 : 2
	 3 : 6
	 4 : 12
	 5 : 60
	 6 : 60
	 7 : 420
	 8 : 840
	 9 : 2520
	10 : 2520
	11 : 27720
	12 : 27720
	13 : 360360
	14 : 360360
	15 : 360360

	16 : 720720
	17 : 12252240
	18 : 12252240
	19 : 232792560
	20 : 232792560
--------------
*/

/**
 * @function
 * @param  int num
 * @return int minNum
 */
;(function( num )
{
	if( !num ) return;

	var c, i, minNum = 360360, thisIsIt = false;

	while( !thisIsIt )
	{
		for( i = 1; i <= num; ++i )
		{
			if( !( minNum % i === 0 ) )
			{
				minNum++;
				break;
			}

      		c = i;
		}
		
		console.log( minNum, c );

		if( c >= num )
		{
			break;
			return minNum;
		}
	}
})();
