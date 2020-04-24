import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div class=" home col-md-6  ">
                <ul class="col-md-2 list-group ">
                    <li>
                        <Link className='li li1 list-group-item-action' to={"/introduction"}>INTRODUCTION</Link>
                    </li>
                    <li>
                        <Link className='li li2 list-group-item-action ' to={"/objectif"}>OBJECTIF</Link>
                    </li>
                    <li >
                        <Link className='li li3 list-group-item-action' to={"/atelier"}>ATELIER</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
