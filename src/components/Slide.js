// import React from "react";
// import styled from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Container = styled.div`
//   overflow: hidden;
// `;

// const StyledSlider = styled(Slider)`
//   .slick-slide div {
//     outline: none;
//   }
// `;

// const ImageContainer = styled.div`
//   margin: 0 16px;
// `;

// const Image = styled.img`
//   max-width: 100%;
//   max-height: 100%;
// `;

// const imgUrl = { url : {}};

// const items = [
//   { id: 1, url: imgUrl.url },
//   { id: 2, url: imgUrl },
//   { id: 3, url: imgUrl },
//   { id: 4, url: imgUrl },
//   { id: 5, url: imgUrl },
//   { id: 6, url: imgUrl },
//   { id: 7, url: imgUrl },
//   { id: 8, url: imgUrl },
//   { id: 9, url: imgUrl },
//   { id: 10, url: imgUrl },
// ];

// export default class SimpleSlider extends React.Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       centerMode: true,
//     };
//     return (
//       <Container>
//         <h2> Single Item</h2>
//         <StyledSlider {...settings}>
//           {items.map((item) => {
//             return (
//               <div key={item.id}>
//                 <ImageContainer>
//                   <Image src={item.url} />
//                 </ImageContainer>
//               </div>
//             );
//           })}
//         </StyledSlider>
//       </Container>
//     );
//   }
// }
