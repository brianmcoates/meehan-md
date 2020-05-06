import styled from 'styled-components'

export const ResourceItem = styled.a`
  @keyframes slidein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  animation: slidein .85s;
  width: 300px;
  margin-right: 48px;
  transition: .3s;
  &:hover {
    transform: scale(1.1);
    transition: .3s;
  }
  &:last-child{
    margin-right: 0;
  }
`;

export const ResourceCategory = styled.span`
  margin-left: 8px;
  padding: 4px 8px;
  font-size: 20px;
  cursor: pointer;
  color: #727272;
  transition: .3s ease-in;
  
  &:first-child {
    margin-left: 126px;
  }
  
  &.active {
    color: #363636;
    font-family: 'Proxima Nova Semibold';
    border-bottom: 2px solid #363636; 
  }
  
`;

export const ResourceHeading = styled.h2`
  margin-bottom: 0;
  display: inline-block;
  color: ${props => props.theme.purple};
`;

export const ResourceItemImg = styled.img`
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25)
`;

export const ResourceItemDescription = styled.p`
  color: #727272;
`;

export const ResourceToolBar = styled.div`
  max-width: 996px;
  margin: auto;
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  padding: 32px 16px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
`