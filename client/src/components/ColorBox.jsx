import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';

const ColorBox = ({ background, name, moreUrl, showLink }) => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const contrast = chroma.contrast(background, 'black') < 6;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        ></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={contrast && 'white-color'}>{name}</span>
          </div>
          <button className={`copy-button ${contrast && 'white-color'}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${contrast && 'white-color'}`}>
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
