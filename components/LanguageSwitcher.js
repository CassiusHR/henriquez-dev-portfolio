import Link from 'next/link';
import { linkResolver, hrefResolver } from '../prismic-configuration';
import CL from '../public/CL.svg'
import US from '../public/US.svg'

const AltLangs = ({ altLangs = [] }) =>
  altLangs.map((altLang) => {
    return (
      <li className="language-switcher" key={altLang.id}>
        <Link
          locale={altLang.lang}
          as={linkResolver(altLang)}
          href={hrefResolver(altLang)}
          passHref
        >
          <a>{altLang.lang === 'en-us' ? <US/> : <CL/>}</a>
        </Link>
      </li>
    );
  });

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />;

export default LanguageSwitcher;