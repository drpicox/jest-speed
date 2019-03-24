import l from '../src/l'

let instance;
beforeEach(() => instance = new l());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
