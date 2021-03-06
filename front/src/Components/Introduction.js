import React, { Component } from 'react';
import Home from './Home';
import Photo from './Photo';
import Navbar from './Navbar';
import Footer from './Footer';

class Introduction extends Component {

    render() {
        return (

            <div >
            <div class=" container-fluid ">
                <div class=" row ">
                    <Navbar />
                    <div class=" container ">
                        <div class=" row ">
                            <div class=" col-md-2 ">
                                <Photo />
                            </div>

                            <div class=" col-md-3 col-6 home">
                                <Home />
                            </div>

                            <div class=" col-md-6 col-5 ">

                                <div className=' row soratra1'>
                                    <p>
                                        Nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
                                        partir de 12 ans, mais aussi à des particuliers.
                                     </p>
                                    <p className=''>
                                        Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
                                        matières premières.
                                     </p>
                                    <p className=''>
                                        C’est la raison pour laquelle nous souhaitons booster cette activité.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class=" container-fluid  " id='div'>
                        <Footer />
                    </div>
            </div>

        );
    }
}

export default Introduction;
