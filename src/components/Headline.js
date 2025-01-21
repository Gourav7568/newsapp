import React from 'react';

function stop(){
    const scrollingText = document.querySelector('.scrolling-text');
const scrollingContainer = document.querySelector('.scrolling-container');

scrollingContainer.addEventListener('mouseover', () => {
  scrollingText.style.animationPlayState = 'paused';
});

scrollingContainer.addEventListener('mouseout', () => {
  scrollingText.style.animationPlayState = 'running';
});

}

function Headline() {
    return (
        <div className="element-to-animate scrolling-container" onMouseOver={stop}>
            <div className="scrolling-text">
            <a href='google.com'>मोदी जी को हुआ बुखार सबकी हालत बीमार </a>
            <br/>
            <a href='google.com'>लालू यादव की सजा हुई माफ़ कोर्ट ने दी जमानत</a>
            </div>
        </div>
    );
}

export default Headline;