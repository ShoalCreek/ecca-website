export default function MinistriesPage() {
  const ministries = [
    {
      name: "Prayers & Intercessions",
      description: "We believe that prayer is the foundation of everything we do. Our prayer ministry brings the church together to seek God and pray for our communities, our nation, and the world.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
      name: "Missions & Outreach",
      description: "Our mission teams go out to share the Gospel with people who have never heard it. We use Discovery Bible Study (DBS) to help people learn about Jesus and start new churches.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "Music & Worship",
      description: "Our worship teams lead the church in praising God through music. This includes praise teams, worship leaders, and choirs that help people connect with God.",
      icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    },
    {
      name: "Ushering",
      description: "Our ushers welcome everyone who comes to church. They help people feel at home and make sure our services run smoothly.",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      name: "Children Ministry",
      description: "We teach children about Jesus in ways they can understand. Our children&apos;s ministry helps young ones grow in faith from an early age.",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "Youth Ministry",
      description: "Our youth ministry helps young people grow strong in their faith. We create a place where young people can learn, ask questions, and serve God together.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      name: "Women Ministry",
      description: "Our women&apos;s ministry brings women together for fellowship, prayer, and support. Women learn together and encourage each other in their walk with God.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      name: "Men Ministry",
      description: "Our men&apos;s ministry challenges men to be strong leaders in their families, churches, and communities. Men grow together through Bible study and fellowship.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
  ];

  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Ministries</h1>
          <p className="text-lg text-gray-300">How we serve God and our communities</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ministries.map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ministry.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-olive-dark mb-2">{ministry.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{ministry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream rounded-xl p-8 text-center border border-gold/30">
            <h2 className="text-xl font-bold text-olive-dark mb-3">Church Practices</h2>
            <p className="text-gray-700">
              Our churches practice <strong>missions</strong>, <strong>baptism</strong>, and
              the <strong>Lord&apos;s Supper</strong> as part of our worship and obedience to God&apos;s Word.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
