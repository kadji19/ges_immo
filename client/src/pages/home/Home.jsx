import React from 'react';
import './home.css';
import { BiMap, BiBed, BiBath } from "react-icons/bi";
import illustration1 from '../../asset/illustration1.png';
import illustration2 from '../../asset/illustration2.png';
import illustration3 from '../../asset/illustration3.png';
import propertie1 from '../../asset/image (1).jpeg';
import propertie2 from '../../asset/image(2).jpeg';
import propertie3 from '../../asset/image(3).jpeg';
import LeftArrow from "../../asset/left-arrow.svg"
import RightArrow from "../../asset/right-arrow.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        lazyLoad: true,
        focusOnSelect: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
             slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
             slidesToShow: 1,
            }
           }
        ]
      };
    
    return (
        <div >
            <section className='banner'>
                <div className="banner_text" data-aos="zoom-in">
                    <div className="banner_text_title">
                        <strong>Acheter et vendre des biens immobiliers</strong>
                    </div>
                    <div className="banner_text_text">
                        <span className='text_para'>Gérez vos biens immobiliers simplement avec notre application innovante. Propriétaire, locataire ou gestionnaire, profitez d'une expérience utilisateur optimale et d'une gestion efficace.</span>
                    </div>
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

            <section className="home_illustration" data-aos="zoom-in-up">
                <div className="card_home">
                    <div className="card_image">
                        <img src={illustration1} alt="" />
                    </div>
                    <div className="title">
                        <h3>Apprenez où que vous soyez</h3>
                    </div>
                    <div className="des">
                        <p>Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !</p>
                    </div>
                </div>
                <div className="card_home">
                    <div className="card_image">
                        <img src={illustration2} alt="" />
                    </div>
                    <div className="title">
                        <h3>Apprenez où que vous soyez</h3>
                    </div>
                    <div className="des">
                        <p>Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !</p>
                    </div>
                </div>
                <div className="card_home">
                    <div className="card_image">
                        <img src={illustration3} alt="" />
                    </div>
                    <div className="title">
                        <h3>Apprenez où que vous soyez</h3>
                    </div>
                    <div className="des">
                        <p>Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !</p>
                    </div>
                </div>
            </section>

            <section className='home_container_propreties_slider'>
                <Slider className='home_container_propreties_s' {...settings}>
                    <div className="home_propreties_card">
                        <div className="propreties_card_image">
                            <img src={propertie1} alt="" />
                        </div>
                        <div className="propreties_card_text">
                            <div className='propreties_card_text_des'>
                                <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                                <div className="propreties_card_text_address">
                                <BiMap color='#0fb45f' className='icon_prperty'/>
                                    <span className="address">Seaside Serenity Villa</span>
                                </div>
                            </div>
                            <div className="propreties_card_text_nbrroom">
                                <div className="card_text_nbrroom_bb">
                                <BiBed color='#5B5B5B' className='icon_prperty'/>
                                    <span>4-Pièce</span>
                                </div>
                                <div className="card_text_nbrroom_bb">
                                <BiBath color='#5B5B5B' className='icon_prperty'/>
                                    <span>3-salle de bain</span>
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
                    <div className="home_propreties_card">
                        <div className="propreties_card_image">
                            <img src={propertie2} alt="" />
                        </div>
                        <div className="propreties_card_text">
                            <div className='propreties_card_text_des'>
                                <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                                <div className="propreties_card_text_address">
                                    <BiMap color='#0fb45f' className='icon_prperty'/>
                                    <span className="address">Seaside Serenity Villa</span>
                                </div>
                            </div>
                             <div className="propreties_card_text_nbrroom">
                                <div className="card_text_nbrroom_bb">
                                    <BiBed color='#5B5B5B' className='icon_prperty'/>
                                    <span>4-Pièce</span>
                                </div>
                                <div className="card_text_nbrroom_bb">
                                    <BiBath color='#5B5B5B' className='icon_prperty'/>
                                    <span>3-salle de bain</span>
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
                    <div className="home_propreties_card">
                        <div className="propreties_card_image">
                            <img src={propertie3} alt="" />
                        </div>
                        <div className="propreties_card_text">
                            <div className='propreties_card_text_des'>
                                <span>Apprenez des experts du secteur et améliorez vos compétences</span>
                                <div className="propreties_card_text_address">
                                <BiMap color='#0fb45f' className='icon_prperty'/>
                                    <span className="address">Seaside Serenity Villa</span>
                                </div>
                            </div>
                            <div className="propreties_card_text_nbrroom">
                                <div className="card_text_nbrroom_bb">
                                    <BiBed color='#5B5B5B' className='icon_prperty'/>
                                    <span>4-Pièce</span>
                                </div>
                                <div className="card_text_nbrroom_bb">
                                    <BiBath color='#5B5B5B' className='icon_prperty'/>
                                    <span>3-salle de bain</span>
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
                </Slider>
            </section>
        </div>
    );
}

export default Home;