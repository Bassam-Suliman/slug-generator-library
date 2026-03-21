import {slugify} from "./index.js";
import {describe, expect, test} from '@jest/globals';

describe('slugify test', () => {
    test('test 1 - Core behavior', () => {
        expect(slugify('Hello World')).toBe('hello-world');
    });

    test('test 2 - Whitespace handling', () => {
        expect(slugify(' HELLO world ')).toBe('hello-world');
    });

    test('test 3 - Underscore handling', () => {
        expect(slugify('hello__world"')).toBe('hello-world');
    });

    test('test 4 - Hyphen handling', () => {
        expect(slugify('hello---world')).toBe('hello-world');
    });

    test('test 5 - Space handling', () => {
        expect(slugify('hello _ world')).toBe('hello-world');
    });

    test('test 6 - Punctuation handling', () => {
        expect(slugify('hello, world!')).toBe('hello-world');
    });
    
    test('test 7 - Special characters handling', () => {
        expect(slugify('hello@world#test')).toBe('helloworldtest');
    });
    
    test('test 8 - Numeric handling', () => {
        expect(slugify('123 456')).toBe('123-456');
    });
    
    test('test 9 - Hyphen only', () => {
        expect(slugify('---')).toBe('');
    });

    test('test 10 - Accented characters', () => {
        expect(slugify('Café au lait')).toBe('cafe-au-lait');
    });
});