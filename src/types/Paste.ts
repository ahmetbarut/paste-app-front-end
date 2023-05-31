export default interface Paste {
    id: number;
    title?: string;
    content: string;
    status?: 'public' | 'private' | 'unlisted';
    url: string;
}