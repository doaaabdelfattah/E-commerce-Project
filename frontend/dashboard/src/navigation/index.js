import { allnav } from './allNav';
export const getNav = (role) => {
  const finalNavs = []

  for (let i = 0; i < allnav.length; i++) {
    if (role === allnav[i].role) {
      finalNavs.push(allnav[i])
    }
  }
  return finalNavs

}