import Image from 'next/image';
import Link from 'next/link';
import SplitText from './SplitText';

const posts = [
  {
    category: 'DHT',
    author: 'Dr. James Wilson',
    title: 'Multivitamins and Hair Loss: The Ultimate Truth',
    href: '/blog/multivitamins-hair-loss',
    image: '/images/solutions_2.png',
  },
  {
    category: 'Hair Care',
    author: 'Dr. Sarah Chen',
    title: 'Does Eyelash Grow Back: Dermatologist Answers',
    href: '/blog/eyelash-grow-back',
    image: '/images/diagnosis_1.png',
  },
  {
    category: 'Hair Loss',
    author: 'Dr. Michael Osei',
    title: 'What is Implanter Pen in DHT Hair Transplant?',
    href: '/blog/implanter-pen-dht',
    image: '/images/diagnosis_2.png',
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#2458B3',
              marginBottom: 12,
              display: 'block',
            }}
          >
            Our Blog
          </span>
          <SplitText
            text="Explore our Latest Post"
            as="h2"
            delay={40}
            className="inline-block"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="post-card group">
              {/* Image */}
              <div className="post-image relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={700}
                  height={408}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/10' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2458B3" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="post-desc">
                <div className="post-meta">
                  <span className="flex items-center gap-1">
                    <PersonIcon className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <TagIcon className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                </div>
                <div className="post-title">
                  <h4>
                    <Link href={post.href}>{post.title}</Link>
                  </h4>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonIcon({ className = '' }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
}
function TagIcon({ className = '' }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>;
}
