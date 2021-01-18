import React from 'react';

const News = () => {
    return (
        <div className="news">
            <div className="news1">
                <h2>ბარათების ამობეჭდვა</h2>
                <abbr title="ბარათების ამობეჭდვა">
                    <a href="https://naec.ge/#/ge/post/2159" >
                        <img className="news-img" src="https://naec.ge/uploads/postImage/2159/s.png" alt="d1" />
                    </a>
                </abbr>
            </div>
            <div className="news2">
                <h2>საგამოცდო ცენტრები</h2>
                <abbr title="საგამოცდო ცენტრები">
                    <a href="https://naec.ge/#/ge/post/2158" >
                        <img className="news-img" src="https://naec.ge/uploads/postImage/2158/105699896_295074684974214_8135846621128977693_n.jpg" alt="d1" />
                    </a>
                </abbr>
            </div>
        </div>
    )
}

export default News;