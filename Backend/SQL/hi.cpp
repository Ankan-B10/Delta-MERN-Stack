#include<iostream>
using namespace std;
int main()
{
    int i=1;
    int n;
    cout<<"enter the value of n = ";
    cin>>n;

    while(i <= n){
        cout<<i<<" X "<<n<<" = "<<i*n<<endl;
        i++;
    }

return 0;
}