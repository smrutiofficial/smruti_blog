'use client'; // Ensure this component runs on the client side

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming axios is configured

export default function BlogPost() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const res = await axios.get(`/posts/${id}`);
        setPost(res.data);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
      <Link href="/">
        <a className="text-blue-500 underline mt-8 block">Back to Home</a>
      </Link>
    </div>
  );
}
