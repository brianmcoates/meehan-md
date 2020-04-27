import React from 'react'
import PropTypes from 'prop-types'
import { ResourcesPageTemplate } from '../../templates/resources-page'

const ResourcesPagePreview = ({ entry, getAsset }) => {
  const entryBooks = entry.getIn(['data', 'books']);
  const books = entryBooks ? entryBooks.toJS() : [];

  const entryProducts = entry.getIn(['data', 'books']);
  const products = entryProducts ? entryProducts.toJS() : [];

  return (
    <ResourcesPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={entry.getIn(['data', 'introduction'])}
      books={books}
      products={products}
    />
  )
}

ResourcesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ResourcesPagePreview
