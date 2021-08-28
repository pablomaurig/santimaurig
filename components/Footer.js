const styles = {
  padding: '10px 0',
  textAlign: 'center',
  backgroundColor: '#D8D8D8',
  color: '#6E6E6E',
}

const Footer = () => {
  return <div style={styles}>
    © {new Date().getFullYear()} | Santiago Maurig
  </div>
}

export default Footer