import React, {useMemo} from 'react'
import { getHeroBYPublisher } from '../../services/getHeroByPublisher'
import { HeroCard } from './HeroCard';



export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=> getHeroBYPublisher(publisher), [publisher]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard hero={hero} key={hero.id}/>
                ))
            }
        </div>
    )
}
