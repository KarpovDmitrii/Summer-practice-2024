import { useState } from 'react';
import './search_string.scss'

type SearchInputProps={
    placeholder:string
}

export const SearchString:React.FC<SearchInputProps> = ({placeholder}) => {
    const [searchValue,setSearchValue]=useState<string>('')
    return ( 
       <input onChange={(e)=>{setSearchValue(e.target.value)}} value={searchValue} type="text" className='search__string' placeholder={placeholder} />
     );
}
