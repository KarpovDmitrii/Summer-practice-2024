import { Footer } from '../footer';
import { Header } from '../header';
import { ListItem } from '../list_item';
import { SearchButton } from '../search_button';
import { SearchString } from '../search_string';

import { charactersArray } from '../mock';
import './characters.scss'
export const Caharacters = () => {
  return (
    <div className="characters">
      <Header />
      <h2 className="characters__title">
        Characters<span className="characters__count">(111)</span>
      </h2>
      <div className="characters__field">
        <SearchString placeholder="Search Characters by name" />
        <SearchButton />
      </div>
      <div className="characters__items">
        {charactersArray.map((c) => (
          <ListItem
            id={c.id}
            Image={c.Image}
            title={c.title}
            entity="characters"
            description={c.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};