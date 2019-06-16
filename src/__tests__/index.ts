import { randomFunction } from "../index";

describe('index', () => {
    it('dummy test to allow test ci', async () => {
        const trueValue = true;

        expect(randomFunction()).toEqual(trueValue);

    });
});
