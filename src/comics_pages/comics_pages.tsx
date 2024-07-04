import { Footer } from '../footer';
import { Header } from '../header';
import { comicsMock } from '..//mock';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { comicsArray } from '../mock';
import { useEffect } from 'react';
import './comics_pages.scss';

type details = {
    title: string;
    description: string;
    Image: string;
  };
  export const ComicsPages = () => {
    const { id } = useParams();
  
    const [comics, setComics] = useState<details | undefined>(undefined);
    useEffect(() => {
      const fetchData = async () => {
        if (id) {
          setComics(comicsArray[Number(id)]);
        }
      };
  
      fetchData();
    }, [id]);
  
    return (
      <div className="comics_pages">
        <Header />
        <div className="comics_pages__wrapper">
          <img src={comics?.Image} alt="" className="comics_pages__image" />
          <div className="character_pages__content">
            <div className="comics_pages__info">
              <h3 className="comics_pages__title">{comics?.title}</h3>
              <p className="comics_pages__description">{comics?.description}</p>
            </div>
            <div className="comics_pages__comics">
              <h5>Comics</h5>
              {comicsMock.map((comics) => (
                <a target="blank" href={comics.link}>
                  {comics.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };