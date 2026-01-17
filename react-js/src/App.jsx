import Header from "./component/Header"
import Search from "./component/sear"
import Card from "./component/Card"
import Banner from "./component/Banner"
import Special from "./component/Special"
import card_1 from "./assets/card_1.png"
import card_2 from "./assets/card_2.png"
import card_3 from "./assets/card_3.png"
import card_4 from "./assets/card_4.png"
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <section className="special_offer">
        <div className="container">
          <div className="special">
            <Special
              text="SALE UP TO 25%"
              heading="It’s in the Bag: Limited Deals"
              button="SHOP NOW"
            />
            <Special
              text="SALE UP TO 25%"
              heading="It’s in the Bag: Limited Deals"
              button="SHOP NOW"
            />

          </div>
        </div>
      </section>
      <section className="card_box">
        <div className="container">
          <div className="course">

            <Card
              img={card_1}
              heading="Free Shipping"
              text="For all Orders Over $100"
            />

            <Card
              img={card_2}
              heading="Secured Payment"
              text="Payment Cards Accepted"
            />

            <Card
              img={card_3}
              heading="30 Days Returns"
              text="For an Exchange Product"
            />
            <Card
              img={card_4}
              heading="24/7 Support"
              text="Contact us Anytime"
            />

          </div>
        </div>
      </section>
    </div>
  )
}

export default App