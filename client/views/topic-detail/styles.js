export const topicDetailStyle = () => {
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
  }
}

export default topicDetailStyle
