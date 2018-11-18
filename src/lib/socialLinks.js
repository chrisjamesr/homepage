import twitter from '../../images/icons/iconmonstr-twitter-4.svg'
import linkedin from '../../images/icons/iconmonstr-linkedin-4.svg'
import insta from '../../images/icons/iconmonstr-instagram-4.svg'
import email from '../../images/icons/iconmonstr-gmail-5.svg'
import github from '../../images/icons/iconmonstr-github.svg'

const socialObj = {
  instagram: {
    href: "https://www.instagram.com/chrsjr/" ,
    title: "instagram.com/chrsjr/",
    imgSrc: insta,
    imgAlt: "Instagram Icon"       
  },
  twitter: {
    href: "https://twitter.com/chrsjr",
    title: "twitter.com/chrsjr",
    imgSrc: twitter,
    imgAlt: "Twitter Icon"       
  },
  linkedIn: {
    href: "https://www.linkedin.com/in/chris-j-rudolph",
    title: "linkedin.com/in/chris-j-rudolph",
    imgSrc: linkedin,
    imgAlt: "LinkedIn Icon"       
  },
  github: {
    href: "https://github.com/chrisjamesr",
    title: "github.com/chrisjamesr",
    imgSrc: github,
    imgAlt: "Github Icon"       
  },
  gmail: {
    href: "mailto:chrisjames.r@gmail.com",
    title: "mailto:chrisjames.r@gmail.com",
    imgSrc: email,
    imgAlt: "Email Icon"
  }
}

const socialArray = Object.keys(socialObj).map(key => socialObj[key])

export {socialObj, socialArray}