import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  width: 300px;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({src, alt, disabled}) => {
    return <StyledImg src={src} alt={alt} disabled={disabled}/>;
};

export default Img;