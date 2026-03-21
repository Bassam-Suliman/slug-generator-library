import { transliterate as tr } from 'transliteration';

export function slugify(text: string, separator: string = '-'): string {
    // takes a string and converts it to a url-friendly slug
    // url-safe characters: a-z, A-Z, 0-9, and separator
    const alphanumericRegex = new RegExp('[^a-zA-Z0-9' + separator + ']', 'g');
    return tr(text)
        .toLowerCase()
        .replace(/[ _-]+/g, ' ')
        .trim()
        .replace(/[ ]+/g, separator)
        .replace(alphanumericRegex, '')
}
