import React from "react";
import { Link } from 'react-router-dom';

const CountryList = (props) => {
  return (

        <div className="col-5" style={{maxHeight:"38rem", overflow:"scroll", textAlign:"left" }}>
          <div className="list-group">
            {props.countries.map((item, idx) => (
             <Link className="list-group-item list-group-item-action" to={`/country/${item.cca3}`} >{item.flag}{item.name.official}</Link>
            ))}
          </div>
        </div>

  );
};

export default CountryList;
