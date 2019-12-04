import React from "react"
import { Link, styles } from "refire-app"
import AuthenticationMenu from "./AuthenticationMenu"
import BoardLink from "./BoardLink"
import SettingsButton from "./SettingsButton"

import logo from "../Assets/maya-purple@2x.png"

const TopBar = ({
  siteName,
  authenticatedUser,
  board,
  boardKey,
  threadKey,
  toggleSettings,
  user,
  styles,
  theme,
}) => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topbar}>
        <h1 className={styles.header} style={{ paddingTop: "0px" }}>
          <div className="logo-wrap">
            <Link to="/" className={styles.link}>
              <img className="logo" src={logo} alt={siteName} />
            </Link>
            <div className="divider"></div>
            <div className="forum-title">
              Forum
              {board && board.title && (
                <Link to={`/board/${boardKey}`}> > {board.title}</Link>
              )}
            </div>
          </div>

          {/* <BoardLink
            board={board}
            boardKey={boardKey}
            threadKey={threadKey}
            style={styles.link}
          /> */}
        </h1>
        <div className={styles.buttonsContainer}>
          {/* <SettingsButton
            user={user}
            toggleVisible={toggleSettings}
            styles={theme.SettingsButton}
          /> */}
          <AuthenticationMenu
            user={authenticatedUser}
            styles={theme.AuthenticationMenu}
          />
        </div>
      </div>
    </div>
  )
};

const css = {
  topBarContainer: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    left: 0,
    right: 0,
    height: "64px",
    zIndex: 1,
    background: "#fdfdfd",
    boxShadow: "rgba(62, 57, 107, 0.1) 0px 9px 68px 0px",
  },
  topbar: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    maxWidth: "940px",
    margin: "0 auto",
  },
  header: {
    display: "inline-block",
    margin: 0,
    paddingTop: "12px",
    fontSize: "14px",
    "@media (min-width: 480px)": {
      paddingTop: "5px",
      fontSize: "20px",
    },
  },
  buttonsContainer: {
    position: "absolute",
    right: "20px",
    top: "8px",
  },
  link: {
    color: "#3c9def",
  },
}

export default styles(css, TopBar)
