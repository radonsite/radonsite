import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: '10 Reasons to Switch to Solar Energy in 2024',
      excerpt: 'Discover why this year is the perfect time to make the switch to clean, renewable solar energy for your home or business.',
      author: 'Sarah Johnson',
      date: 'October 15, 2024',
      category: 'Solar Basics',
      image: 'https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
    },
    {
      title: 'Understanding Solar Panel Efficiency Ratings',
      excerpt: 'Learn what efficiency ratings mean and how they impact your solar investment. A comprehensive guide for homeowners.',
      author: 'Michael Chen',
      date: 'October 10, 2024',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
    },
    {
      title: 'Solar Battery Storage: Is It Worth It?',
      excerpt: 'Exploring the costs, benefits, and considerations of adding battery storage to your solar system.',
      author: 'David Martinez',
      date: 'October 5, 2024',
      category: 'Energy Storage',
      image: 'https://images.pexels.com/photos/9799821/pexels-photo-9799821.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
    },
    {
      title: 'Maximizing Your Federal Solar Tax Credit',
      excerpt: 'Everything you need to know about claiming the 30% federal solar tax credit and maximizing your savings.',
      author: 'Sarah Johnson',
      date: 'September 28, 2024',
      category: 'Financing',
      image: 'https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
    },
    {
      title: 'How to Choose the Right Solar Installer',
      excerpt: 'Key factors to consider when selecting a solar installation company for your home or business project.',
      author: 'Michael Chen',
      date: 'September 20, 2024',
      category: 'Installation',
      image: 'https://images.pexels.com/photos/8297537/pexels-photo-8297537.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
    },
    {
      title: 'Solar Maintenance: What You Need to Know',
      excerpt: 'Essential tips for maintaining your solar panels and ensuring optimal performance for decades to come.',
      author: 'David Martinez',
      date: 'September 15, 2024',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
    },
  ];

  const categories = ['All Posts', 'Solar Basics', 'Technology', 'Financing', 'Installation', 'Maintenance', 'Energy Storage'];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Solar Energy Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, tips, and news about solar energy, renewable technology,
              and sustainable living.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="flex items-center space-x-1 text-orange-600 font-semibold group-hover:space-x-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get the latest solar news, tips, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
