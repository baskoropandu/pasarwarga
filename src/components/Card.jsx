export default function Card() {
  return (
    <div class="p-4">
          <div class="h-full border-2 border-gray-400 border-opacity-60 bg-gray-500 bg-opacity-20 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
              <div class="flex">
                <p class="leading-relaxed mb-3 w-2/12">
                  Published
                </p>
                <p class="w-1/12">
                  :
                </p>
              </div>
              <div class="flex">
                <p class="leading-relaxed mb-3 w-2/12">
                  Expired
                </p>
                <p class="w-1/12">
                  :
                </p>
              </div>
              <div class="flex items-center flex-wrap ">
                <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
    </div>
  );
}