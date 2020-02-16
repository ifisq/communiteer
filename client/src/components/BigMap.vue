<template>
  <div class="cw-full justify-center items-center flex p-4">
      <div class="container justify-center items-center w-3/4 p-4 bg-gray-100 rounded-lg shadow-xl">
            <div class="description-container mt-4">
            <div class="font-medium text-xl mb-1">Location</div>
                <!-- <p>None</p> -->
                <GmapAutocomplete
                class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                @place_changed="setPlace" />
                <br>
                <div class="flex justify-center items-center">
                <GmapMap
                    :center="{ lat: lat, lng: long }"
                    :zoom="10"
                    map-type-id="terrain"
                    style="width: 100%; height: 400px"
                >
                  <div
                    v-for="post in posts"
                    :key="post._id">
                      <GmapMarker
                        :position="{ lat: post.lat, lng: post.long }"
                        :clickable="true"
                        @click="openInfoWindowTemplate({ lat: post.lat, lng: post.long }, post._id)"
                      />
                      <GmapInfoWindow
                        :position="infoWindow.position"
                        :opened="infoWindow.open && infoWindow.id == post._id"
                        @closeclick="infoWindow.open = false">
                        <p class="font-bold">{{post.title}}</p>
                        <p>{{ post.description.length > 1000 ? `${post.description.substring(0, 1000)}…` : post.description }}</p>
                        <router-link
                          :to="`/posts/${post._id}/info`"
                          class="no-underline hover:underline text-blue-500 font-bold">
                          More Info
                        </router-link>
                      </GmapInfoWindow>
                  </div>
                </GmapMap>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'bigmap',
  data () {
    return {
      lat: 0,
      long: 0,
      posts: [],
      infoWindow: {
        position: { lat: 0, lng: 0 },
        open: false,
        id: ''
      }
    }
  },
  mounted () {
    this.geolocate()
    this.getPosts()
  },
  methods: {
    openInfoWindowTemplate (pos, id) {
      this.infoWindow.position = pos
      this.infoWindow.open = true
      this.infoWindow.id = id

      this.clicked = true
    },
    setPlace (evt) {
      const location = evt.geometry.location
      this.lat = location.lat()
      this.long = location.lng()
    },
    geolocate () {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude
        this.long = position.coords.longitude
      })
    },
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    }
  }
}
</script>

<style>
  body {
    background-color:  #0d4575
  }
</style>
