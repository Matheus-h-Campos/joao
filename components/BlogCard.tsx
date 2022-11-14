import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogCard({ post }: any) {
  return (
    <>
      <Link href={`/blog/${post.id}`}>
        <img
          src="https://source.unsplash.com/random/480x360"
          className="object-cover w-full h-64 mb-5 bg-center rounded-lg shadow-lg "
          alt=""
          loading="lazy"
        />
      </Link>
      <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        {post.attributes.tags}
      </p>
      <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
        <a href="#" className="text-gray-900 hover:text-purple-700">
          {post.attributes.title}
        </a>
      </h2>
      <p className="mb-4 text-sm font-normal text-gray-600">
        {post.attributes.Subtitle}
      </p>
      <div className="flex items-center text-gray-700">
        <div className="avatar">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt="Photo of Praveen Juge"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold text-gray-900">Praveen Juge</p>
          <p className="text-sm text-gray-600">Jan 12, 2021</p>
        </div>
      </div>
    </>
  );
}
