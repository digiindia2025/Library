import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://www.bing.com/images/search?view=detailV2&ccid=YJrDzHvl&id=B82CEB0157558E6B56A17A606216C857A44A960A&thid=OIP.YJrDzHvla1S5Twjws1xZEAHaEo&mediaurl=https%3a%2f%2fnphoto.com%2fsites%2fdefault%2ffiles%2f2019-08%2fGrand+Gallery+Galeria_9.jpg&exph=692&expw=1108&q=photo+gallery+book+name&simid=607987471149854498&FORM=IRPRST&ck=2A161C26E91C760C7AC926A6D69484F5&selectedIndex=2&itb=0" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?lebanon" alt=''/>
                
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery