import ListHelper from './ListHelper';

export const jestConf = true

it("should test append user", ()=> {
    const mockUser = [{id: 1, name: 'John'} as any, {id: 2, name: 'Mary'} as any]
    
    expect(ListHelper.appendUser(mockUser, {id: 3, name: 'Joseph'} as any))
    .toEqual([{id: 1, name: 'John'}, {id: 2, name: 'Mary'}, {id: 3, name: 'Joseph'}]);
})

it("should sort object", ()=> {
    
    const arr: Array<any> = [{id: 3, name: 'John'}, {id: 6, name: 'Mary'}, {id: 2, name: 'Joseph'}, {id: 8, name: 'Rick' }]

    const firstResult = [{id: 8, name: 'Rick' }, {id: 6, name: 'Mary'}, {id: 2, name: 'Joseph'}, {id: 3, name: 'John'} ]
    expect(ListHelper.getSorted(arr)).toEqual(firstResult)
    expect(ListHelper.getSorted(arr, 'name')).toEqual(firstResult)
    expect(ListHelper.getSorted(arr, 'name', 'ASC')).toEqual(firstResult)
    
    const secondResult = [{id: 3, name: 'John'}, {id: 2, name: 'Joseph'}, {id: 6, name: 'Mary'}, {id: 8, name: 'Rick' } ]    
    expect(ListHelper.getSorted(arr, 'name', 'DESC')).toEqual(secondResult)
    
    const thirdResult = [{id: 2, name: 'Joseph'}, {id: 3, name: 'John'}, {id: 6, name: 'Mary'}, {id: 8, name: 'Rick' } ]
    expect(ListHelper.getSorted(arr, 'id', 'DESC')).toEqual(thirdResult)

    const fourthResult = [{id: 8, name: 'Rick' }, {id: 6, name: 'Mary'}, {id: 3, name: 'John'}, {id: 2, name: 'Joseph'}]
    expect(ListHelper.getSorted(arr, 'id')).toEqual(fourthResult)
    expect(ListHelper.getSorted(arr, 'id', 'ASC')).toEqual(fourthResult)
})

