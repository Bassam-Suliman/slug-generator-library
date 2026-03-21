import { transliterate as tr } from 'transliteration';

export function slugify(text: string, separator: string = '-'): string {
    // takes a string and converts it to a url-friendly slug
    // url-safe characters: a-z, A-Z, 0-9, and separator

    if(typeof text !== 'string' || typeof separator !== 'string') {
        throw new Error('Input must be a string');
    }

    const alphanumericRegex = new RegExp('[^a-zA-Z0-9' + separator + ']', 'g');
    return tr(text)
        .toLowerCase()
        .replace(/[ _-]+/g, ' ')
        .trim()
        .replace(/[ ]+/g, separator)
        .replace(alphanumericRegex, '')
};

export function generateUnique(text: string, separator: string = '-'): string {
    // takes a string and generates a unique slug by appending a random string
    
    if(typeof text !== 'string' || typeof separator !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const randomString = Math.random().toString(36).slice(2);
    return text + separator + randomString;
}