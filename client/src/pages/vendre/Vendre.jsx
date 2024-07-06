import React from 'react'
import './vendre.css'
import 'boxicons'
import propertie1 from '../../asset/image (1).jpeg'
import propertie2 from '../../asset/image(2).jpeg'
import propertie3 from '../../asset/image(3).jpeg'

const Vendre = () => {
  return (
    <div className='vendre'>
        <section className='banner_vendre'>
            <div className="banner_text_title">
                <strong> Propriété à vendre</strong>
                <span>Trouve la maison de tes rêves</span>
            </div>
        </section>
        <section className='search'>
                <div className='search_box'>
                    <form className='search_form'>
                        <div className="search_form_controle">
                            <label htmlFor="">Ville</label>
                            <select className="search_form_controle_select" name="" id="">
                                <option value="">choisir une ville</option>
                            </select>
                        </div>
                        <div className="search_form_controle">
                            <label htmlFor="">Type de propriétée</label>
                            <select className="search_form_controle_select" name="" id="">
                                <option value="">choisir une type de propriétée</option>
                            </select>
                        </div>
                        <div className="search_form_controle">
                            <label htmlFor="">Type de transaction</label>
                            <select className="search_form_controle_select" name="" id="">
                                <option value="">choisir un type de transaction</option>
                            </select>
                        </div>
                        <button className='search_form_btn'>Recherche</button>
                    </form>
                </div>
        </section>
        <section className='home_container_propreties'>
            <div class="home_propreties_card">
                <div class="propreties_card_image">
                    <img src={propertie1} alt=""/>
                </div>
                <div class="propreties_card_text">
                    <div className='propreties_card_text_des'>
                        <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                        <div className="propreties_card_text_address">
                            <box-icon name='map' type='solid' color='#0fb45f'></box-icon>
                            <span className="address">Seaside Serenity Villa</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_nbrroom">
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bed'></box-icon>
                            <span>4-Bedroom</span>
                        </div>
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bath'></box-icon>
                            <span>3-Bathroom</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_pd">
                        <div className="card_text_pd_price">
                            <span>Prix</span>
                            <span className="text_price">25000</span>
                        </div>
                        <button className='search_form_btn'>details</button>
                    </div>
                    
                </div>
            </div>
            <div class="home_propreties_card">
                <div class="propreties_card_image">
                    <img src={propertie2} alt=""/>
                </div>
                <div class="propreties_card_text">
                    <div className='propreties_card_text_des'>
                        <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                        <div className="propreties_card_text_address">
                            <box-icon name='map' type='solid' color='#0fb45f'></box-icon>
                            <span className="address">Seaside Serenity Villa</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_nbrroom">
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bed'></box-icon>
                            <span>4-Bedroom</span>
                        </div>
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bath'></box-icon>
                            <span>3-Bathroom</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_pd">
                        <div className="card_text_pd_price">
                            <span>Prix</span>
                            <span className="text_price">25000</span>
                        </div>
                        <button className='search_form_btn'>details</button>
                    </div>
                    
                </div>
            </div>
            <div class="home_propreties_card">
                <div class="propreties_card_image">
                    <img src={propertie3} alt=""/>
                </div>
                <div class="propreties_card_text">
                    <div className='propreties_card_text_des'>
                        <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                        <div className="propreties_card_text_address">
                            <box-icon name='map' type='solid' color='#0fb45f'></box-icon>
                            <span className="address">Seaside Serenity Villa</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_nbrroom">
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bed'></box-icon>
                            <span>4-Bedroom</span>
                        </div>
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bath'></box-icon>
                            <span>3-Bathroom</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_pd">
                        <div className="card_text_pd_price">
                            <span>Prix</span>
                            <span className="text_price">25000</span>
                        </div>
                        <button className='search_form_btn'>details</button>
                    </div>
                    
                </div>
            </div>
            <div class="home_propreties_card">
                <div class="propreties_card_image">
                    <img src={propertie1} alt=""/>
                </div>
                <div class="propreties_card_text">
                    <div className='propreties_card_text_des'>
                        <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                        <div className="propreties_card_text_address">
                            <box-icon name='map' type='solid' color='#0fb45f'></box-icon>
                            <span className="address">Seaside Serenity Villa</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_nbrroom">
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bed'></box-icon>
                            <span>4-Bedroom</span>
                        </div>
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bath'></box-icon>
                            <span>3-Bathroom</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_pd">
                        <div className="card_text_pd_price">
                            <span>Prix</span>
                            <span className="text_price">25000</span>
                        </div>
                        <button className='search_form_btn'>details</button>
                    </div>
                    
                </div>
            </div>
            <div class="home_propreties_card">
                <div class="propreties_card_image">
                    <img src={propertie1} alt=""/>
                </div>
                <div class="propreties_card_text">
                    <div className='propreties_card_text_des'>
                        <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                        <div className="propreties_card_text_address">
                            <box-icon name='map' type='solid' color='#0fb45f'></box-icon>
                            <span className="address">Seaside Serenity Villa</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_nbrroom">
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bed'></box-icon>
                            <span>4-Bedroom</span>
                        </div>
                        <div className="card_text_nbrroom_bb">
                            <box-icon type='solid' name='bath'></box-icon>
                            <span>3-Bathroom</span>
                        </div>
                    </div>
                    <div className="propreties_card_text_pd">
                        <div className="card_text_pd_price">
                            <span>Prix</span>
                            <span className="text_price">25000</span>
                        </div>
                        <button className='search_form_btn'>details</button>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Vendre