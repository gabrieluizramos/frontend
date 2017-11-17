import React from 'react'

import ListingTable from '../listing_table'

class ListingMainContent extends React.Component {
  render() {
    const { listing } = this.props

    return (
      <div className="main-content">
        <div>
          {listing.matterport_code &&
            <iframe width='787' height='480' src={`https://my.matterport.com/show/?m=${listing.matterport_code}`} frameborder='0' allowfullscreen></iframe>
          }

          <img src={process.env.REACT_APP_S3_BASE_URL + 'listings/original/' + listing.photo} alt="Listing Main Pic"/>
        </div>

        <div>
          <div>
            {listing.description}
          </div>

          <ListingTable listing={listing}/>
        </div>

        <style jsx>{`
          .main-content {
            align-items: flex-start;
            display: flex;
            margin-bottom: 40px;
            margin-top: 30px;
          }

          .main-content > * {
            float: left;
          }

          .main-content > div:first-of-type {
            width: 787px;
          }

          .main-content > div:last-of-type {
            width: 393px;
          }

          .main-content > div > div {
            margin: 20px 20px 40px;
          }

          iframe {
            margin-bottom: 40px;
          }

          img {
            width: 787px;
          }

          @media (max-width: 600px) {
            .main-content {
              flex-direction: column;
              width: 100vw;
            }
            .main-content img {
              width: 100vw;
            }
            .main-content  > div {
                width: 100vw;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}

export default ListingMainContent
