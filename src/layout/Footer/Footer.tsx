import { StyledFooter, FooterLink, TextFooter } from './Footer.styles';

const Footer: React.FC = () => (
  <StyledFooter>
    <TextFooter>
      2022 | by Maks Epifanov | Open Source |
      <FooterLink href="https://github.com/MaksEpifanov/SprightlyAnime" target="_blank">
        {' '}
        GitHub
      </FooterLink>
    </TextFooter>
    <TextFooter>
      This app was created using
      {' '}
      <FooterLink href="https://docs.api.jikan.moe/" target="_blank">JIKAN API </FooterLink>
      (Unofficial MyAnimeList API).
    </TextFooter>
    <TextFooter>
      Inspired from
      {' '}
      <FooterLink href="https://9anime.id/" target="_blank">9anime.id</FooterLink>
    </TextFooter>
  </StyledFooter>
);

export default Footer;
