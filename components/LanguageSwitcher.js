import Link from 'next/link';
import { linkResolver, hrefResolver } from '../prismic-configuration';

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
          <a className={`flag-icon-${altLang.lang.slice(-2)}`}>`flag-icon-${altLang.lang.slice(-2)}`</a>
        </Link>
      </li>
    );
  });

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />;

export default LanguageSwitcher;