import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin: 0 -10px;
  margin-top: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 16px;
  background-color: var(--second-bg-color);
  color: var(--main-text-color);
`;

export const TextFooter = styled.div`
  
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--second-text-color);
`;
