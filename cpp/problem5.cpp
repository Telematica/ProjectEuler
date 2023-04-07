using namespace std;

int main ()
{
	ofstream myfile;
	myfile.open( "result.txt" );
	long long i, c = 0, num = 22, minNum = 1;
	bool thisIsIt = false;
	
	std::cout << "Input a number: ";
	std::cin >> num;

	while( !thisIsIt )
	{
		for( i = 1; i <= num; ++i )
		{
			if( !( minNum % i == 0 ) )
			{
				minNum++;
				break;
			}

      		c = i;
		}

		if( c >= num )
		{
			break;
		}
	}
	
	myfile << minNum << "\n";
	printf( "%lld", minNum );

	myfile.close();

	return 0;
}
