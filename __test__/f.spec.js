import f from '../src/f'

let instance;
beforeEach(() => instance = new f());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
