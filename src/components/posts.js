import React from "react";

export default function Posts(prop) {
    
    const json = prop.data;
  
    return prop.show ? (
        <div className="container">
            <div className='row text-center mt-4'>
            <div className='col-md-12'>
              <h1>Posts</h1>
            </div>
          </div>

          <div className='table-responsive'>
            <table className='table table-bordered border-secondary'>
              <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Post Completo</th>
              </tr>
              </thead>
              <tbody>
                {json.map((p) => (
                    <tr>
                        <th scope="row">{p.userId}</th>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
            
          
    ) : (
      false
    );
  }