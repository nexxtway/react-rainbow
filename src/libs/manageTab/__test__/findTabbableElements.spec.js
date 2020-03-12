import { JSDOM } from 'jsdom';
import findTabbableElements from '../findTabbableElements';

jest.mock('../isContentHidden', () => jest.fn(() => false));

describe('findTabbableElements', () => {
    it('should return the 5 tabbable elements', () => {
        const dom = new JSDOM(`
            <div>
                <h1>Modal Header</h1>
                <p>
                    A rainbow is a meteorological phenomenon ...
                </p>
                <span >
                    <button>cancel</button>
                    <a href="/home">save</a>
                    <textarea>some text</textarea>
                    <input type="text" />
                    <select name="country" id="country"></select>
                </span>
            </div>
        `);
        const containerElement = dom.window.document.querySelector('div');
        expect(findTabbableElements(containerElement).length).toBe(5);
    });
    it('should return an empty array when the are not tabbable elements', () => {
        const dom = new JSDOM(`
            <div>
                <h1>Modal Header</h1>
                <p>
                    A rainbow is a meteorological phenomenon ...
                </p>
                <a>link</a>
            </div>
        `);
        const containerElement = dom.window.document.querySelector('div');
        expect(findTabbableElements(containerElement).length).toBe(0);
    });
    it('should return one element when there is not tabbable nodes but one has a tabindex of 0', () => {
        const dom = new JSDOM(`
            <div>
                <span tabindex="0"></span>
            </div>
        `);
        const containerElement = dom.window.document.querySelector('div');
        expect(findTabbableElements(containerElement).length).toBe(1);
    });
    it('should return an empty array when the are not tabbable nodes but one has a tabindex of -1', () => {
        const dom = new JSDOM(`
            <div>
                <span tabindex="-1"></span>
            </div>
        `);
        const containerElement = dom.window.document.querySelector('div');
        expect(findTabbableElements(containerElement).length).toBe(0);
    });
    it('should return only 1 tabbable element when there are two but one is disabled', () => {
        const dom = new JSDOM(`
            <div>
                <h1>Modal Header</h1>
                <p>
                    A rainbow is a meteorological phenomenon ...
                </p>
                <span >
                    <button disabled>cancel</button>
                    <input type="text" />
                </span>
            </div>
        `);
        const containerElement = dom.window.document.querySelector('div');
        expect(findTabbableElements(containerElement).length).toBe(1);
    });
});
