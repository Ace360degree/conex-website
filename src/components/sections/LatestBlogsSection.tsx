import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BlogPreview {
  img: string;
  title: string;
  href: string;
}

const blogs: BlogPreview[] = [
  {
    img: '/assets/images/home/case-study/steal-detailing.png',
    title: '"Top 5 Mistakes Fabricators Face Without Proper Steel Detailing"',
    href: '/blog/steel-detailing-mistake',
  },
  {
    img: '/assets/images/home/case-study/connection-design.png',
    title: '"Why Connection Design Is More Critical Than Ever"',
    href: '/blogs',
  },
];

export const LatestBlogsSection: React.FC = () => {
  return (
    <div>
      {/* Divider */}
      <hr className="border-gray-700 my-10" />

      {/* Blogs Section Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Blogs Info Column */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Blogs
            </h2>
            <p
              className="text-gray-300 mt-2 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Build visibility with industry thought leadership
            </p>
          </div>
          <div>
            <Link
              to="/blogs"
              className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition text-sm shadow cursor-pointer"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All Latest Blogs
            </Link>
          </div>
        </div>

        {/* Blogs List Column */}
        <div className="space-y-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-gray-700 pb-4 transition hover:border-yellow-400"
            >
              <div className="flex items-center gap-4">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0 shadow"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
                <Link
                  to={blog.href}
                  className="text-sm font-medium max-w-xs hover:text-yellow-400 transition leading-snug"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  {blog.title}
                </Link>
              </div>
              <Link
                to={blog.href}
                className="text-yellow-400 hover:text-yellow-300 p-2 hover:scale-110 transition flex-shrink-0"
                aria-label={`Read ${blog.title}`}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
