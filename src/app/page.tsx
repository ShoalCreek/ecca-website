import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-olive-dark text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Preaching the Word,
            <span className="block text-gold-light">Reaching the World</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            The Evangelical Christian Church of Africa is a Bible-believing church.
            We share the good news of Jesus Christ with all people and plant churches across the nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Learn About Us
            </Link>
            <Link
              href="/churches"
              className="border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-olive-dark font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Find a Church
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Summary */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-olive-dark mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Preach the Gospel",
                description: "We share the good news of Jesus Christ with people who have never heard it, in Africa and around the world.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Make Disciples",
                description: "We help people grow in their faith and become followers of Jesus who can teach and lead others.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Plant Churches",
                description: "We start new churches in communities that need them. Today, ECCA has 72 churches across 9 regions in Kenya.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-olive-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-olive-dark mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Prayer — We depend on God in everything",
              "Worship — We love God and worship Him through Jesus Christ",
              "Discipleship — We make and grow disciples of Jesus",
              "Missions — We send missionaries to share the Gospel",
              "Leadership — We train and develop strong leaders",
              "Integrity — We live with honesty and servant hearts",
              "Community — We help communities grow and change",
              "Kingdom Building — We work to grow the body of Christ",
            ].map((value) => {
              const [title, desc] = value.split(" — ");
              return (
                <div key={title} className="bg-cream rounded-lg p-6 border-l-4 border-gold">
                  <h3 className="font-bold text-olive-dark mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join Us in This Mission</h2>
          <p className="text-lg text-green-100 mb-8">
            Whether you want to visit a church, give to support our work, or learn more about ECCA, we welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/give"
              className="border-2 border-white hover:bg-white hover:text-forest-dark font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Support ECCA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
