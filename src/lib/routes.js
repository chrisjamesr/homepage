export const routes = (cb) => { 
  return ({
    about: { 
      path: "/about", 
      cb
    }, 
    projects: { 
      path: "/projects",
      cb
    }, 
    misc: {
      path: "/misc",
      cb
    }, 
    blog: {
      path: "/blog",
      cb
    }      
  })
}

