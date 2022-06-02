import React from "react";


export default function Fotos(prop) {
   const json = prop.data; 
  return prop.show ? (
    
    <div className="container">
        {/*[API Imagenes]*/}
    <div className='row text-center mt-4'>
    <div className='col-md-12'>
      <h1>Imágenes</h1>
    </div>
    </div>

    { json.map((p) => (
        <div className='row text-center mt-4 border border-1 border-secondary rounded-2'>
            <div className='col-md-3 border border-1 border-secondary rounded-2'>
            
                <p>{p.albumId}</p>

            </div>
            <div className='col-md-3 border border-1 border-secondary rounded-2'>
            
                <p>{p.id}</p>

            </div>
            <div className='col-md-3 border border-1 border-secondary rounded-2'>
            
                <p>{p.title}</p>

            </div>
            <div className='col-md-3 border border-1 border-secondary rounded-2'>
            
                <img src={p.thumbnailUrl}/>

            </div>
        </div>
    ))}
    </div>
    
  ) : (false);
}