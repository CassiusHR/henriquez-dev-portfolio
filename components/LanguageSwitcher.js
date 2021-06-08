import Link from 'next/link';
import { linkResolver, hrefResolver } from '../prismic-configuration';
import styled from 'styled-components'

const LangLink = styled.a`
  position:relative;
  display:flex;
  background-color: unset;
  background-image: unset;
  background-size: unset;
  background-repeat: unset;
  background-clip: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  padding:6px 12px;
  background:rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius:6px;
  position:relative;
  overflow:hidden;
  .lang-text{
    font-size:11px;
    line-height: 11px;
    letter-spacing:1px;
    font-weight:200;
    opacity:1;
    color:white;
  }
`

const AltLangs = ({ altLangs = [], currentLang }) =>
  altLangs.map((altLang) => {
    return (
      <Link
        locale={altLang.lang}
        as={linkResolver(altLang)}
        href={hrefResolver(altLang)}
        passHref
      >
        <LangLink currentLang={currentLang}>{altLang.lang === 'en-us' ? <div className='lang-text'>Espanol</div> : <div className='lang-text'>English</div>}</LangLink>
      </Link>
    );
  });

const LanguageSwitcher = ({ altLangs, currentLang }) => <AltLangs altLangs={altLangs} currentLang={currentLang}/>;

export default LanguageSwitcher;