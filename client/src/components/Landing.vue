<template>
  <div>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://i.imgur.com/uE8bMgh.png'); filter: brightness(70%);"
        >
        </div>
        <div class="container relative mx-auto mb-32">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-gray-200 font-semibold lg:text-6xl md:text-5xl text-4xl">
                  Communiteer
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <font-awesome-icon icon="compass" />
                  </div>
                  <h6 class="text-xl font-semibold">For Organizers</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Communiteer was built for event organizers who want to maximize their impact on the community. Within minutes an organizer can create an event listing. Our service simplifies the process by allowing the organizer to simply input a point on the map, a title, description, and a date.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <font-awesome-icon icon="globe-americas" />
                  </div>
                  <h6 class="text-xl font-semibold">For The Community</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Communiteer was built to strengthen the community by connecting volunteering event organizers to interested volunteers. By simplifying the process and providing a clean interface, we make sure that the organizer and volunteers can focus on what is most important: improving themselves and the community around them. We built this service because we noticed a lack of easy, simple, and modern solutions for recruiting and posting volunteering events.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <font-awesome-icon icon="seedling" />
                  </div>
                  <h6 class="text-xl font-semibold">For Volunteers</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Communiteer was built for people who want to help their communities grow and flourish. The volunteer is the most important part of the process, and that's exactly why we decided to include an open map where the volunteer can find events nearby and easily find more information about the events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <font-awesome-icon class="text-xl" icon="users" />
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Get Connected Today
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Are you interested in making an impact on your community? If so, Communiteer is the right place for you! Don't wait, get started today!
                <br>
                <br>
                <button
                  @click="sendToPosts()"
                  class="bg-blue-800 text-white hover:bg-blue-600 px-3 py-1 rounded-lg shadow-lg mx-2">
                  View Events
                </button>
              </p>
              <router-link to="/posts" />
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                style="background-color: #0d4575"
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
              >
                <img
                  alt="..."
                  src="https://i.imgur.com/HMuvNQy.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      style="color: #0d4575"
                      class="fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    3 Reasons To Volunteer
                  </h4>
                  <p class="text-md list-disc font-light mt-2 text-white"></p>
                  <ol class="text-md text-left list-disc font-light mt-2 text-white">
                    <li>Volunteering gives a sense of purpose and teaches valuable skills.</li>
                    <li>Volunteering helps you stay physically and mentally active.</li>
                    <li>Volunteering helps you meet others and develop new relationships.</li>
                  </ol>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    async sendToPosts () {
      this.$router.push({ name: 'posts' })
    }
  }
}
</script>
