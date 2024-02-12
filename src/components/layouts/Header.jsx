import { Link } from 'react-router-dom';
import '@styles/components/header.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { id } = useParams();
  const [profileId, setProfileId] = useState();

  /* jus to fast swap between users on demo. remove afterwards */
  useEffect(() => {
    setProfileId(+id === 12 ? 18 : 12);
  }, [id]);

  return (
    <header className='header'>
      <Link to='/' />

      <nav>
        <ul className='header__menu'>
          <li>
            <Link>Accueil</Link>
          </li>
          <li>
            <Link to={`profile/${profileId}`}>Profil</Link>
          </li>
          <li>
            <Link to='settings'>Réglages</Link>
          </li>
          <li>
            <Link to='community'>Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
