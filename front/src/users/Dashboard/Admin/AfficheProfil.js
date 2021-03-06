import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import SideNavigation from './SlideNavigation';
import Footer from '../../../Components/Footer';

export default class AfficheProfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }

    componentDidMount() {
        axios.get(`http://localhost:8081/userArticle/${localStorage.id}`)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    activer() {
        axios.post(`http://localhost:8081/activer/${localStorage.id}`)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    ajout = event => {
        window.location = "/dashboard";
    }

    getInitialState = () => {
        return { checked: true }
    }

    handleCheck = (id) => {
        localStorage.setItem('checked', id);
    }

    liste() {
        var msg;
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }
        return <table className="table">
            <thead>
                <tr>
                    <th>TITRE</th>
                    <th>PRIX</th>
                    <th>DESCRIPTION</th>
                    <th>PHOTO</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <tr key={obj._id}>
                            <td>{obj.titre}</td>
                            <td>{obj.prix}</td>
                            <td>{obj.description}</td>
                            <td>
                                <img width="150px" height="50px" src={'http://localhost:8081/photos/' + obj.photo_profil} alt="pdp" />
                            </td>
                            <td>
                                <Link to={"/edit/" + obj._id} className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                           {
                                (obj.affiche === true) ? (
                                <button 
                                onClick={this.activer}>Activer</button>
                            ) : (
                                <button
                                onClick={this.activer} >Desactiver</button>
                                )
                            }
                            </td>
                        </tr>

                    })) : ('')
                }
            </tbody>
        </table>
    }
    render() {
        return (
            <div className="row">
                <div className='col-md-3 divA'>
                    <SideNavigation />
                </div>
                <div className=' col-md-8 divB'>
                    <TopNavigation />
                    <div className='row divC'>
                        <div className="container span1">

                            {this.liste()}
                        </div>
                    </div>
                    <div className='row divD span3 cher'>
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }
}