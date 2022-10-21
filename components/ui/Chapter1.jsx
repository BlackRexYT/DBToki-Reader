import React from 'react';
import LazyLoad from 'react-lazy-load';
import page1 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_001.jpg'
import page2 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_002.jpg'
import page3 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_003.jpg'
import page4 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_004.jpg'
import page5 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_005.jpg'
import page6 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_006.jpg'
import page7 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_007.jpg'
import page8 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_008.jpg'
import page9 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_009.jpg'
import page10 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_010.jpg'
import page11 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_011.jpg'
import page12 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_012.jpg'
import page13 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_013.jpg'
import page14 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_014.jpg'
import page15 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_015.jpg'
import page16 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_016.jpg'
import page17 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_017.jpg'
import page18 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_018.jpg'
import page19 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_019.jpg'
import page20 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_020.jpg'
import page21 from 'C:/Users/USER/Desktop/FrontEnd/Personal projects/dbtoki-website/src/assets/Chapter 1/DBToki_021.jpg'


{/* <img src="" alt="" className="doublePage" /> */}
{/* <img src="" alt="" className="singlePage" /> */}

const Chapter1 = () => {
    return (
        <figure className="chapter__pages">
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page1} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page2} alt="" className="doublePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page3} alt="" className="doublePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page4} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page5} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page6} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page7} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page8} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page9} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page10} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page11} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page12} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page13} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page14} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page15} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page16} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page17} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page18} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page19} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page20} alt="" className="singlePage page" />
            </LazyLoad>
            <LazyLoad offsetBottom={2000}>
                <img loading='lazy' src={page21} alt="" className="singlePage page" />
            </LazyLoad>
        </figure>
    );
}

export default Chapter1;
