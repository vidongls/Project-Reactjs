import { React, useState } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function CheckOut(props) {
  const [expanded, setExpanded] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className="checkout">
      <div className="container">
        <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="checkout-billing">
            <h3>Billing Details</h3>
            <div className="checkout-list">
              <div className="checkout-country">
                <h4>
                  Country <span>*</span>
                </h4>
                <input
                  id="country"
                  {...register('country', { required: true })}
                  name="country"
                />
                {errors.country && (
                  <div className="error">Please provide your country name</div>
                )}
              </div>
              <div className="checkout-tworow">
                <div className="firstname">
                  <h4>
                    First Name <span>*</span>
                  </h4>
                  <input
                    id="firstName"
                    {...register('firstName', { required: true })}
                    name="firstName"
                  />
                  {errors.firstName && (
                    <div className="error">Please provide your first name</div>
                  )}
                </div>
                <div className="lastname">
                  <h4>
                    Last Name <span>*</span>
                  </h4>
                  <input
                    id="lastName"
                    {...register('lastName', { required: true })}
                    name="lastName"
                  />
                  {errors.lastName && (
                    <div className="error">Please provide your last name</div>
                  )}
                </div>
              </div>
              <div className="checkout-company">
                <h4>
                  Company Name <span>*</span>
                </h4>
                <input
                  id="company"
                  {...register('company', { required: true })}
                  name="company"
                />
                {errors.company && (
                  <div className="error">Please provide your company name</div>
                )}
              </div>
              <div className="checkout-address">
                <h4>
                  Address <span>*</span>
                </h4>
                <input
                  id="address"
                  {...register('address', { required: true })}
                  name="address"
                />
                {errors.address && (
                  <div className="error">Please provide your address</div>
                )}
              </div>
              <div className="checkout-city">
                <h4>
                  Town / City <span>*</span>
                </h4>
                <input
                  id="city"
                  {...register('city', { required: true })}
                  name="city"
                />
                {errors.city && (
                  <div className="error">Please provide your city</div>
                )}
              </div>
              <div className="checkout-tworow">
                <div>
                  <h4>
                    Email Address <span>*</span>
                  </h4>
                  <input
                    id="email"
                    {...register('email', { required: true })}
                    name="email"
                  />
                  {errors.email && (
                    <div className="error">Please provide your email</div>
                  )}
                </div>
                <div>
                  <h4>
                    Phone <span>*</span>
                  </h4>
                  <input
                    id="phone"
                    {...register('phone', { required: true })}
                    name="phone"
                  />
                  {errors.phone && (
                    <div className="error">Please provide your phone</div>
                  )}
                </div>
              </div>
              <div className="checkout-notes">
                <h4>
                  Order Notes <span>*</span>
                </h4>
                <TextareaAutosize
                  placeholder="  Notes about your order, e.g. special notes for delivery."
                  minRows={4}
                  {...register('message')}
                  name="message"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="checkout-order">
              <h3>Your order</h3>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name-col">
                      <input
                        type="text"
                        readOnly
                        value="Minimal Troma Furniture"
                        name="productName"
                      />
                      <span>
                        x
                        <input
                          type="text"
                          readOnly
                          value="4"
                          name="productQuantity"
                        />
                      </span>
                    </td>
                    <td>
                      <input
                        type="text"
                        readOnly
                        value="$190.00"
                        name="productPrice"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>$850.00</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>Free Shipping</td>
                  </tr>
                  <tr>
                    <td style={{ border: 'unset' }}>Order Total </td>
                    <td style={{ border: 'unset' }}>
                      <input
                        className="total"
                        type="text"
                        readOnly
                        value=" $850.00 "
                        name="totalPrice"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="checkout-drop">
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                >
                  <AccordionSummary>
                    <Typography>Direct Bank Transfer</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      won’t be shipped until the funds have cleared in our
                      account.
                    </Typography>
                  </AccordionDetails>
                </Accordion>{' '}
                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                >
                  <AccordionSummary>
                    <Typography>Cheque Payment</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Please send your cheque to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </Typography>
                  </AccordionDetails>
                </Accordion>{' '}
                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                >
                  <AccordionSummary>
                    <Typography>Paypal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <button className="btn checkout-btn" type="submit">
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckOut
