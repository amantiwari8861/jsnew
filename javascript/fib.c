#include<stdio.h>
int main()
{
    int first=0,second=1,third=0,i,num;
    printf("enter the term :");
    scanf("%d",&num);
    if(num<=0)
    {
        printf("invalid input \n");
    }
    else if(num==1)
    {
        printf("%d",first);
    }
    else
    {
        printf("%d %d ",first,second);
        for(i=0;i<num-2;i++)
        {
            third=first+second;
            printf(" %d  ",third);
            first=second;
            second=third;
        }      
    }
    return 0;
}