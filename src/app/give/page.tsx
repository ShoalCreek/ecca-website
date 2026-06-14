export default function GivePage() {
  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Give</h1>
          <p className="text-lg text-gray-300">Support the work of God through ECCA</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-olive-dark mb-4">Why Give?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your giving helps ECCA preach the Gospel to unreached people, train leaders, plant new churches,
              and support communities across Kenya and beyond. Every gift, big or small, makes a difference
              in the lives of people and the growth of God&apos;s Kingdom.
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or
              under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Church Planting",
                description: "Help us start new churches in communities that need them.",
              },
              {
                title: "Leadership Training",
                description: "Support the training of pastors and church leaders.",
              },
              {
                title: "Missions",
                description: "Send missionaries to unreached people groups.",
              },
              {
                title: "Community Projects",
                description: "Fund projects that bring change to local communities.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-cream rounded-xl p-6 border-l-4 border-gold"
              >
                <h3 className="font-bold text-olive-dark mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">How to Give</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              To make a donation or learn about ways to give, please contact our central office.
              We will guide you through the process and make sure your gift goes where it is needed most.
            </p>
            <div className="space-y-2 text-green-100">
              <p><strong className="text-white">Phone:</strong> +254 728 587 089 / +254 723 822 926</p>
              <p><strong className="text-white">Email:</strong> eccacentraloffice@gmail.com</p>
            </div>
            <a
              href="/contact"
              className="inline-block mt-6 bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us to Give
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
