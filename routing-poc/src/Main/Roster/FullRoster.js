import React from 'react';
import { all } from './PlayerAPI';
import { Link } from 'react-router-dom';

const FullRoster = () => (
    <div>
      <ul>
        {
          all().map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
);

export default FullRoster;