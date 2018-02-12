import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import GalleryItem from '../GalleryItem/GalleryItem';
import $ from 'jquery';
import s from '../../style/sass/pages/_galleryItem.scss';
import ss from './../../assets/blueimp-gallery/css/blueimp-gallery.min.css';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
    this.currentDescription = this.currentDescription.bind(this);
  }
  componentDidMount() {
    $(document).keydown(function(e) {
      if(e.keyCode === 37 || e.keyCode === 39 ) {
        $('.large-description').css('visibility', 'hidden');
      }
    });
    $('.indicator').unbind('click').bind('click', event => {
      $('.large-description').css('visibility', 'hidden');
    });
    let links = document.getElementsByClassName('gallery');
    let title = '';
    $('.gallery').unbind('click').bind('click', event => {
      let catlargelist = document.getElementsByClassName("large-description");
      let cats = [].slice.call(document.getElementById("cat-items").childNodes);

      if(window.blueimp !== undefined && window.blueimp !== null ) {
        title = event.currentTarget.title;
        this.currentDescription(title, catlargelist, cats);
        window.blueimp.Gallery(links, {
          index: event.currentTarget,
          event: event
        });
        $('.next').unbind('click').bind('click', event => {
            catlargelist[0].innerHTML = '';
            $('.large-description').css('visibility', 'hidden');
        });
        $('.prev').unbind('click').bind('click', event => {
          catlargelist[0].innerHTML = '';
          $('.large-description').css('visibility', 'hidden');
        });
      }
    });
    $('.slides').unbind('click').bind('click', event => {
      $('.large-description').css('visibility', 'visible');
    });

  }

  renderItems() {
    return this.props.items.map((item, i) => {
      return <GalleryItem data-index={i} key={item.id} {...item} />;
    });
  }

  currentDescription (title, catlargelist, cats) {
    if(title === 'Bengal') {
      return catlargelist[0].innerHTML = cats[0].getElementsByTagName("h6")[0].innerHTML;
    } else if (title === 'Brusheard Lynx') {
      return catlargelist[0].innerHTML = cats[1].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'Sphynx') {
      return catlargelist[0].innerHTML = cats[2].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'Clouded Lepard') {
      return catlargelist[0].innerHTML = cats[3].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'Siamese') {
      return catlargelist[0].innerHTML = cats[4].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'Silver Savannah') {
      return catlargelist[0].innerHTML = cats[5].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'Tabby') {
      return catlargelist[0].innerHTML = cats[6].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'British Blue') {
      return catlargelist[0].innerHTML = cats[7].getElementsByTagName("h6")[0].innerHTML;
    }else if (title === 'Abyssinian') {
      return catlargelist[0].innerHTML = cats[8].getElementsByTagName("h6")[0].innerHTML;
    }
  }

  render () {

    return (
      <Aux>
        <div>
          <h1 className='page-header'>Cats breed across the globe.</h1>
          <div id="cat-items" className="row">
              {this.renderItems()}
          </div>
        </div>
      </Aux>
    );

  }
}

export default Gallery;
