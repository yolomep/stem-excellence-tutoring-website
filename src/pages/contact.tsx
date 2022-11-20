import * as React from "react"
import type { HeadFC } from "gatsby"
import NavigationBar from '../components/navigationbar'

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <main>
        hehe
        </main>
      </div>
    );
  }
}

export const Head: HeadFC = () => <title>Contact</title>