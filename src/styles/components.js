import styled from 'styled-components'

export const ResourceItem = styled.a`
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

export const ResourceHeading = styled.h2`
  margin-top: 32px;
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
  width: 100%;
`;

export const FlexBox = styled.div`
  padding: 32px 16px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
`