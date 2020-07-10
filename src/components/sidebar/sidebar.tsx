import React, {useEffect,useState} from 'react'
import { MainSidebar, Upload, Search, ImagesBox,Img ,Loader} from './sidebar.styles'
import {createClient, Photo} from 'pexels'
interface IProps {
  handleSearchTyping(event: React.FormEvent<HTMLInputElement>): void;
}
const client = createClient(
  '563492ad6f91700001000001914b59e5927a40c88f627a12c2d48238'
);
export interface SideBarProps {
    
}

const SideBar: React.SFC<SideBarProps> = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setLoading(true);
        client.photos.curated({ per_page: 10 }).then(photos => {
            changeImages(photos)
        });
    }, [])

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>{
        setSearchValue(e.currentTarget.value);
    }
    const changeImages = (photos:{}) => {
        let myPhotos = photos as any;
        let myPhotosArr = myPhotos.photos;
        let images = myPhotosArr.map((photoObject: Photo) => photoObject);
        setImages(images);
        setLoading(false);
    }
    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        let query = searchValue;
        client.photos.search({ query, per_page: 10 }).then((photos) => {
            changeImages(photos)
        });
    };
    return (
      <MainSidebar>
        <span>Select image</span>
        <Upload>Upload Image</Upload>
        <form onSubmit={search}>
          <Search
            onChange={handleInputChange}
            placeholder="Search for an image"
          />
        </form>
        {loading ? <Loader className="lds-dual-ring" id="loading"></Loader> :
          <ImagesBox>
          {images.map((image: Photo) => {
            return <Img key={image.id} src={image.src.tiny}></Img>;
          })}
          </ImagesBox>}
        
      </MainSidebar>
    );
}

export default SideBar;