import React, { Component } from 'react';
import Film from './components/Film';
import FilmSelector from './components/FilmSelector';
import _ from 'underscore';
import data from './../public/films.json'

class App extends Component {
  constructor(props) {
    super(props);

    // Bind handlers for updates 
    this.handleCompanyChange = this.handleCompanyChange.bind(this);

    // Set initial state 
    this.state = {
      companySelected: 'All'
    };
  }

  handleCompanyChange(newCompany) {
    this.setState({ companySelected: newCompany.target.value });
  }

  render() {
    var filmCompanies = _.uniq(_.map(data, 'company'));

    const films = [];

    data.forEach((film) => {

      if (film.company === this.state.companySelected || this.state.companySelected === 'All')
        films.push(<Film film={film} />)
    })

    return (
      <div>
       <FilmSelector companySelected={this.state.companySelected} handleCompanyChange={this.handleCompanyChange} filmCompanies={filmCompanies}/>

        { films }
      </div>
    );


  }
}

export default App;
