const getPosts = async() => {
    const response = await fetch( 'https://dummyjson.com/posts')
    return response.json();
}

const getPostById = async(id) => {
    const response = await fetch( 'https://dummyjson.com/posts/' + id);
    return response.json();
}
export { getPosts, getPostById }