import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './Header.css'
import store from '../store/store.js'
import watch from 'redux-watch'
import { getPosts, morePosts } from '../actions'

let w = watch(store.getState, 'todos')
store.subscribe(w((newVal, oldVal, objectPath) => {
  console.log('%s changed from %s to %s', objectPath, oldVal, newVal)
  // admin.name changed from JP to JOE
}))

const dummyData = {
  docs: [
    {
      title: "How to get experience without experience — a new designer’s paradox",
      body: "The best way to “get started” in design is to dive head first into your first project. Bootcamps, books, courses, tutorials, and online classes are too overwhelming to sift through. A lot of people end up wasting months researching the “best” design resource.",
      creatorName: "Jason",
      headerUrl: "https://shft.cl/img/i/images.unsplash.com-1032867274877141.jpg",
      url: "hello"
    },
    {
      title: "A design lesson from a sugar stick",
      body: "Look at the sugar sticks above. Look again. Ok now that’s too much looking; cause anyway, these sugar sticks have nothing special (well ok it’s written fair trade on them, but design wise, nothing special). You’ve seen these sugar sticks again and again in your local coffee shop, so you’re wondering why I insist so much on you having a good look at these.",
      creatorName: "Carlton",
      headerUrl: "https://cdn-images-1.medium.com/max/800/1*K4_ZIPDh4vK71DkjrpfUYQ.jpeg",
      url: "mate"
    },
    {
      title: "Should designers code… or should developers design?",
      body: "We all know that one of the most discussed topics in the tech community is whether or not designers should code. There are tons of articles out there about the subject, nonetheless I still see new ones popping up every now and then.",
      creatorName: "Carlton",
      headerUrl: "https://cdn-images-1.medium.com/max/1000/1*rstwls7lX4VsWmUtLIeWFw.png",
      url: "another"
    },
    {
      title: "Those jobs are gone forever. Let’s gear up for what’s next.",
      body: "Manufacturing jobs were a huge part of America’s post-World War II economic miracle. In the early 1980’s, 20 million Americans worked in factories, assembling consumer products like cars and appliances. Well, what happened after that? There are two narratives here. The shorter story arc is about globalization. American corporations moved all the old manufacturing jobs off-shore to relatively poor countries that still had OK education systems (like China).",
      creatorName: "Carlton",
      headerUrl: "https://cdn-images-1.medium.com/max/2000/1*Y8U9_XwuHJOLGatnzltJ1g.jpeg",
      url: "more"
    },
    {
      title: "Tech and the Fake Market tactic",
      body: "In one generation, the Internet went from opening up new free markets to creating a series of Fake Markets that exploit society, without most media or politicians even noticing.",
      creatorName: "Carlton",
      headerUrl: "https://cdn-images-1.medium.com/max/2000/1*yJPe29K12PqdT2GagOVsUA.jpeg"
    },
    {
      title: "A young Wikipedia editor withstood a decade of online abuse. Now she’s fighting back — on Wikipedia itself.",
      body: "The note came from someone with a history of harassing the 22-year-old medical student. This man hates women, Temple-Wood thought to herself. Then she had another thought. What do misogynists hate more than successful women?",
      creatorName: "Carlton",
      headerUrl: "https://cdn-images-1.medium.com/max/2000/1*XYojytXtEj5mJWmfQNO6rA.jpeg"
    }
  ] 
};

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: "",
    };

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      this.setState({
        todos: store.getState().posts.data.slice(-1)[0].creatorName
      });
    });
  }
  componentDidMount() {
    // var username = store.getState()
    // this.setState({username})
    console.log(store.getState())
}
	logUser() {
		console.log(store.getState())
	}
	addPost() {
		store.dispatch(getPosts(dummyData))
	}
	morePosts() {
		store.dispatch(morePosts(store.getState().posts, dummyData))
	}
  render() {
    return (
		<div className={style.head}>
			<div onClick={this.logUser} className={style.left}>
				◀ Previous Week
			</div>
			<div onClick={this.morePosts} className={style.middle}>
				Mon 19/02/17 {this.state.todos}
			</div>
			<div onClick={this.addPost} className={style.right}>
				Next Week ▶
			</div>
		</div>
    );
  }
}

// Head.propTypes = {
//   username: PropTypes.string.isRequired
// }

Head = connect()(Head)
