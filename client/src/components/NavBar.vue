<template>
  <div class="lg:pb-20 pb-64">
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 mt-0 fixed w-full z-10 top-0">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <font-awesome-icon icon="hands-helping" class="mr-2" />
            <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
            <router-link to="/" class="font-semibold text-xl tracking-tight">
                Communiteer
            </router-link>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-200 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-me lg:flex-grow">
            <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                Home
            </router-link>
            <router-link to="/posts" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                Events
            </router-link>
            <router-link to="/map" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                Map
            </router-link>
            </div>
            <div>
            <a href="https://github.com/ifisq/communiteer" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0">
                View On Github
                </a>
            </div>
        </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
