import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/common/Seo';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { featuredBlogs } from '../data/blogsData';

export const Blogs: React.FC = () => {
  return (
    <>
      <Seo
        title="Insights on Steel Detailing, Engineering, and Fabrication | Conex Blog"
        description="Welcome to the Conex Blog — your source for industry insights, technical tips, and thought leadership in the world of structural steel detailing."
        canonicalUrl="https://innosteelix.com/blogs"
      />

      {/* Hero Section */}
      <section className="bg-white text-gray-900">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8 max-w-7xl">
          {/* Image */}
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="/assets/images/blogs/working-hand.png"
              alt="Conex Team"
              className="w-full h-auto shadow-md object-cover"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          {/* Text Content */}
          <div
            className="md:w-1/2 md:pl-16 pl-5 pr-5 py-6 md:py-14 order-2 md:order-1"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl md:text-5xl font-bold leading-tight text-gray-900">
              Insights on Steel Detailing, Engineering, and Fabrication
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Welcome to the Conex Blog — your source for industry insights,
              technical tips, and thought leadership in the world of structural
              steel detailing. Whether you’re a fabricator, engineer, architect,
              or project coordinator, our blog delivers relevant knowledge that
              helps you stay sharp, avoid errors, and build better.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Listing + Sidebar Section */}
      <section className="bg-[var(--color-dark)] text-[var(--color-white)] py-10 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cols 1–2: Static Blog Cards */}
          <div className="md:col-span-2 space-y-8 md:pr-6">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 md:bg-transparent p-4 md:p-0 rounded-lg"
              >
                <div className="rounded-md overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-60 object-cover rounded-md transition-transform duration-500 hover:scale-105"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2
                      className="text-xl font-semibold text-white leading-snug"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      {blog.title}
                    </h2>
                    <p
                      className="text-sm text-gray-300 mt-2 leading-relaxed"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      {blog.excerpt}
                    </p>
                    {blog.slug !== '#' ? (
                      <Link
                        to={blog.slug}
                        className="text-[var(--color-primary)] text-sm mt-3 inline-block font-semibold hover:underline"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      >
                        Read More…
                      </Link>
                    ) : (
                      <span
                        className="text-[var(--color-primary)] text-sm mt-3 inline-block font-semibold cursor-pointer hover:underline"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      >
                        Read More…
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm text-gray-400 mt-4"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    Published on {blog.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Col 3: Dynamic Blogs + Pagination */}
          <div className="md:pl-6">
            <BlogSidebar headingClassName="text-3xl md:text-4xl font-semibold text-white" />
          </div>

          {/* Absolute Vertical Divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-white/20"></div>
        </div>
      </section>
    </>
  );
};
