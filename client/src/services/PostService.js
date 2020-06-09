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
    static async createPost(content) {
        const body = {
            content
        }

        console.log(body);
        return await axios(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: body
        })
    }

    // Delete Posts
    static deletePost(postID) {
        return axios.delete(`${url}/del/${postID}`)
    }
}

export default PostService;