import React from 'react';
import './preview-collection.scss';
import { CollectionItem } from '../collection-item/collection-item.component';


const PreviewofCollection = ({ title, items }) => {
  console.log('hiahia', items);
  return (
    <div className="collection-preview">
      <h1 className="title">
        {title.toUpperCase()}
      </h1>
      <div className="itemPreview">
        {
               items.filter((item, index) => (index < 4))
                 .map(({ id, ...OtherItemProps }) => (
                   <CollectionItem key={id} {...OtherItemProps} />

                 ))
               }
      </div>

    </div>
  );
};
export default PreviewofCollection;
