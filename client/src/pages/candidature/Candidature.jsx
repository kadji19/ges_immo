import React from 'react'
import { BiSearch, } from 'react-icons/bi'
import './candidature.css'
const Candidature = () => {
  return (
    <div className="main--content">
    <div className="property_container">
    <div className="property_header">
        <h3>Liste des  candidats</h3>
        <div className="search-box">
            <input type="text" placeholder='Search anything here...' />
            <BiSearch className='icon'/>
        </div>
    </div>
    <hr class="centered-hr"/>
    <div className="property_content">
        <div class="records table-responsive">
            <br />
        <div>
            <table width="100%">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th><span class="las la-sort"></span> Candidat</th>
                        <th><span class="las la-sort"></span> Propriété</th>
                        <th><span class="las la-sort"></span> nbr de personne</th>
                        <th><span class="las la-sort"></span> Contact</th>
                        <th><span class="las la-sort"></span> travail</th>
                        {/* <th><span class="las la-sort"></span> Message</th> */}
                        <th><span class="las la-sort"></span> ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="client">
                                <div class="client-info">
                                    <h4>Andrew Bruno</h4>
                                    <small>bruno@crossover.org</small>
                                </div>
                            </div>
                        </td>
                        <td>Seaside Serenity Villa</td>
                        <td>
                            1
                        </td>
                        <td>
                            19042022
                        </td>
                        <td>
                            pas encore de travail
                        </td>
                        <td>
                            <div class="actions">
                                <button className="btn_connex">Valider</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="client">
                                <div class="client-info">
                                    <h4>Exty Bruno</h4>
                                    <small>exty@crossover.org</small>
                                </div>
                            </div>
                        </td>
                        <td>Seaside Serenity Villa</td>
                        <td>
                            3
                        </td>
                        <td>
                            92402021
                        </td>
                        <td>
                            Avocat
                        </td>
                        <td>
                            <div class="actions">
                                <button className="btn_connex">Valider</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="client">
                                <div class="client-info">
                                    <h4>Andrew Bruno</h4>
                                    <small>bruno@crossover.org</small>
                                </div>
                            </div>
                        </td>
                        <td>Seaside Serenity Villa</td>
                        <td>
                            1
                        </td>
                        <td>
                            19042022
                        </td>
                        <td>
                            pas encore de travail
                        </td>
                        <td>
                            <div class="actions">
                                <button className="btn_connex">Valider</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="client">
                                <div class="client-info">
                                    <h4>Exty Bruno</h4>
                                    <small>exty@crossover.org</small>
                                </div>
                            </div>
                        </td>
                        <td>Seaside Serenity Villa</td>
                        <td>
                            3
                        </td>
                        <td>
                            92402021
                        </td>
                        <td>
                            Avocat
                        </td>
                        <td>
                            <div class="actions">
                                <button className="btn_connex">Valider</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="client">
                                <div class="client-info">
                                    <h4>Andrew Bruno</h4>
                                    <small>bruno@crossover.org</small>
                                </div>
                            </div>
                        </td>
                        <td>Seaside Serenity Villa</td>
                        <td>
                            1
                        </td>
                        <td>
                            19042022
                        </td>
                        <td>
                            pas encore de travail
                        </td>
                        <td>
                            <div class="actions">
                                <button className="btn_connex">Valider</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="client">
                                <div class="client-info">
                                    <h4>Exty Bruno</h4>
                                    <small>exty@crossover.org</small>
                                </div>
                            </div>
                        </td>
                        <td>Seaside Serenity Villa</td>
                        <td>
                            3
                        </td>
                        <td>
                            92402021
                        </td>
                        <td>
                            Avocat
                        </td>
                        <td>
                            <div class="actions">
                                <button className="btn_connex">Valider</button>
                            </div>
                        </td>
                    </tr>

                    
                </tbody>
            </table>
        </div>

        </div>
    </div>
    </div>
</div>
  )
}

export default Candidature