import { useEffect } from "react";

const posts = [
  {
    id: 1,
    title: "Discover Your Dream Home",
    href: "#",
    description:
      "Explore our latest listings and find the perfect home that meets your needs. Whether you're looking for a cozy apartment, a spacious house, or a luxurious villa, we have a wide range of properties available to suit every lifestyle.",
    imageUrl: "https://i.ibb.co/zJtMt1p/scott-webb-1ddol8rg-UH8-unsplash.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Property Listings", href: "#" },
    author: {
      name: "Real Estate Experts",
      role: "Agents",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Sell Your Property with Confidence",
    href: "#",
    description:
      "Let our experienced team handle the sale of your property with professionalism and expertise. We'll market your home effectively, negotiate on your behalf, and ensure a smooth transaction from listing to closing.",
    imageUrl: "https://i.ibb.co/VpgDscv/Sell-Your-Property.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Property Sales", href: "#" },
    author: {
      name: "Real Estate Experts",
      role: "Agents",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Invest in Real Estate",
    href: "#",
    description:
      "Diversify your investment portfolio and build long-term wealth with real estate. Our team can help you identify lucrative investment opportunities, whether you're interested in rental properties, commercial real estate, or land development.",
    imageUrl: "https://i.ibb.co/0r3qt1w/Invest.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Investment Opportunities", href: "#" },
    author: {
      name: "Real Estate Experts",
      role: "Agents",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Stay Informed with Real Estate Trends",
    href: "#",
    description:
      "Keep up to date with the latest trends and insights in the real estate market. Our blog covers topics such as market analysis, home buying tips, investment strategies, and more, to help you make informed decisions about your real estate journey.",
    imageUrl: "https://i.ibb.co/gJnZSLQ/Informed-with-Real-Estate-Trends.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Real Estate Insights", href: "#" },
    author: {
      name: "Real Estate Experts",
      role: "Agents",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=",
    },
  },
  {
    id: 5,
    title: "Join Our Real Estate Community",
    href: "#",
    description:
      "Connect with fellow real estate enthusiasts and professionals in our vibrant community. Share insights, ask questions, and network with industry experts to enhance your knowledge and grow your real estate business.",
    imageUrl: "https://i.ibb.co/5RCF2pq/Community.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Real Estate Community", href: "#" },
    author: {
      name: "Real Estate Experts",
      role: "Agents",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogPage() {
  useEffect(()=>{
    document.title="Paradise Cove | Blog"
  },[])
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
