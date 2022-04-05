import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const BlogCard = ({ article, slug, src, pressRelease }) => {
  return (
    <div className="relative overflow-hidden transition duration-200 transform rounded hover:-translate-y-2 ">
      <div className=" w-full h-64  xl:h-80">
        <Image src={src} layout="fill" className="object-cover " alt="blogs images" />
      </div>
      <div className="absolute  inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-[0.6] opacity-0 hover:opacity-100">
        <div className="absolute bottom-5">
          <p className="mb-2  text-base font-normal text-amcovad-white">PRESS RELEASE . {pressRelease} </p>
          <p className="text-sm font-Inter tracking-wide font-bold text-amcovad-white">
            <Link href={`/article/${slug}`} passHref>
              {article}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
