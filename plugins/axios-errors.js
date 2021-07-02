export default (context, inject) => {
  
  const hasAxiosErrors = (axiosdata) => {
    console.log(`axiosdata-->${JSON.stringify(axiosdata)}`);
    //
    // // VERSION AXIOS
    // if (axiosdata.errors){
    //   return {
    //     id: axiosdata.errors[0].extensions.exception.data.message[0].messages[0].id,
    //     message: axiosdata.errors[0].extensions.exception.data.message[0].messages[0].message,
    //   }
    // }
    //
    // VERSION APOLLO
    if (axiosdata.graphQLErrors){
      return {
        id: axiosdata.graphQLErrors[0].extensions.exception.data.message[0].messages[0].id,
        message: axiosdata.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message,
      }
    }
    return {};
  };
  
  // Inject $hasAxiosErrors(axiosdata) in Vue, context and store.
  inject('hasAxiosErrors', hasAxiosErrors);
  // For Nuxt <= 2.12, also add 👇
  context.$hasAxiosErrors = hasAxiosErrors
  
}
