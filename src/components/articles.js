import React from 'react'
import Navigation from './navigation.js'
import Widget from './Widget.js'



class Articles extends React.Component {
    render() {
        return(
            <>
            <Navigation />
            <div className="container">
                <Widget mediumRSSFeedLink="https://www.medium.com/feed/@jeffreyma" />
            </div>
            </>
        )
    }
}

export default Articles;