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

          {/* Bank Details */}
          <div className="bg-forest text-white rounded-xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Give</h2>
            <div className="bg-forest-dark rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-gold-light mb-4">ECCA Head Office National Account</h3>
              <div className="space-y-3 text-green-100">
                <div className="flex justify-between border-b border-green-800 pb-2">
                  <span className="font-medium text-white">Bank:</span>
                  <span>Equity Bank</span>
                </div>
                <div className="flex justify-between border-b border-green-800 pb-2">
                  <span className="font-medium text-white">Branch:</span>
                  <span>Ruai</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-white">Account No.:</span>
                  <span className="text-gold-light font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
            <p className="text-center text-green-200 text-sm mt-4">
              For questions about giving, contact us at +254 728 587 089
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

          <div className="bg-cream rounded-xl p-8 text-center border border-gold/30">
            <h2 className="text-xl font-bold text-olive-dark mb-3">Other Ways to Give</h2>
            <p className="text-gray-700 mb-4">
              You can also give through your local ECCA church or contact our central office
              for more information about how to support the work of ECCA.
            </p>
            <div className="space-y-1 text-gray-600 text-sm">
              <p><strong>Phone:</strong> +254 728 587 089 / +254 723 822 926</p>
              <p><strong>Email:</strong> eccacentraloffice@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
