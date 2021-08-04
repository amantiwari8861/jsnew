class Parent
{
    void property()
    {
        System.out.println("hello i am parent function");
    }
}
class child extends Parent
{
    void property()
    {
        System.out.println("hello i am child function ");
    }
    void property2()
    {
        System.out.println("hello i am child function 2 ");
    }
}
class overriding
{
    public static void main(String[] args) {
        Parent obj=new child(); 
        // child obj=new Parent(); //error parent cannot be converted into child
        obj.property();
        // obj.property2(); //error property2 is child type fxn but obj is parent type 

    }
}