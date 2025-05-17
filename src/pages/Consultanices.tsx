
// import React, { useEffect, useState } from 'react';
// import { message, Spin, Typography } from 'antd';
// import ApiService from '../services/ApiService';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styled from 'styled-components';

// const Consultancy: React.FC = () => {
// const [consultancies, setConsultancies] = useState<any[]>([]);
// const [loading, setLoading] = useState<boolean>(true);

// const fetchConsultancies = async () => {
//     try {
//         const response = await ApiService.get(`/consultanicie/`);
//         setConsultancies(response.data || []);
//     } catch (err) {
//         message.error('Failed to load consultancies');
//     } finally {
//         setLoading(false);
//     }
// };

// useEffect(() => {
//     fetchConsultancies();
// }, []);

//     const sliderSettings = {
//         infinite: true,
//         speed: 3000,             // slower, smooth movement
//         autoplay: true,
//         autoplaySpeed: 0,        // needed for smooth scroll
//         cssEase: 'linear',       // essential for seamlessness
//         slidesToScroll: 1,
//         variableWidth: true,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false
//     };

//     const StyledSlider = styled(Slider)`
//     .slick-track {
//       display: flex !important;
//       align-items: center;
//     }

//     .slick-slide {
//       display: flex !important;
//       justify-content: center;
//       padding: 0 10px; /* consistent spacing without visible gap */
//     }

//     .slick-slide > div {
//       display: flex !important;
//       justify-content: center;
//     }
//   `;


//     const ImageWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 10px 16px; /* Increased horizontal padding */
//     width: 140px; /* Slightly wider to prevent cutoff */

//     img {
//         width: 100px;
//         height: 100px;
//         object-fit: cover;
//         border-radius: 50%;
//         border: 1px solid #ccc;
//         margin-bottom: 8px;
//         filter: grayscale(100%);
//         transition: filter 0.3s ease-in-out;

//         &:hover {
//             filter: grayscale(0%);
//         }
//     }

//     h4 {
//         margin: 0;
//         font-size: 12px;
//         text-align: center;
//     }

//     p {
//         margin: 0;
//         font-size: 10px;
//         color: #666;
//         text-align: center;
//     }
// `;


//     return (
// <div style={{ padding: '40px 20px', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
//     <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 32, color: '#e1780f' }}>
//         Educational Consultancies Associated With Us
//     </Typography.Title>

//     {loading ? (
//         <div style={{ padding: '20px', marginBottom: '16px', width: '100%' }}>
//             <Spin size="large" />
//         </div>
//     ) : consultancies.length > 0 ? (
//         <StyledSlider {...sliderSettings}>
//             {consultancies.map((item, index) => (
//                 <ImageWrapper key={index}>
//                     <img
//                         src={item.fileUrl}
//                         alt={item.title}
//                         onError={(e) => (e.currentTarget.style.display = 'none')}
//                     />
//                     {/* <div>
//                         <h4>{item.title}</h4>
//                         <p>{item.description}</p>
//                     </div> */}
//                 </ImageWrapper>
//             ))}
//         </StyledSlider>
//     ) : (
//         <p>No consultancies found.</p>
//     )}
// </div>
//     );
// };

// export default Consultancy;
import React, { useEffect, useState } from 'react';
import { message, Spin, Typography } from 'antd';
import ApiService from '../services/ApiService';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const TitleWrapper = styled.div`
  flex: 0 0 250px; /* fixed width for the title */
  display: flex;
  align-items: center;
  color: #e1780f;
  font-weight: 600;
  font-size: 24px;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  flex: 1; /* take remaining width */
  position: relative;
`;
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContent = styled.div`
  display: flex;
  gap: 24px;
  width: max-content;
  animation: ${scrollAnimation} 30s linear infinite;
`;



const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 140px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
`;

const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LoaderWrapper = styled.div`
  padding: 20px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;





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

    // Duplicate items to allow seamless loop
    const validConsultancies = consultancies.filter(c => !!c.fileUrl);
    const loopingItems = [...validConsultancies, ...validConsultancies];

    return (
        <Container>
            {loading ? (
                <LoaderWrapper>
                    <Spin size="large" />
                </LoaderWrapper>
            ) : consultancies.length > 0 ? (
                <CarouselRow>
                    <TitleWrapper>
                        Educational Consultancies Associated With Us
                    </TitleWrapper>
                    <CarouselWrapper>
                        <CarouselContent>
                            {[...consultancies, ...consultancies].map((item, index) => (
                                <ImageWrapper key={index}>
                                    <img
                                        src={item.fileUrl}
                                        alt={item.title}
                                        onError={(e) => (e.currentTarget.style.display = 'none')}
                                    />
                                </ImageWrapper>
                            ))}
                        </CarouselContent>
                    </CarouselWrapper>
                </CarouselRow>
            ) : (
                <p>No consultancies found.</p>
            )}
        </Container>
    );
}
export default Consultancy;