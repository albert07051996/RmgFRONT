import axios from 'axios';

function CallApi(config: any) {
  // const user = useAppSelector(state => state.user.userData.user);
  let configWithloginToken = { ...config };

  let token = localStorage.getItem('accesstoken');
  const headers = {
    Authorization: 'Bearer ' + token,
    // "Access-Control-Allow-Origin": "*"
  };

  configWithloginToken.headers = headers;

  return axios
    .request(configWithloginToken)
    .then(response => {
      if (response.headers.accesstoken) {
        localStorage.setItem('accesstoken', response.headers.accesstoken);
      }

      return response;
    })
    .then(({ data }) => data)
    .catch(error => {
      if (error.response?.status === 401) {
        localStorage.removeItem('accesstoken');
        // navigate('/login');
        window.location.reload();
      }
      return Promise.reject(error);
    });
}

export default CallApi;
