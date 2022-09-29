const createSlug = (slug) => {
    return slug
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        // .replace(/[\s_-]+/g, '-')
        .replace(/[\s_-]+/g, '')
        .replace(/^-+|-+$/g, '');
}

export default createSlug;
