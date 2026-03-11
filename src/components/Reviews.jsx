export default function Reviews() {
  return (
    <div className="px-6 mt-8">
      <h2 className="text-2xl text-primary font-semibold">What people say</h2>

      <div className="space-y-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-yellow-500 text-sm">★★★★★</p>

          <p className="mt-2 text-gray-700">
            This mug makes my morning coffee feel special.
          </p>

          <p className="text-sm text-gray-500 mt-2">— Sarah M.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-yellow-500 text-sm">★★★★☆</p>

          <p className="mt-2 text-gray-700">
            Beautiful craftsmanship and perfect weight.
          </p>

          <p className="text-sm text-gray-500 mt-2">— Daniel R.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-yellow-500 text-sm">★★★★☆</p>

          <p className="mt-2 text-gray-700">
            Love the texture and glaze. Coffee stays warm longer.
          </p>

          <p className="text-sm text-gray-500 mt-2">— Emily K.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-yellow-500 text-sm">★★★★★</p>

          <p className="mt-2 text-gray-700">
            Feels premium and handmade. My favorite mug now.
          </p>

          <p className="text-sm text-gray-500 mt-2">— James L.</p>
        </div>
      </div>
    </div>
  );
}
