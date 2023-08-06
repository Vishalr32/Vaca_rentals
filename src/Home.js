import React from "react";
import Banner from "./home/Banner";
import Contents from "./home/Contents";
import { Link } from "react-router-dom";
import { Content, Maincontents, Bigcontents } from "./Maincontents";
import "./home/contents.css";
class Home extends React.Component {
  state = {
    maincontent: Maincontents,
    bigcontent: Bigcontents,
    contents: Content,
  };
  render() {
    return (
      <div>
        <Banner />
        <div className="home__cont">
          {this.state.maincontent.map((item) => {
            return (
              <div key={item.id}>
                <Contents
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
        <div className="bighome">
          <h2>Travel Experiences</h2>
          <p>
            
          </p>
          <div className="home__cont">
            {this.state.bigcontent.map((item) => {
              return (
                <div key={item.id}>
                  <Contents
                    big={true}
                    id={item.id}
                    img={item.img}
                    styles={item.styles}
                    description={item.description}
                  />
                </div>
              );
            })}
          </div>
          <button className="E__btn">Explore all</button>
        </div>
        <div className="home__cont">
          {this.state.contents.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Home;
