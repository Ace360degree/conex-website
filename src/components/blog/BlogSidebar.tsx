import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { recentBlogs } from '../../data/blogsData';

interface BlogSidebarProps {
  headingClassName?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  headingClassName = 'text-3xl md:text-4xl font-semibold',
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(recentBlogs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleBlogs = recentBlogs.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  return (
    <aside className="space-y-4">
      <h2
        className={headingClassName}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Recent Blogs
      </h2>

      <div
        className="space-y-3"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {visibleBlogs.map((blog, index) => {
          const isYellow = index % 2 === 0;
          return (
            <div
              key={`${currentPage}-${index}`}
              className={`p-4 rounded-md transition duration-300 ${
                isYellow
                  ? 'bg-[var(--color-primary)] text-[var(--color-dark)]'
                  : 'bg-white text-black'
              }`}
            >
              <h3 className="font-semibold text-base leading-snug">
                {blog.title}
              </h3>
              <p className="text-sm mt-1 text-gray-800 leading-normal">
                {blog.text}
              </p>
              <a
                href={blog.url}
                className={`font-semibold inline-block mt-2 text-sm underline hover:opacity-80 transition ${
                  isYellow ? 'text-black' : 'text-[var(--color-primary)]'
                }`}
              >
                Read More…
              </a>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div
        className="flex space-x-2 mt-6 flex-wrap gap-y-2"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            aria-label={`Go to page ${pageNum}`}
            className={`px-3 py-1 border rounded text-sm font-medium transition cursor-pointer ${
              pageNum === currentPage
                ? 'bg-[var(--color-primary)] text-black border-[var(--color-primary)]'
                : 'bg-[#4B5563] text-white border-[#4B5563] hover:bg-[#374151]'
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </aside>
  );
};
