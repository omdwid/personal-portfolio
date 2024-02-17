import "./footer.scss"

const Footer = () => {
  const date = new Date();
  
  return (
    <div className="footer" id="About">
      <h2>&copy;Copywrite {date.getFullYear()} Designed & Developed By Om Dwivedi</h2>
    </div>
  )
}

export default Footer
