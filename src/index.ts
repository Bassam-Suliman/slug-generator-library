import { transliterate as tr } from 'transliteration';

export function slugify(text: string): string {
    return tr(text).toLowerCase()
                .replace(/[ _]/g, '-')
                .replace(/[^a-zA-Z0-9-]/g, '')
                .split('-')
                .filter((s) => s.length > 0)
                .join('-');
}