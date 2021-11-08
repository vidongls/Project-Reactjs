import { React, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

function HeaderMenuMoblie(props) {
  const [expanded, setExpanded] = useState(false)
  const [expanded1, setExpanded1] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleChangeChild1 = (panel) => (event, isExpanded) => {
    setExpanded1(isExpanded ? panel : false)
  }
  return (
    <>
      <div className="menu-mobile__list">
        <ul>
          <li>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <Link className="text-title" to="/home">
                    Home
                  </Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <Link to="/">Home Style 1</Link>
                  </li>
                  <li>
                    <Link to="/">Home Style 2</Link>
                  </li>
                  <li>
                    <Link to="/">Home Style 3</Link>
                  </li>
                  <li>
                    <Link to="/">Home Style 4</Link>
                  </li>
                  <li>
                    <Link to="/">Home Style 5</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <Link className="text-title" to="/shop">
                    Shop
                  </Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion
                  expanded={expanded1 === 'panel1'}
                  onChange={handleChangeChild1('panel1')}
                  className="child-ele"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Category View</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="/shop">Shop 2 Column</Link>
                      </li>
                      <li>
                        <Link to="/products">Shop Filter Style</Link>
                      </li>
                      <li>
                        <Link to="/products">Shop Full</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop 3 Column</Link>
                      </li>
                      <li>
                        <Link to="/shop">List View</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded1 === 'panel2'}
                  onChange={handleChangeChild1('panel2')}
                  className="child-ele"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Category View 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="/shop">Sidebar Left</Link>
                      </li>
                      <li>
                        <Link to="/shop">Sidebar Right</Link>
                      </li>
                      <li>
                        <Link to="/cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">My Wishlist</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded1 === 'panel3'}
                  onChange={handleChangeChild1('panel3')}
                  className="child-ele"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="/shop">Simple Product</Link>
                      </li>
                      <li>
                        <Link to="/shop">Variable Product</Link>
                      </li>
                      <li>
                        <Link to="/shop">Product Upcoming</Link>
                      </li>
                      <li>
                        <Link to="/shop">Thumb Top Product</Link>
                      </li>
                      <li>
                        <Link to="/compare">Compare</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </li>
          <li className="alone-li">
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <Link className="text-title" to="/blog">
                    blog
                  </Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <Link to="/blog">Blog 2 Column</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog 2 Col Masonry</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog 3 Column</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog 3 Col Masonry</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog Details</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog Details Video</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <Link className="text-title" to="/page">
                    page
                  </Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shoping Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/compare">Compare</Link>
                  </li>
                  <li>
                    <Link to="/">Order Success</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderMenuMoblie
