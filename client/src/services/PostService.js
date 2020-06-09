import axios from 'axios'; 

const url = 'http://localhost:5000/api/posts';

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    // Create Posts
    static createPost(content) {
        return axios.post(url, {content})
    }

    // Delete Posts
    static deletePost(postID) {
        return axios.delete(`url/${postID}`)
    }
}

export default PostService;