<template>
  <div>
    <section class="py-14 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Popular Cuisines</h2>
            <p class="text-gray-500 mt-1">Explore chefs by your favorite cuisine</p>
          </div>
          <a
            class="text-[#FC8019] hover:underline font-medium text-sm flex items-center gap-1"
            href="/chefs"
            >View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path></svg
          ></a>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          <a class="group text-center" href="/chefs?cuisine=Indian"
            ><div
              class="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FC8019] transition-all shadow-md group-hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8?w=300&amp;h=300&amp;fit=crop"
                alt="Indian"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p class="mt-3 font-semibold text-gray-800 text-sm md:text-base">Indian</p>
            <p class="text-xs text-gray-500">
              45<!-- -->
              chefs
            </p></a
          ><a class="group text-center" href="/chefs?cuisine=Italian"
            ><div
              class="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FC8019] transition-all shadow-md group-hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=300&amp;h=300&amp;fit=crop"
                alt="Italian"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p class="mt-3 font-semibold text-gray-800 text-sm md:text-base">Italian</p>
            <p class="text-xs text-gray-500">
              28<!-- -->
              chefs
            </p></a
          ><a class="group text-center" href="/chefs?cuisine=Chinese"
            ><div
              class="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FC8019] transition-all shadow-md group-hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&amp;h=300&amp;fit=crop"
                alt="Chinese"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p class="mt-3 font-semibold text-gray-800 text-sm md:text-base">Chinese</p>
            <p class="text-xs text-gray-500">
              32<!-- -->
              chefs
            </p></a
          ><a class="group text-center" href="/chefs?cuisine=Mexican"
            ><div
              class="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FC8019] transition-all shadow-md group-hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1648437595587-e6a8b0cdf1f9?w=300&amp;h=300&amp;fit=crop"
                alt="Mexican"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p class="mt-3 font-semibold text-gray-800 text-sm md:text-base">Mexican</p>
            <p class="text-xs text-gray-500">
              18<!-- -->
              chefs
            </p></a
          ><a class="group text-center" href="/chefs?cuisine=Thai"
            ><div
              class="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FC8019] transition-all shadow-md group-hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=300&amp;h=300&amp;fit=crop"
                alt="Thai"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p class="mt-3 font-semibold text-gray-800 text-sm md:text-base">Thai</p>
            <p class="text-xs text-gray-500">
              22<!-- -->
              chefs
            </p></a
          ><a class="group text-center" href="/chefs?cuisine=Japanese"
            ><div
              class="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FC8019] transition-all shadow-md group-hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1717988732486-285ea23a6f88?w=300&amp;h=300&amp;fit=crop"
                alt="Japanese"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p class="mt-3 font-semibold text-gray-800 text-sm md:text-base">Japanese</p>
            <p class="text-xs text-gray-500">
              15<!-- -->
              chefs
            </p></a
          >
        </div>
      </div>
    </section>
  </div>
</template>
