import { createApi } from "unsplash-js";

const ACCESS_KEY = 'nIKCC7C6MCbHRxC1BsYRJvpzlCf1kkHg0H5gn3rpEcM';
const URL_API = 'https://mywebsite.com/unsplash-proxy'; 
const serverApi = createApi({
    accessKey:ACCESS_KEY,

})
const browserApi = createApi({
    apiUrl:URL_API,
})

//요청하기
const unsplash = createApi({
    accessKey:ACCESS_KEY,
    headers:{'X-Custom-Header': 'foo'},
});
//에러뜰경우 반환
const controller = new AbortController();
const signal = controller.signal;
unsplash.photos.get({ photoId: '123' }, { signal }).catch(err => {
  if (err.name === 'AbortError') {
    console.log('Fetch aborted');
  }
});
controller.abort();
//응답

unsplash.photos.get({ photoId: 'foo' }).then(result => {
    if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
    } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
    }
  });

  //가져오기
  unsplash.search.getUsers({
    query: 'cat',
    page: 1,
    perPage: 10,
  });