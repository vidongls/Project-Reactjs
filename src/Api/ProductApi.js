import requestClient from './requestClient'

const ProductApi = {
  getAll() {
    const urlParam = 'products.json'
    return requestClient.get(urlParam)
  },
  getOne(id) {
    const urlParam = `products/${id}.json`
    return requestClient.get(urlParam)
  },
  deleteProduct() {},
  update() {},
  add() {},
}

export default ProductApi
