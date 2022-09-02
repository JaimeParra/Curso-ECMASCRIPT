class user
{
    //Constructor

    constructor(name)
    {
        this.name = name;
    }

    //metodos
    greeting()
    {
        return 'Hello';
    }
    set uName(name)
    {
        this.name = name;
    }
    get uName()
    {
        return this.name;
    }
};

const newUser = new user('Jaime');
console.log(newUser.uName);

newUser.uName = 'pedro';
console.log(newUser.uName);

