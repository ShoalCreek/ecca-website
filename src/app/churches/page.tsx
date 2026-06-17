export default function ChurchesPage() {
  const regions = [
    {
      name: "Nairobi",
      leader: "Overseer Benard Mutia Munyao",
      total: 14,
      churches: [
        "Grace Fellowship, Ruai",
        "Zimmermann",
        "Huruma - Adonai",
        "Chamaiko",
        "Manyatta",
        "Gatia",
        "Saika",
        "Mukuru - Reuben",
        "Mukuru - Njenga",
        "Kamulu - Hope",
        "Kamulu - New Wine",
        "Githunguri",
        "Mwhihoko",
        "Ruiru",
      ],
    },
    {
      name: "Northern Kenya",
      leader: "Ado Aila Ado",
      total: 17,
      churches: [
        "Marsabit Town",
        "Maikona",
        "Songa",
        "Sololo",
        "Dadachelel",
        "Elbor",
        "Moyale Burji",
        "Moyale Manyatta",
        "Moyale Sessi",
        "Odda",
        "Eldimtu",
        "Southern Ethiopia (5 churches)",
      ],
    },
    {
      name: "Isiolo",
      leader: "Francis Aborto",
      total: 7,
      churches: ["Kulamawe", "Airport", "Oldonyiro", "Mlima Chui", "Matundai", "Longopitu", "Rumuruti"],
    },
    {
      name: "Meru",
      leader: "Charles Mugambi",
      total: 5,
      churches: ["Tiira", "Nkija", "Mwerene", "Irindi", "Muthara"],
    },
    {
      name: "Narok",
      leader: "Magaret Suyianto",
      total: 10,
      churches: [
        "Nariakiangare",
        "Range",
        "Sintakara",
        "Enoosupukia",
        "Ntulele",
        "Narok Town",
        "Duka Moja",
        "Naroosora",
        "Oloduguluponyi",
        "Naning'oi",
      ],
    },
    {
      name: "Kisii",
      leader: "Simeon Ositu",
      total: 6,
      churches: ["Ekona", "Etago", "Nyamaiya", "Kenuchi", "Transmara", "Kuria"],
    },
    {
      name: "Maralal",
      leader: "Eunice Mark Letoiya",
      total: 6,
      churches: ["Maralal Town", "Loosuk", "Nguata", "Natala", "Garma", "Kilmon"],
    },
    {
      name: "Kitui",
      leader: "Elijah Maongela Mbithi",
      total: 5,
      churches: ["Muluti", "Kanzau", "Kalolu", "Isovya", "Nguuni"],
    },
    {
      name: "Coast",
      leader: "Harrison Madogo",
      total: 22,
      churches: ["Kwale (17 churches)", "Samburu (3 churches)", "Tana River (2 churches)"],
    },
    {
      name: "Oloitoktok",
      leader: "Silas",
      total: 1,
      churches: ["Kiwanja"],
    },
  ];

  const totalChurches = regions.reduce((sum, r) => sum + r.total, 0);

  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Churches</h1>
          <p className="text-lg text-gray-300">
            {totalChurches} churches across {regions.length} regions in Kenya and beyond
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Overseer */}
          <div className="bg-forest text-white rounded-xl p-6 mb-8 text-center">
            <p className="text-sm text-green-200 mb-1">General Overseer / Bishop</p>
            <p className="text-2xl font-bold">Dr. Aila Tasse Aila</p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-olive text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold">{totalChurches}</p>
              <p className="text-sm text-gray-200">Total Churches</p>
            </div>
            <div className="bg-olive-dark text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold">{regions.length}</p>
              <p className="text-sm text-gray-300">Regions</p>
            </div>
            <div className="bg-gold-dark text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm text-yellow-100">Nations (Growing)</p>
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-olive-dark text-white px-6 py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{region.name} Region</h3>
                    <p className="text-sm text-gray-300">Regional Leader: {region.leader}</p>
                  </div>
                  <div className="bg-gold text-olive-dark font-bold px-3 py-1 rounded-full text-sm">
                    {region.total} {region.total === 1 ? "church" : "churches"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {region.churches.map((church) => (
                      <span
                        key={church}
                        className="bg-cream text-olive-dark px-3 py-1 rounded-full text-sm border border-olive/20"
                      >
                        {church}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
