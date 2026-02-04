export default function Stats() {
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-10">
      <div className="bg-white rounded-3xl shadow-xl px-8 py-10 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        
        <div>
          <p className="text-3xl font-extrabold text-gray-900">12,450+</p>
          <p className="text-gray-500 mt-1">Memes Created Today</p>
        </div>

        <div>
          <p className="text-3xl font-extrabold text-gray-900">4.8M</p>
          <p className="text-gray-500 mt-1">Global Reach</p>
        </div>

        <div>
          <p className="text-3xl font-extrabold text-gray-900">200+</p>
          <p className="text-gray-500 mt-1">New Templates Daily</p>
        </div>

      </div>
    </section>
  );
}
