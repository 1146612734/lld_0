export const topicDetailStyle = (theme) => {
  return {
    header: {
      padding: 20,
      borderBottom: '1px solid #dfdfdf',
      '& H3': {
        fontSize: '22px',
        fontWeight: 700,
        margin: '8px 0',
        display: 'inline-block',
        verticalAlign: 'bottom',
        width: '75%',
        lineHeight: '130%',
      },
    },
    body: {
      padding: 20,
      '& img': {
        maxWidth: '100%',
        margin: '10px auto',
      },
    },
    loadingContainer: {
      padding: 40,
      width: 100,
      display: 'flex',
      justifyContent: 'space-around',
    },
    replies: {
      margin: '0 24px',
      marginBottom: 24,
    },
    '@media screen and (max-width: 480px)': {
      replies: {
        margin: '0 10px',
        marginBottom: 24,
      },
    },
    replyEditor: {
      position: 'relative',
      padding: 24,
      borderBottom: '1px solid #dfdfdf',
      '& .CodeMirror': {
        height: 150,
        minHeight: 'auto',
        '& .CodeMirror-scroll': {
          minHeight: 'auto',
        },
      },
    },
    replyHeader: {
      padding: '10px 20px',
      backgroundColor: theme.palette.primary.dark,
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
    },
    notLoginButton: {
      padding: '10px 20px',
    },
    replyButton: {
      position: 'absolute',
      right: 40,
      bottom: 65,
      zIndex: 101,
      opacity: 0.1,
      transition: 'opacity .3s',
      '&:hover': {
        opacity: 1,
      },
    },
  }
}

export const replyStyle = {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 0,
    borderBottom: '1px solid #dfdfdf',
  },
  left: {
    marginRight: 20,
  },
  right: {
    '& img': {
      maxWidth: '100%',
      display: 'block',
    },
  },
}

export default topicDetailStyle
