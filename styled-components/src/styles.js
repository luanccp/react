import styled from 'styled-components'

export const Title = styled.h1`
    color: #f00;
    font-size: ${props => `${props.fontSize}px`};

    span{
        font-size: 12px
    }

`;

export const SmallTitle = styled(Title)`

    font-size: 15px;
    color: #00f;

`; 