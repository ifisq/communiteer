<template>
  <div class="w-full justify-center items-center flex p-4">
    <div class="container justify-center items-center w-3/4 p-4 bg-gray-100 rounded-lg shadow-xl">
      <div class="title-container">
        <div class="font-medium text-xl mb-1">Title</div>
        <p
          class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
          type="text"
          placeholder="Title"> {{ title }} </p>
      </div>
      <div class="description-container mt-4">
        <div class="font-medium text-xl mb-1">Description</div>
        <p
          class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
          placeholder="Description"> {{ (showFull || !(description.length > 1000)) ? description : `${description.substring(0, 1000)}…` }}
          <a
            href="#"
            v-if="description.length > 1000"
            class="no-underline hover:underline text-blue-500 font-bold"
            @click="showFull = !showFull"> Show {{ showFull ? "less" : "more" }} </a>
        </p>
      </div>
      <div class="description-container mt-4">
        <div class="font-medium text-xl mb-1">Location</div>
        <!-- <p>None</p> -->
        <div class="flex justify-center items-center">
          <GmapMap
            :center="{ lat: lat, lng: long }"
            :zoom="10"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <GmapMarker
              :position="{ lat: lat, lng: long }"
            />
          </GmapMap>
        </div>
      </div>
      <div class="description-container mt-4">
        <div class="font-medium text-xl mb-1">Date</div>
        <p
          class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none">
          {{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'postinfo',
  data () {
    return {
      title: '',
      description: '',
      date: (new Date()).toLocaleString(),
      lat: 0,
      long: 0,
      showFull: false
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      this.date = (new Date(response.data.date)).toLocaleString()
      this.lat = response.data.lat
      this.long = response.data.long
      // this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style>
  body {
    background-color:  #0d4575
  }
</style>
