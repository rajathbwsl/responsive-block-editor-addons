const { Component } = wp.element;
import classnames from "classnames";


export default class Save extends Component {
  render() {
    const { attributes } = this.props;
    const { imageUrl, altText, caption, captionText,sourceType, block_id } = attributes;

    return (
      <div className={classnames(
        this.props.className,
        "responsive-block-editor-addons-block-image",
        `block-${block_id}`
      )} >
        {sourceType === 'url' && imageUrl && (
          <div className="img-main-block" >
         <figure className="img-block" > 
          <img className="responsive-blocks-image-block" src={imageUrl} alt={altText}  />
          {caption && <figcaption className="responsive-img-caption" >{captionText}</figcaption>}
          </figure>
          </div>
        )}
        {sourceType !== 'url' && imageUrl && (
          <div className="img-main-block" >
          <figure className="img-block" >
            <img className="responsive-blocks-image-block" src={imageUrl} alt={altText}  />
            {caption && <figcaption className="responsive-img-caption" >{captionText}</figcaption>}
          </figure>
          </div>
        )}
      </div>
    );
  }
}
