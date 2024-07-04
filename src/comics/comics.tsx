import { Footer } from '../footer';
import { Header } from '../header';
import { ListItem } from '../list_item';
import { SearchButton } from '../search_button';
import { SearchString } from '../search_string';

import { comicsArray } from '../mock';
import './comics.scss';
export const Comics = () => {
  return (
    <div className="comics">
      <Header />
      <h2 className="comics__title">
        Comics<span className="comics__count">(13000)</span>
      </h2>
      <div className="comics__field">
        <SearchString placeholder="Search comics by name" />
        <SearchButton />
      </div>
      <div className="comics__items">
        {comicsArray.map((c) => (
          <ListItem
            id={c.id}
            Image={c.Image}
            entity="comics"
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
