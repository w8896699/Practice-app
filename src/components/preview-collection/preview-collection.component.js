import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item.component';


const PreviewofCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">
      {title.toUpperCase()}
    </h1>
    <div className="itemPreview">
      {
               items.filter((item, index) => (index < 4))
                 .map((item) => (
                   <CollectionItem key={item.id} item={item} />
                 ))
               }
    </div>

  </div>
);
export default PreviewofCollection;
