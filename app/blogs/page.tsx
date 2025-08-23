import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border rounded-lg p-4 flex flex-col md:flex-row gap-4">
            images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.ctfassets.net",
      port: "",
      pathname: "/**",
    },
  ],
},
            <div>
              <h2 className="text-xl font-semibold">
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                By {post.author} • {new Date(post.publishDate).toLocaleDateString()}
              </p>
              <p className="mb-2">{post.summary}</p>
              <Link href={`/blogs/${post.slug}`} className="text-blue-600 hover:underline">Read more →</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
