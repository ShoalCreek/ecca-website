export default function VisionPage() {
  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-lg text-gray-300">What drives us and where we are going</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="bg-forest text-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gold-light">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To preach the Gospel of Jesus Christ to unreached people groups around the world.
              To make obedient disciples of Jesus Christ. To promote community transformation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-olive-dark mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              ECCA exists to glorify God by preaching the Gospel of Jesus Christ to unreached people groups
              around the world. We make disciples of Jesus Christ and plant self-supporting, healthy churches.
              We develop leaders, send missionaries, and promote community-based development for community
              transformation.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-olive-dark mb-6">Our Goals</h2>
            <ul className="space-y-4">
              {[
                "Preach a sound doctrine of the Word of God and reach the world",
                "Make obedient disciples of Jesus Christ",
                "Plant self-reproducing, self-supporting, healthy churches",
                "Send missionaries to the nations",
                "Train and develop leaders",
                "Improve communities through development and transformation",
              ].map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategy */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-olive-dark mb-4">Our Strategy</h2>
            <p className="text-gray-700 leading-relaxed">
              We believe in the daily study of God&apos;s Word and obedience to God in fulfilling the
              Great Commission. We follow the commands of Jesus as written in Matthew 28:16-20,
              Matthew 24:14, Mark 16:15-18, Acts 1:8, and Acts 13:1-2.
            </p>
          </div>

          {/* Culture */}
          <div className="bg-cream rounded-xl shadow-md p-8 md:p-12 border-l-4 border-gold">
            <h2 className="text-2xl font-bold text-olive-dark mb-4">Our Culture</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a people who become obedient disciples of Jesus Christ and make obedient disciples
              across the nations. We plant self-reproducing healthy churches, train leaders, send missionaries,
              and show care for our communities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
