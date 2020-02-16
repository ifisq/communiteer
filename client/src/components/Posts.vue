<template>
  <div class="p-4 flex justify-center items-center">
    <div class="container w-3/4">
      <!-- <button class="container bg-indigo-600 rounded-full p-2 font-medium text-center text-white text-2xl mb-4 shadow-lg w-1/3" @click="createPost()">
        New Post
      </button> -->
      <div class="container bg-gray-200 rounded-lg shadow-xl p-4">
        <div class="flex flex-wrap mb-4">
          <p
            v-if="posts.length == 0"
            class="font-bold text-2xl flex text-center justify-center items-center w-full"> No events yet… Add some</p>
          <a
            v-for="post in posts"
            :key="post._id"
            @click="openPost(post._id)"
            class="bg-gray-300 p-4 rounded-lg shadow-xl w-full my-4"
          >
            <div class="post-container container text-indigo-900">
              <div class="flex flex-wrap">
                <div class="w-full mt-1 font-bold">
                  <font-awesome-icon icon="pen-nib" class="mr-2" />{{ post.title }}
                </div>
                <div class="w-full mb-1">
                  <font-awesome-icon icon="info-circle" class="mr-2" />{{ formatDesc(post.description) }}
                </div>
                <div class="w-full buttons-container text-white my-1">
                  <button
                    class="bg-purple-700 hover:bg-purple-600 px-3 py-1 rounded-lg shadow-lg mx-1"
                    @click="editPost(post._id, $event)"
                  >
                    <font-awesome-icon icon="edit" class="mr-2"/>Edit
                  </button>
                  <button
                    class="bg-purple-700 hover:bg-purple-600 px-3 py-1 rounded-lg shadow-lg mx-1"
                    @click="deletePost(post._id, $event)"
                  >
                    <font-awesome-icon icon="trash" class="mr-2" />Delete
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <button @click="createPost()">
      <fab
        bg-color="#ff0000"
        @click="createPost()">
      </fab>
    </button>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import fab from 'vue-fab'

export default {
  components: {
    fab
  },
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id, evt) {
      evt.stopPropagation()

      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async ({ value }) => {
        if (!value) return
        await PostsService.deletePost(id)
        $this.$router.go({ name: 'posts' })
      })
    },
    openPost (id) {
      this.$router.push({ name: 'postinfo', params: { id } })
    },
    editPost (id, evt) {
      evt.stopPropagation()
      this.$router.push({ name: 'editpost', params: { id } })
    },
    createPost () {
      this.$router.push({ name: 'addpost' })
    },
    formatDesc (desc) {
      if (desc.length > 1000) {
        return `${desc.substring(0, 1000)}…`
      }
      return desc
    }
  }
}
</script>
<style>
  body {
    background-color:  #0d4575
  }
</style>
