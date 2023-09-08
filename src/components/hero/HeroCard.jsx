import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Hero.css';

export const HeroCard = ({hero}) => {

    const imagePath = `/assets/${hero.id}.jpg`;

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/hero/${id}`);
    }
    return (
      <div className="col">
        <div className="card" onClick={()=> handleNavigate(hero.id)}>
            <div className='row no-gutters'>
                <div className="col-4">
                    <img src={imagePath} alt={hero.name} className="card-img"/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className='card-title'>{hero.superhero}</h5>
                        <p className='card-text'>{hero.alter_ego}</p>
                        <p className='card-text'>
                            <small className='text-muted'>{hero.first_appearance}</small>
                        </p>

                        {/* <Link to={`/hero/${hero.id}`}>
                            Mas...
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
