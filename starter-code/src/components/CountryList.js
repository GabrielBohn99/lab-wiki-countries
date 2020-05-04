import React from "react";
import { Link } from 'react-router-dom';

const CountryList = (props) => {
  return (

        <div className="col-5" style={{height:"50%", overflow:"scroll" }}>
          <div className="list-group">
            {props.countries.map((item, idx) => (
             <Link  to={`/country/${item.cca3}`} >{item.name.official}</Link>
            ))}
          </div>
        </div>

  );
};

export default CountryList;
