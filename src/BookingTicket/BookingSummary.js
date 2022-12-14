import React, { useState } from "react";
import './BookingSummary.css';



import { RadioButton, RadioGroup } from "react-radio-buttons";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";



function BookingSummary({user}) {

  const location = useLocation();
  const { title, Hall_Name, Total_ticket, total_ticket_price, seat_type, poster, selected_Seat_Num } = location.state;

  // const seatNumber = JSON.parse(selected_Seat_Num);
  // console.log(" This is seat " + seatNumber[0].row);


  let final_ticket_price = total_ticket_price + 125 - 25;

  const [redirectPage, setRedirectPage] = useState('');

  const [emailAdress, setEmailAdress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const [creditCardNum, setCreditCardNum] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expireMonth, setExpireMonth] = useState('');
  const [expireYear, setExpireYear] = useState('');
  const [creditPass, setCreditPass] = useState('');




  const handleEmailAdress = (e) => {
    setEmailAdress(e.target.value);
    // console.log(e.target.value);
  }

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
    // console.log(e.target.value);
  }


  const handleCardNumber = (e) => {
    setCreditCardNum(e.target.value);
    // console.log(e.target.value);
  }

  const handleHolderName = (e) => {
    setCardHolder(e.target.value);
    // console.log(cardHolder);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  };

  const handleCreditPass = (e) => {
    setCreditPass(e.target.value);
  }


  const validation = () => {
    if (emailAdress === '' || phoneNum === '' || creditCardNum === '' || creditPass === '' || cardHolder === ''
      || expireMonth === '' || expireYear === '') {
      alert(`${cardHolder} Please fill all details for bokking seats`);
      setRedirectPage('/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details');
    }
    else {
      setRedirectPage('/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details/Ticket-details');
    }
  }

  return (

    <div className="checkout">

      <div className="RecieptAndDetails">

        <div className="receipt">

          <span className="receiptBookingSummary">SHARE CONTACT DETAILS</span>
          <div className="ContactCardDetailEnter">

            <form className="form">
              <div className="TicketAmountInfo">

                <div className="TicketAmountInfoPrice">
                  <span style={{ marginBottom: "30px" }}>Enter Email</span>
                  <span style={{ marginBottom: "30px" }}>Enter Phone Number</span>
                </div>

                <div className="TicketAmountInfoPrice TicketAmountInfoPriceAmount">
                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="email" placeholder="Enter Email Address" required
                    onChange={(e) => { handleEmailAdress(e) }} />
                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="tel" placeholder="Enter Phone Number" required
                    onChange={(e) => { handlePhoneNum(e) }} />
                </div>

              </div>
            </form>

          </div>

          <span className="receiptBookingSummary">ENTER CARD DETAILS</span>
          <div className="ContactCardDetailEnter">

            <form className="form">
              <div className="TicketAmountInfo">

                <div className="TicketAmountInfoPrice">
                  <span style={{ marginBottom: "30px" }}>Enter Card Number</span>
                  <span style={{ marginBottom: "30px" }}>Card Holder Name</span>
                </div>

                <div className="TicketAmountInfoPrice TicketAmountInfoPriceAmount">
                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="email" placeholder="Enter Card Numbe" required
                    onChange={(e) => { handleCardNumber(e) }} />
                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="tel" placeholder="Card Holder Name" required
                    onChange={(e) => { handleHolderName(e) }} />
                </div>

              </div>


              <div className="cardExpiry">
                <div className="input-container">
                  <h6 >Exp. Month</h6>
                  <select value={expireMonth} onChange={handleExpMonth}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="input-container">
                  <h6>Year</h6>
                  <select value={expireYear} onChange={handleExpYear}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </div>

                <div className="input-container">
                  <h6>CVV</h6>
                  <input
                    type="password"
                    maxLength={3}
                    size={3}
                    placeholder="CVV"
                    required
                    onChange={(e) => { handleCreditPass(e) }}
                  />
                </div>

              </div>
            </form>


          </div>
          <Link to={redirectPage}
            state={{
              // seatNumber: JSON.stringify(seatNumber),
              title: title,
              Hall_Name: Hall_Name,
              Total_ticket: Total_ticket,
              total_ticket_price: total_ticket_price,
              seat_type: seat_type,
              poster: poster,

              Holder_name: cardHolder,
              Transaction_Id: creditCardNum,
            }}

            onClick={() => { validation() }}
>
            <Button className="paymentBarBtn"
              style={{ marginBottom: "20px" }}>Make Payment</Button>
          </Link>
        </div>


        <div className="receipt">

          <span className="receiptBookingSummary">BOOKING SUMMARY</span>

          <div className="movieNameandticketbook">
            <span className="movieNamebook">{title},</span>
            <span className="movieTicketbook"> tickets - {Total_ticket}</span><br></br>
            <span className="movieTicketbookinfo"> Selected seat: {seat_type} ({Hall_Name}) </span>

          </div>

          <div className="TicketAmountInfo">
            <div className="TicketAmountInfoPrice">
              <span>Ticket Price</span>
              <span>Convenience fees</span>
              <span>Discount</span>
              <span style={{ borderTop: "1px solid black", marginTop: "10px" }}>Sub Total</span>
            </div>

            <div className="TicketAmountInfoPrice TicketAmountInfoPriceAmount">
              <span>	&nbsp;Rs. {total_ticket_price}</span>
              <span>	&nbsp;Rs. 125</span>
              <span>-Rs. 25</span>
              <span style={{ borderTop: "1px solid black", marginTop: "10px" }}>Rs.
                {final_ticket_price}
              </span>
            </div>
          </div>


          <div className="SelectedTicketColletionType">
            <span style={{ fontSize: "22px", color: "#969696" }}>SELECT TICKET TYPE</span>

            <RadioGroup horizontal>
              <RadioButton
                rootColor="#4E1427"
                pointColor="#f14c63"
                value="M-Ticket"

              >
                M-Ticket
              </RadioButton>
              <RadioButton
                rootColor="#4E1427"
                pointColor="#f14c63"
                value="Box Office Pickup"
              >
                Box Office Pickup
              </RadioButton>
            </RadioGroup>
          </div>

        </div>

      </div>

      <div className="note">
        <h5 style={{ color: "gray" }} >Note:</h5>
        <p>
          i . Registrations/Tickets once booked cannot be exchanged, cancelled or
          refunded.
        </p>
        <p>
          ii . In case of Credit/Debit Card bookings, the Credit/Debit Card and
          Card holder must be present at the ticket counter while collecting the
          ticket(s).
        </p>
      </div>

    </div>
  );
}



export default BookingSummary;

