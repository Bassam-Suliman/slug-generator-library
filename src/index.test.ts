import {slugify} from "./index";

describe('slugify test', () => {
    test('should convert text to slug', () => {
        expect(slugify('Hello World')).toBe('hello-world');
    });

    test('should convert text to slug', () => {
        expect(slugify(' HELLO world ')).toBe('hello-world');
    });

    test('should convert text to slug', () => {
        expect(slugify('hello__world"')).toBe('hello-world');
    });

    test('should convert text to slug', () => {
        expect(slugify('hello---world')).toBe('hello-world');
    });

    test('should convert text to slug', () => {
        expect(slugify('hello _ world')).toBe('hello-world');
    });

    test('should convert text to slug', () => {
        expect(slugify('hello, world!')).toBe('hello-world');
    });
    
    test('should convert text to slug', () => {
        expect(slugify('"hello@world#test')).toBe('helloworldtest');
    });
    
    test('should convert text to slug', () => {
        expect(slugify('123 456')).toBe('123-456');
    });
    
    test('should convert text to slug', () => {
        expect(slugify('---')).toBe('');
    });
    
    test('should convert text to slug', () => {
        expect(slugify('hello, world!')).toBe('hello-world');
    });

    test('should convert text to slug', () => {
        expect(slugify('"Café au lait"')).toBe('cafe-au-lait');
    });
});