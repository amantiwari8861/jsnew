#include<stdio.h>

struct Employee
{
    int empid;
    char gender;
    float salary;
};
// }aman,rohit,rohan; //1st approach

int main()
{
    // struct Employee aman,e1,e2,e3;//2nd approach
    struct Employee e[100];

    printf("enter the empid \n");
    scanf("%d",&aman.empid);    
    printf("enter the gender \n");
    scanf("%c",&aman.gender);    
    printf("enter the salary \n");
    scanf("%f",&aman.salary);    


    printf("the data of Aman \n empid=%d gender %c salary %.2f ",aman.empid,aman.gender,aman.salary);


    return 0;
}