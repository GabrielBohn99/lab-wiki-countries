import React from 'react';
import { Link } from 'react-router-dom';



const CountryDetail = (props) => {
    
    const countriesId = props.match.params.id;
    const countrie = props.countries.find((countrie) => countrie.cca3 === countriesId)


      return (
        <div class="col-7" >
            <h1>{countrie.name.official}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '100%'}}>Capital</td>
                  <td>{countrie.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countrie.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {
                        countrie.borders.length > 0 ?

                        countrie.borders.map((elem, idx) => {
                        let countrieLink = props.countries.find((el) => el.cca3 === elem)
                        console.log(elem)
                        return <li key={idx}><Link to={`/country/${elem}`}>{countrieLink.name.official}</Link></li>
                        
                        })
                        :
                        <></>
                    }
                     

                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      );
    }


  
  export default CountryDetail;
  