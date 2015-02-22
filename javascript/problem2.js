function fibonacci( x, y, z, log )
{
    var prevF   = x,
        currF   = y,
        nextF   = ( x + y ),
        evenSum = z;
  

  //Visualize data
  if( log ) { console.log( currF, nextF, evenSum ); }
  
  //Sum even numbers
  if( currF % 2 === 0 ) { evenSum += currF; }
  
  
  if( currF >= 4000000 )
  { 
    console.log(evenSum);
    return;
  }
  
  
  fibonacci( currF, nextF, evenSum )

}

fibonacci(1,2,0);