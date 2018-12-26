import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class listOptions extends Component {

    render() {
        return (
            <div className="container">
            <br/><br/><br/><br/><br/>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Link to={`/list/UsersTopFollowers`} style={{ textDecoration: 'none' }}>
                            <div className="card text-white bg-success mb-3">
                                <div className="card-header">Opção 1</div>
                                <div className="card-body">
                                    <p className="card-text" align="center">5 primeiros usuários com maior quantidade de seguidores</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to={`/list/TotalPostsOrderByHour`} style={{ textDecoration: 'none' }}>
                                <div className="card text-white bg-success mb-3">
                                <div className="card-header">Opção 2</div>
                                <div className="card-body">
                                    <p className="card-text" align="center">Total de Posts por Hora do Dia indiferente da HashTag</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to={`/list/TotalPostsByTagAndCountry`} style={{ textDecoration: 'none' }}>
                            <div className="card text-white bg-success mb-3">
                                <div className="card-header">Opção 3</div>
                                <div className="card-body">
                                    <p className="card-text" align="center">Total de Posts por HashTag, idioma e localização</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default listOptions;