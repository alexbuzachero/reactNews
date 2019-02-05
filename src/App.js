import React, { Component } from "react";
import logo from "./logo.svg";
import { MenuOption } from "./components/MenuOption";
import News from "./components/News";
import SearchForm from "./components/SearchForm";
import "./App.css";

// API Key
const API_KEY = "81941798cfd3457285e19ce510933c0f";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      results: 0,
      searchField: "",
      backgroundLogo: "background-news"
    };
  }

  // Function to fetch the data
  getNews = async event => {
    event.preventDefault();

    let search = event.target.elements.search.value;

    // If to save the search field value and to change the background Logo Flag
    if (
      search !== "Canada" &&
      search != "Brazil" &&
      search != "Europe" &&
      search != "Africa" &&
      search != "Search Results"
    ) {
      this.setState({ searchField: search, backgroundLogo: "background-news" });
    }
    if (search == "Search Results") {
      this.setState({ backgroundLogo: "background-news" });
      search = this.state.searchField;
    }
    if (search == "Canada" || search == "Canada") {
      this.setState({ backgroundLogo: "background-canada" });
    }
    if (search == "brazil" || search == "Brazil") {
      this.setState({ backgroundLogo: "background-brazil" });
    }
    if (search == "europe" || search == "Europe") {
      this.setState({ backgroundLogo: "background-europe" });
    }
    if (search == "africa" || search == "Africa") {
      this.setState({ backgroundLogo: "background-africa" });
    }
    if (search == "langara" || search == "Langara") {
      this.setState({ backgroundLogo: "background-langara" });
    }

    // Fetching the data
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ data: data, results: data.totalResults });

    // console.log("test :", data.totalResults);
    // console.log("data", data);
  };

  render() {
    // Render the data from 0 to 3 results
    if (this.state.results == 1) {
      return (
        <div className="wrapper">
          <div className={this.state.backgroundLogo}>
            <div className="logo">React News App</div>
          </div>
          <div className="searchArea">
            <SearchForm getNews={this.getNews} />
          </div>
          <div className="newsOptions">
            <MenuOption getNews={this.getNews} title="Canada" />
            <MenuOption getNews={this.getNews} title="Brazil" />
            <MenuOption getNews={this.getNews} title="Search Results" />
            <MenuOption getNews={this.getNews} title="Europe" />
            <MenuOption getNews={this.getNews} title="Africa" />
          </div>
          <div className="newsArea">
            <News
              title={this.state.data.articles[0].title}
              content={this.state.data.articles[0].description}
              imgurl={this.state.data.articles[0].urlToImage}
            />
          </div>
        </div>
      );
    } else if (this.state.results == 2) {
      return (
        <div className="wrapper">
          <div className={this.state.backgroundLogo}>
            <div className="logo">React News App</div>
          </div>
          <div className="searchArea">
            <SearchForm getNews={this.getNews} />
          </div>
          <div className="newsOptions">
            <MenuOption getNews={this.getNews} title="Canada" />
            <MenuOption getNews={this.getNews} title="Brazil" />
            <MenuOption getNews={this.getNews} title="Search Results" />
            <MenuOption getNews={this.getNews} title="Europe" />
            <MenuOption getNews={this.getNews} title="Africa" />
          </div>
          <div className="newsArea">
            <News
              title={this.state.data.articles[0].title}
              content={this.state.data.articles[0].description}
              imgurl={this.state.data.articles[0].urlToImage}
            />
            <News
              title={this.state.data.articles[1].title}
              content={this.state.data.articles[1].description}
              imgurl={this.state.data.articles[1].urlToImage}
            />
          </div>
        </div>
      );
    } else if (this.state.results >= 3) {
      return (
        <div className="wrapper">
          <div className={this.state.backgroundLogo}>
            <div className="logo">React News App</div>
          </div>
          <div className="searchArea">
            <SearchForm getNews={this.getNews} />
          </div>
          <div className="newsOptions">
            <MenuOption getNews={this.getNews} title="Canada" />
            <MenuOption getNews={this.getNews} title="Brazil" />
            <MenuOption getNews={this.getNews} title="Search Results" />
            <MenuOption getNews={this.getNews} title="Europe" />
            <MenuOption getNews={this.getNews} title="Africa" />
          </div>
          <div className="newsArea">
            <News
              title={this.state.data.articles[0].title}
              content={this.state.data.articles[0].description}
              imgurl={this.state.data.articles[0].urlToImage}
              date={this.state.data.articles[0].publishedAt}
            />
            <News
              title={this.state.data.articles[1].title}
              content={this.state.data.articles[1].description}
              imgurl={this.state.data.articles[1].urlToImage}
              date={this.state.data.articles[1].publishedAt}
            />
            <News
              title={this.state.data.articles[2].title}
              content={this.state.data.articles[2].description}
              imgurl={this.state.data.articles[2].urlToImage}
              date={this.state.data.articles[2].publishedAt}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div className={this.state.backgroundLogo}>
            <div className="logo">React News App</div>
          </div>
          <div className="searchArea">
            <SearchForm getNews={this.getNews} />
          </div>
          <div className="newsOptions">
            <MenuOption getNews={this.getNews} title="Canada" />
            <MenuOption getNews={this.getNews} title="Brazil" />
            <MenuOption getNews={this.getNews} title="Search Results" />
            <MenuOption getNews={this.getNews} title="Europe" />
            <MenuOption getNews={this.getNews} title="Africa" />
          </div>
          <div className="newsArea">No news found!!!</div>
        </div>
      );
    }
  }
}

export default App;
