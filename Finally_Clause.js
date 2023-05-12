try
{
    let a = 0;
    t
    console.log("Hiiiii");
}
catch (error)
{
    console.log("error aa gaya bhai");
}
finally
{
    console.log("I am finally and I will always run irrespective of the error is caused or not");
}

//why finally
try
{
    let a = 0;
    t
    console.log("Hiiiii");
}
catch (error)
{
    console.log("error aa gaya bhai");
    console.log(p); // it will again produce error but because there is finally below , below console.log will run otherwise it would have blocked the execution.
}
finally
{
    console.log("I am finally and I will always run irrespective of the error is caused or not");
}