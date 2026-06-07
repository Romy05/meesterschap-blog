
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from '../../data/posts.json';

export const WeeklyNerd = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    if (!post) return <h1>404 - Post niet gevonden</h1>;

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};