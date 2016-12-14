import React, { Component } from 'react';


class FilmSelector extends Component {
  render() {

    console.log('asdasdsa');
    console.log(this.props.filmCompanies)
    return (
      <div>
          <h4>Company </h4>
            <select value={this.props.companySelected} onChange={this.props.handleCompanyChange}> 
            <option value="all">all</option>
            {
              this.props.filmCompanies.map(function(typeItem, i){
                return (
                  <option value={typeItem} key={i}>{typeItem}</option>
              )
              })
            }
            </select>
      </div>
    );
  }
}


export default FilmSelector;
