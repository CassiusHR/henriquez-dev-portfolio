import Link from 'next/link';
import { linkResolver, hrefResolver } from '../prismic-configuration';
import styled from 'styled-components'
import CL from '../public/CL.svg'
import US from '../public/US.svg'

const LangLink = styled.a`
  position:relative;
  display:flex;
  :after{
    content:"${props => props.currentLang === 'en-us' ? "Espanol" : "English"}";
    position:absolute;
    top:24px;
    left:0px;
    background:rgba(0,0,0,0.2);
    color:rgba(250,250,250,0.6);
    opacity:0;
    font-size:10px;
    pointer-events:none;
    font-weight:100;
    transition:all 0.3s ease;
    letter-spacing: 1px;
    padding:5px;
    transform: translate3d(-13px, 5px, 0px);
    border-radius:3px;
  }
  :hover:after{
    opacity:1;
    transform: translate3d(-13px, 0px, 0px);
  }
  svg{
    width:24px;
    height:18px;
    border-radius:4px;
  }
`

const AltLangs = ({ altLangs = [], currentLang }) =>
  altLangs.map((altLang) => {
    return (
      <li className="language-switcher" key={altLang.id}>
        <Link
          locale={altLang.lang}
          as={linkResolver(altLang)}
          href={hrefResolver(altLang)}
          passHref
        >
          <LangLink currentLang={currentLang}>{altLang.lang === 'en-us' ? <US/> : <CL/>}</LangLink>
        </Link>
      </li>
    );
  });

const LanguageSwitcher = ({ altLangs, currentLang }) => <AltLangs altLangs={altLangs} currentLang={currentLang}/>;

export default LanguageSwitcher;