<template>
  <div class="w-full justify-center items-center flex p-4">
    <div class="container justify-center items-center w-3/4 p-4 bg-gray-100 rounded-lg shadow-xl">
      <div class="title-container">
        <div class="font-medium text-xl mb-1">Title</div>
        <input
          class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
          type="text"
          placeholder="Enter your event title."
          v-model="title"
        />
      </div>
      <div class="description-container mt-4">
        <div class="font-medium text-xl mb-1">Description</div>
        <textarea
          class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
          rows="4"
          type="text"
          placeholder="Enter your event description."
          v-model="description"
        />
      </div>
      <div class="description-container mt-4">
        <div class="font-medium text-xl mb-1">Location</div>
        <!-- <p>None</p> -->
        <GmapAutocomplete
          class="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
          @place_changed="setPlace" />
        <br>
        <div class="flex justify-center items-center">
          <GmapMap
            :center="{ lat: viewLat, lng: viewLong }"
            :zoom="10"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <GmapMarker
              :position="{ lat: lat, lng: long }"
              :clickable="true"
              :draggable="true"
              @position_changed="updatePos"
            />
          </GmapMap>
        </div>
      </div>
      <div class="description-container mt-4">
        <div class="font-medium text-xl mb-1">Date and Time</div>
            <datetime
            use12Hour
            type="datetime"
            v-model="date"
            placeholder="Click Here to Add Date and Time"
            inputClass="bg-gray-300 shadow-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full" />
      </div>
      <div class="buttons-container py-4 text-white">
        <button
          @click="addPost()"
          class="bg-purple-700 hover:bg-purple-600 px-3 py-1 rounded-lg shadow-lg mx-2"
        >
          <font-awesome-icon icon="share" class="mr-2" />Add Event
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import { Datetime } from 'vue-datetime'

export default {
  name: 'addpost',
  components: {
    Datetime
  },
  data () {
    return {
      title: '',
      description: '',
      date: (new Date()).toISOString(),
      viewLat: 0,
      viewLong: 0,
      lat: 0,
      long: 0
    }
  },
  mounted () {
    this.geolocate()
  },
  methods: {
    setPlace (evt) {
      const location = evt.geometry.location
      this.lat = location.lat()
      this.long = location.lng()
      this.viewLat = location.lat()
      this.viewLong = location.lng()
    },
    updatePos (evt) {
      this.lat = evt.lat()
      this.long = evt.lng()
    },
    geolocate () {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude
        this.long = position.coords.longitude
        this.viewLat = position.coords.latitude
        this.viewLong = position.coords.longitude
      })
    },
    async addPost () {
      if (!this.title || !this.description) {
        this.$swal('Oops!', 'Please fill out all fields on the page', 'error')
        return
      }
      await PostsService.addPost({
        title: this.title,
        description: this.description,
        date: Date.parse(this.date),
        lat: this.lat,
        long: this.long
      })
      await this.$swal(
        'Great!',
        `Your post has been added!`,
        'success'
      )
      this.$router.push({ name: 'posts' })
    }
  }
}
</script>

<style>
  body {
    background-color:  #0d4575
  }
</style>
