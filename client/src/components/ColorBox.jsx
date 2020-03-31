import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import styles from './../styles/ColorBox.styles';

const ColorBox = ({
  background,
  name,
  moreUrl,
  showingFullPalette,
  classes
}) => {
  const [copied, setCopied] = useState(false);

  const contrast =
    chroma.contrast(background, 'black') < 6 && classes.whiteColor;

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        ></div>
        <div
          className={`${classes.copyMsg} ${copied &&
            classes.showCopyMsg} ${contrast}`}
        >
          <h1 className={contrast}>copied!</h1>
          <p className={contrast}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={contrast}>{name}</span>
          </div>
          <button className={`${classes.copyButton} ${contrast}`}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`${classes.seeMore} ${contrast}`}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
