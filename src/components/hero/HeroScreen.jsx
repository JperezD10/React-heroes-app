import React, {useMemo} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../services/getHeroById';


export const HeroScreen = () => {

    const {heroId} = useParams();

    const hero = useMemo(()=> getHeroById(heroId), [heroId]);

    const navigate = useNavigate();

    if (!hero) {
        return <Navigate to="/"/>
    }

    const imagePath = `/assets/${hero.id}.jpg`;

    const handleReturn = () =>{
      //con esto le digo que vaya a la anterior pagina
      navigate(-1);
    }

    return (
      <div className='row mt-5'>
          <div className='col-4'>
              <img src={imagePath} alt={hero.superhero} className="img-thumbnail animate__animated animate__bounceInLeft"/>
          </div>
          <div className="col-8">
              <h3>{hero.superhero}</h3>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <b>Alter ego:</b> {hero.alter_ego}
                </li>
                <li className='list-group-item'>
                    <b>Publisher:</b> {hero.publisher}
                </li>
                <li className='list-group-item'>
                    <b>First appearance:</b> {hero.first_appearance}
                </li>
              </ul>

              <h5 className='mt-3'>Characters</h5>
              <p>{hero.characters}</p>

              <button className='btn btn-outline-info' onClick={handleReturn}>
                  Return
              </button>
          </div>
      </div>
    )
}
