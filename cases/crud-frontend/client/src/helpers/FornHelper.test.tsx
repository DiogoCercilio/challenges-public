import FormHelper from './FormHelper';

export const jestConf = true

it("should check if given name is valid", ()=> {

    expect(()=> { FormHelper.nameIsvalid((null as unknown) as string)}).toThrow('Name is required');
    expect(()=> { FormHelper.nameIsvalid((false as unknown) as string)}).toThrow('Name is required');
    expect(()=> { FormHelper.nameIsvalid((0 as unknown) as string)}).toThrow('Name is required');
    expect(()=> { FormHelper.nameIsvalid((1 as unknown) as string)}).toThrow('Name is invalid');
    expect(()=> { FormHelper.nameIsvalid((11111 as unknown) as string)}).toThrow('Name is invalid');
    expect(()=> { FormHelper.nameIsvalid(({} as unknown) as string)}).toThrow('Name is invalid');
    expect(()=> { FormHelper.nameIsvalid(([] as unknown) as string)}).toThrow('Name is invalid');
    expect(FormHelper.nameIsvalid('Lyh')).toEqual(true);
    expect(FormHelper.nameIsvalid('Diogo')).toEqual(true);
})

it("should check if username is valid", ()=> {
    expect(()=> { FormHelper.usernameIsValid((null as unknown) as string)}).toThrow('Username is required');
    expect(()=> { FormHelper.usernameIsValid((false as unknown) as string)}).toThrow('Username is required');
    expect(()=> { FormHelper.usernameIsValid((0 as unknown) as string)}).toThrow('Username is required');
    expect(()=> { FormHelper.usernameIsValid((111 as unknown) as string)}).toThrow('Username is invalid');
    expect(()=> { FormHelper.usernameIsValid(({} as unknown) as string)}).toThrow('Username is invalid');
    expect(()=> { FormHelper.usernameIsValid(([] as unknown) as string)}).toThrow('Username is invalid');
    expect(FormHelper.usernameIsValid('Diogo')).toEqual(true);    
})

it("should check if email is valid", ()=> {
    expect(()=> { FormHelper.emailIsvalid((null as unknown) as string)}).toThrow('Email is required');
    expect(()=> { FormHelper.emailIsvalid((false as unknown) as string)}).toThrow('Email is required');
    expect(()=> { FormHelper.emailIsvalid((0 as unknown) as string)}).toThrow('Email is required');
    expect(()=> { FormHelper.emailIsvalid((111 as unknown) as string)}).toThrow('Email is invalid');
    expect(()=> { FormHelper.emailIsvalid(({} as unknown) as string)}).toThrow('Email is invalid');
    expect(()=> { FormHelper.emailIsvalid(([] as unknown) as string)}).toThrow('Email is invalid');
    expect(()=> { FormHelper.emailIsvalid('Diogo')}).toThrow('Email is invalid')
    expect(()=> { FormHelper.emailIsvalid('me@')}).toThrow('Email is invalid')
    expect(()=> { FormHelper.emailIsvalid('me@mail')}).toThrow('Email is invalid')
    expect(()=> { FormHelper.emailIsvalid('me@mail.')}).toThrow('Email is invalid')
    expect(FormHelper.emailIsvalid('me@mail.com')).toBe(true)
})

it("should check if phone is valid", ()=> {
    expect(()=> { FormHelper.phoneIsValid((null as unknown) as string)}).toThrow('Phone is required');
    expect(()=> { FormHelper.phoneIsValid((false as unknown) as string)}).toThrow('Phone is required');
    expect(()=> { FormHelper.phoneIsValid((0 as unknown) as string)}).toThrow('Phone is required');
    expect(()=> { FormHelper.phoneIsValid(({} as unknown) as string)}).toThrow('Phone is invalid');
    expect(()=> { FormHelper.phoneIsValid(([] as unknown) as string)}).toThrow('Phone is invalid');
    expect(()=> { FormHelper.phoneIsValid('Diogo')}).toThrow('Phone is invalid');
    expect(FormHelper.phoneIsValid('12 987651-1234')).toEqual(true);        

})

it("should check if avatar is valid", ()=> {
    expect(()=> { FormHelper.avatarIsValid((null as unknown) as string)} ).toThrow('Avatar is required');
    expect(()=> { FormHelper.avatarIsValid((false as unknown) as string)} ).toThrow('Avatar is required');
    expect(()=> { FormHelper.avatarIsValid((0 as unknown) as string)} ).toThrow('Avatar is required');
    expect(()=> { FormHelper.avatarIsValid(({} as unknown) as string)} ).toThrow('Avatar is invalid');
    expect(()=> { FormHelper.avatarIsValid(([] as unknown) as string)} ).toThrow('Avatar is invalid');
    expect(FormHelper.avatarIsValid('myavatar.jpg')).toEqual(true);   
})
