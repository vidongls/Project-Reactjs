import requestClient from './requestClient'

const PostApi = {
  getAll() {
    const urlParam = 'blog.json'
    return requestClient.get(urlParam)
  },
  getOne(id) {
    const urlParam = `blog/${id}.json`
    return requestClient.get(urlParam)
  },
  deletePost() {},
  update() {},
  add() {},
}

export default PostApi
