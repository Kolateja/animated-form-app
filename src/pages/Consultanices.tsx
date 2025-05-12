
import React, { useEffect, useState } from 'react';
import { Card, message, Spin, Typography } from 'antd';
import ApiService from '../services/ApiService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
const Consultancy: React.FC = () => {
    const [consultancies, setConsultancies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchConsultancies = async () => {
        try {
            const response = await ApiService.get(`/consultanicie/`);
            setConsultancies(response.data || []);
        } catch (err) {
            message.error('Failed to load consultancies');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchConsultancies();
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 5000, // very slow animation
        autoplay: true,
        autoplaySpeed: 0, // no wait between slides
        cssEase: 'linear', // smooth continuous effect
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const StyledSlider = styled(Slider)`
    .slick-slide {
      padding: 0 !important;
      margin: 0 !important;
      display: flex !important;
      justify-content: center; /* Center the card inside the slide */
    }
  
    .slick-track {
      display: flex !important;
      align-items: center;
    }
  
    .slick-slide > div {
      margin: 0 !important;
      padding: 0 !important;
    }
  `;

    return (

        <div style={{ padding: 50, marginBottom: '16px', width: '100vw', margin: '0 auto' }}>
            <Typography.Title level={4} style={{ marginBottom: 24, marginRight: 16 }}>
                Educational Consultancies Associated With Us:
            </Typography.Title>

            {loading ? (
                <div style={{ padding: '20px', marginBottom: '16px', width: '100%' }}>
                    <Spin size="small" />
                </div>
            ) : consultancies.length > 0 ? (
                <StyledSlider  {...sliderSettings}>
                    {consultancies.map((item, index) => (
                        <div
                            key={index}
                        // style={{
                        //     width: '80px', // Set a fixed width for consistency
                        //     height: '80px',
                        //     backgroundColor: '#fff',
                        //     display: 'flex',
                        //     alignItems: 'center',
                        //     justifyContent: 'start',
                        //     padding: '8px',
                        //     border: '1px solid #eee',
                        //     borderRadius: '8px',
                        //     gap: '0px',
                        //     boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                        // }}
                        >
                            <img
                                src={item.fileUrl}
                                alt={item.title}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                    border: '1px solid #ccc',
                                }}
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ margin: 0, fontSize: '12px' }}>{item.title}</h4>
                                <p style={{ margin: 0, fontSize: '10px', color: '#666' }}>{item.description}</p>
                            </div>
                        </div>

                    ))}
                </StyledSlider >
            ) : (
                <p>No consultancies found.</p>
            )}
        </div>

    );
};

export default Consultancy;





