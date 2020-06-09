<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <hr>
    <div class="create-post">
      <FormulateForm
        @submit="sendPost"
      >
      <FormulateInput 
      type="textarea"
      id="post-content"
      placeholder="What's on your head?" 
      v-model="content" />
      <FormulateInput 
        type="submit"
        label="Send that bitch!"        
      />     

      </FormulateForm>
    </div>
    <hr>
    <p class='error' v-if="error">{{error}}</p>    
    <div class="post"
      v-for="(post, index) in posts"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
    >
      {{post.createdAt.getDate()}}/{{post.createdAt.getMonth()}}/{{post.createdAt.getFullYear()}}
    <p class="text">{{post.content}}</p>
    <div class="delete" v-on:click='deletePost(post._id)'>x</div>

    </div>
  </div>
</template>

<script>
import PostService from '../services/PostService'
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      content: ''
    }    
  },
  created() {
    console.log('function returns', PostService.getPosts())
      try {
        PostService.getPosts().then(
          posts => this.posts = posts
        )
      } catch (err) {
        this.error = err;
      }
  },
  methods: {
    async sendPost() {
      try{
        PostService.createPost(this.content)
      } catch (err) {
        this.error = err;
      }
    },
    async deletePost(_id) {
      try{
        console.log(_id)
        this.posts = this.posts.filter( post => post._id !== _id)
        PostService.deletePost(_id)
      } catch(err) {
        this.error = err;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.container{
    max-width: 800px;
    margin : 0 auto;
  }


  p.error{
    border : 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
  }


  div.post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #bcffb8;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
  }


  div.created-at{
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: darkgreen;
    color: white;
    font-size: 13px
  }


  p.text{
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .delete:hover {
    cursor: pointer;
  }

</style>
