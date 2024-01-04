// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnailItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickThumbnailItem = () => {
    clickThumbnailItem(id)
  }

  const ThumbnailClassName = isActive ? 'atn' : 'tn'

  return (
    <li>
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={ThumbnailClassName}
        onClick={onClickThumbnailItem}
      />
    </li>
  )
}

export default ThumbnailItem
