import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CategoryCard from '../menu-card/general-category-card.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import './item-cards-container.style.scss';


const CardsContainer = ({ sections }) =>
  // console.log('asdfa',this.state.sections)
  (
    <div className="directory-menu">
      {
          sections.map(({
            id, ...otherSectionProps
          }) => (
            <CategoryCard
              key={id}
              {...otherSectionProps}
            />
          ))
        }
    </div>

  );
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(CardsContainer);
