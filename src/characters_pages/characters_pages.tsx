import { Header } from '../header';
import { Footer } from '../footer';
import { comicsMock } from '../mock';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { charactersArray } from '../mock';
import { useEffect } from 'react';
import './character_pages.scss';

type details = {
  title: string;
  description: string;
  Image: string;
};
export const CharacterPages = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<details | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setCharacter(charactersArray[Number(id)]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="character_pages">
      <Header />
      <div className="character_pages__wrapper">
        <img src={character?.Image} alt="" className="character_pages__image" />
        <div className="character_pages__content">
          <div className="character_pages__info">
            <h3 className="character_pages__title">{character?.title}</h3>
            <p className="character_pages__description">{character?.description}</p>
          </div>
          <div className="character_pages__comics">
            <h5>Comics</h5>
            {comicsMock.map((comics) => (
              <a target="blank" href={comics.link}>
                {comics.name}
              </a>
            ))}
          </div>
        </div>

      </div>
      <div className="character_pages__footer">
        <Footer />
      </div>
    </div>
  );
};