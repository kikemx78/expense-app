import 'es6-promise';
import fetch from 'isomorphic-fetch'


function testAsync() {

  let URL = 'http://expenserapp.azurewebsites.net/api/User/4';
  let request = new Request(URL, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  });
  return fetch(request);
}

export default {
  testAsync,
};
