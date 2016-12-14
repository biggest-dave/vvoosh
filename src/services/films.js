import axios from 'axios';

class FilmService {

  constructor() {};

  getFilms() {

    axios.get('http://static.solidstategroup.com/js-test/films.json')
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(function(error) {
        return error;
        console.log(error);
      });

  }

}


module.exports = FilmService;
