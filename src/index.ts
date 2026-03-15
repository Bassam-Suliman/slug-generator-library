function slugify(text: string): string {
    return text .toLowerCase()
                .replace(/[^A-Za-z0-9._~-]+/g, '-')
                .split('-')
                .filter((s) => s.length > 0)
                .join('-');
}