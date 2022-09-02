function newUser(name, age, country)
{
    var name = name || 'oscar';
    var age  = age  || 34;
    var country = country || 'MX';

    console.log(name, age, country);
}

newUser();

function newAdmin(name = 'Oscar', age= 32, country = 'CL')
{
    console.log(name, age, country);
}

newAdmin();