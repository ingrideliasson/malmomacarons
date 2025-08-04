
export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16 mt-16 md:mt-0">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 font-montserrat">

          {/* Section 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 rounded-full" />
            <div className="pl-6">
              <h2 className="font-merriweather text-lg mb-3 text-gray-900">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 rounded-full" />
            <div className="pl-6">
              <h2 className="font-merriweather text-lg mb-3 text-gray-900">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat metus vel libero ullamcorper auctor.
                Nullam et risus urna. Sed efficitur imperdiet erat quis consequat. Integer lobortis, purus eu condimentum vulputate,
                tellus elit porttitor massa, ut scelerisque diam dui porttitor lectus. Quisque scelerisque consequat purus, at egestas orci.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 rounded-full" />
            <div className="pl-6">
              <h2 className="font-merriweather text-lg mb-3 text-gray-900">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="text-sm leading-relaxed">
                Nam tellus orci, dignissim in sollicitudin eu, condimentum eget nisl. Suspendisse potenti.
                Donec eget placerat felis, sed pretium massa. Duis quis nisi efficitur, mattis mi quis, lobortis magna.
                Aenean tincidunt neque a magna tempus ultricies. Nulla volutpat ipsum ac mauris ornare, id tincidunt justo aliquam.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 rounded-full" />
            <div className="pl-6">
              <h2 className="font-merriweather text-lg mb-3 text-gray-900">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="text-sm leading-relaxed">
                Nam pretium ornare arcu vel imperdiet. In hac habitasse platea dictumst. Praesent molestie ac erat ac dictum.
                Nunc nec ullamcorper justo. Cras fermentum lectus quis lectus viverra, non lacinia nulla vestibulum.
                Cras porta libero erat, eu vehicula est efficitur sit amet. Ut erat quam, molestie eu faucibus id, sagittis non elit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
