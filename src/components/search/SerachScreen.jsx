import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm'
import { getHeroByName } from '../../services/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SerachScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //mi query de la url. Si no viene nada lo seteo como string vacio
  const {q = ''} = queryString.parse(location.search);

  // * asi el initial value de el formulario es el q viene en la url. Por defecto es vacio o si buscas despues le das valor
  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });

  const {searchText} = formValues;

  //uso el use memo para que solo se ejecute cuando cambie el valor de la busqueda y no siempre
  const heroesFilter = useMemo(() =>getHeroByName(q), [q]);

  const handleSearch = (e) =>{
      e.preventDefault();
      navigate(`/search/?q=${searchText}`);
  }


  return (
    <div>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>SearchForm</h4>
            <hr />
            <form onSubmit={handleSearch}>
              <input type="text" 
                  placeholder='Search hero' className='form-control' name='searchText' autoComplete='off' 
                  value={searchText} onChange={handleInputChange} />
              <button type='submit' className='btn btn-outline-info mt-3'>Search</button>
            </form>
          </div>

          <div className="col-7">
            <h4>SearchResults</h4>
            <hr />
            {
              (q === '') 
              ? <div className="alert alert-info text-center">Search a hero</div>
              : ( heroesFilter.length === 0 ) && <div className="alert alert-danger text-center">{`${q} not found`}</div>
            }
            {
              heroesFilter.map(hero => (
                <HeroCard hero={hero} key={hero.id} />
              ))
            }
          </div>
        </div>
    </div>
  )
}
