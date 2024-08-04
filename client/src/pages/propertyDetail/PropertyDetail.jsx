import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BiBed, BiBath } from "react-icons/bi";
import './propertyDetail.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserContext } from '../../context/UseContext';
import FormCandidat from '../formCandidat/FormCandidat';

const PropertyDetails = () => {
    const { isModalOpen, toggleModal, } = useContext(UserContext);
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [nav1, setNav1] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
                const propertyWithParsedImages = {
                    ...response.data,
                    images: JSON.parse(response.data.images)
                };
                setProperty(propertyWithParsedImages);
            } catch (error) {
                console.error("Erreur lors de la récupération de la propriété!", error);
            }
        };
        fetchProperty();
    }, [id]);

    useEffect(() => {
        setNav1(slider1);
    }, [slider1]);

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
        autoplaySpeed: 1000,
        lazyLoad: true,
        asNavFor: nav1,
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="next-slick-arrow rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className='property_detail'>
            <section className="property_detail_images">
            <div className="thumb-wrapper">
                    {property.images.map((image, idx) => (
                        <div
                            key={idx}
                            className={currentSlide === idx ? "active" : null}
                            onClick={() => {
                                slider1?.slickGoTo(idx);
                            }}
                        >
                            <img src={image} alt={`Thumbnail ${idx}`} />
                        </div>
                    ))}
                </div>
                <div className='slider'>
                    <Slider  {...settings} asNavFor={nav1} ref={(slider) => setSlider1(slider)}>
                        {property.images.map((image, index) => (
                            <div /* className='slider_div' */ key={index}>
                                <div className="img-body">
                                    <img src={image} alt={`Slide ${index}`} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                
            </section>
            <section className="property_detail_info">
                <section className="property_detail_info_detail">
                    <div className="info_detail_title">
                        <h3>{property.titre}</h3>
                        <div className='type_offre'>
                            <span>{property.type_offre}</span>
                        </div>
                    </div>
                    <div className="property_detail_description">
                        <h4>Description</h4>
                        <p>{property.description}</p>
                    </div>
                    <div className="property_detail_info_essentiel">
                        <div className="info_essentiel_nbrroom_bb">
                            <span className=''><BiBed color='#5B5B5B' className='icon_prperty' /> Pièce</span>
                            <span className="text_price">{property.nbr_chambre}</span>
                        </div>
                        <div className="info_essentiel_price">
                            <span><BiBath color='#5B5B5B' className='icon_prperty' /> salle de bain</span>
                            <span className="text_price">{property.nbr_toilette}</span>
                        </div>
                        <div className="info_essentiel_price">
                            <span>Prix</span>
                            <span className="text_price">{property.prix}{property.type_offre === 'Louer' ? '/mois' : ''}</span>
                        </div>
                    </div>
                </section>
                <section className="property_detail_info_form">
                    <div className="info_form1">
                        <span className='info_form_span1'>Adresse: </span><span>{property.adresse}</span>
                    </div>
                    <div className="info_form2"><span className='info_form_span1'>Ville: </span><span>{property.nom_ville}</span></div>
                    <div className="info_form1"><span className='info_form_span1'>Type de propriété: </span><span>{property.libelle}</span></div>
                    {property.type_offre === 'Louer' && (
                        <div className="info_form2">
                            <span className='info_form_span1'>Garantie: </span>
                            <span>{property.depot_garantie}</span>
                        </div>
                        )}
                    <div className="info_form2 cand_btn"><button className='info_form_btn' onClick={toggleModal}>Postuler</button></div>
                </section>
            </section>
            {isModalOpen && <FormCandidat id={id} /> }
        </div>
    );
};

export default PropertyDetails;
