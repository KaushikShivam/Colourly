import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
  ColorBox: {
    width: '20%',
    height: props => (!props.showLink ? '50%' : '25%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1'
    }
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    color: 'rgba(0, 0, 0, 0.726)',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: 'black',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: '0'
  },
  whiteColor: {
    color: 'white'
  },
  boxContent: {
    position: 'absolute',
    padding: 10,
    width: '100%',
    left: 0,
    bottom: 0,
    color: 'black',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 12
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: 1,
    transform: 'scale(50)',
    zIndex: 10,
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'black',
    '& h1': {
      fontWeight: 400,
      textShadow: '1px 2px solid',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      padding: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: 100
    }
  },
  showCopyMsg: {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 25,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};

const ColorBox = ({ background, name, moreUrl, showLink, classes }) => {
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
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`${classes.seeMore} ${contrast}`}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
