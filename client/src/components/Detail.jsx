import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions";
import PropTypes from "prop-types";


export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

 useEffect(()=>{
 dispatch(getDetail(id)) // de esta forma accedo al ID de ese detalle
}, [dispatch, id])

const myVideogame = useSelector((state)=> state.detail)

return(
    
        <div>

                    <Link to= '/home'>
                        <button className="btn btn-back">Back</button>
                    </Link>


            { myVideogame && Object.keys(myVideogame).length > 0 ?(

            <div>
                
            <h1 className="title-detail"> {myVideogame.name}</h1>
                <img src={myVideogame.background_image} alt={myVideogame.name} width='500px' height='350px' />
                <h2 className="title-detail">Generos:</h2>
                {myVideogame.genres?.map((e)=>(
                    <p key={e.id}>{e}</p>
                ))}
               <h2 className="title-detail">Descripción:</h2>            
                 <div className="description-detail" dangerouslySetInnerHTML={{__html: myVideogame.description}}></div>
                 <h2 className="title-detail">Fecha de lanzamiento:</h2>
        <p>{myVideogame.released}</p>
        <h2 className="title-detail">Rating:</h2>
        <p>{myVideogame.rating}</p>
                    <h2 className="title-detail">Plataformas:</h2>
                    {myVideogame.platforms?.map((e)=>(
                        <p key={e.id}>{e}</p>
                    ))}
                    </div> ): (

                    <p className='lds-dual-ring loader' >Cargando...</p>

                    )}
                    
        </div>
);
}
Detail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    myVideogame: PropTypes.object.isRequired,
};