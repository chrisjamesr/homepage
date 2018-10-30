export const projects = () => {
  return [
    {
      name: "Event List",
      url: "https://event-list-app.herokuapp.com/events",
      repoUrl: "https://github.com/chrisjamesr/event-calendar",
      description: "An event schedule application with React/Redux front end on a Rails 5 API",
    },
    {
      name: "Recipe App",
      url: "https://github.com/chrisjamesr/recipe_js_app",
      repoUrl: "https://recipes-js-app.herokuapp.com/",
      description: "Rails MVC application with JQuery for sharing recipes.",
    },
    { name: "CityBird Sighting Logger",
      url: "https://citybird-sighting-logger.herokuapp.com/",
      repoUrl: "https://github.com/chrisjamesr/city-bird-sighting-logger",
      description: "Sinatra based app for birdwatching. Wikipedia gem utilizes API to add images of birds when added."      
    },
    {
      name: "Atlas Obscura Scraper CLI",
      url: "",
      repoUrl: "https://github.com/chrisjamesr/atlas-obscura-cli-app",
      description: "CLI application in Ruby. Scrapes AtlasObscura.com and displays the top destinations",
    }     
  ]  
}