export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "All ECCA Churches",
      description: "Join us every Sunday to worship God together, hear His Word, and fellowship with other believers.",
    },
    {
      title: "Midweek Prayer Meeting",
      date: "Every Wednesday",
      time: "6:00 PM",
      location: "All ECCA Churches",
      description: "Come together for prayer and intercession. We pray for our church, our nation, and the world.",
    },
    {
      title: "Discovery Bible Study (DBS)",
      date: "Weekly",
      time: "Various Times",
      location: "Cell Groups",
      description: "Small groups meet weekly to study the Bible together using the Discovery Bible Study method.",
    },
  ];

  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-lg text-gray-300">Join us for worship, prayer, and fellowship</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-olive-dark mb-8">Regular Gatherings</h2>

          <div className="space-y-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-forest text-white p-6 md:w-48 flex flex-col items-center justify-center text-center">
                    <p className="text-sm font-medium text-green-200">{event.date}</p>
                    <p className="text-xl font-bold mt-1">{event.time}</p>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold text-olive-dark mb-2">{event.title}</h3>
                    <p className="text-sm text-gold-dark font-medium mb-2">{event.location}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cream rounded-xl p-8 text-center border border-gold/30">
            <h2 className="text-xl font-bold text-olive-dark mb-3">Special Events</h2>
            <p className="text-gray-700 mb-4">
              ECCA holds special events throughout the year, including conferences, crusades, and regional
              gatherings. Contact your local church or our central office for more information about
              upcoming special events.
            </p>
            <a
              href="/contact"
              className="inline-block bg-olive-dark hover:bg-olive text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Contact Us for Event Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
