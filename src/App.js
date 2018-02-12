import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';
import Contact from './containers/Contact/Contact';
import History from './containers/History/History';
import About from './containers/About/About';

let options = {
	galleryItems: [
	  { id: 1, title: "Bengal", subtitle: "Any Bengal owner will agree that, whether you're drawn by their beautiful coat or tempted by their cheeky sense of humour, you'll certainly have your work cut out for you if you welcome one of these mini leopards into your home. I always tell people they are the ones on Duracell batteries! laughs Barrie Alger-Street, chairman of the Bengal Cat Club. They're full of energy and they want to do things most of the time. They won't curl into a ball and just lay there. They're highly intelligent and very active. They can be a bit boisterous, which might be a bit much for some owners.", description:"", image: "assets/cats/bengal.jpg", liked: true },
	  { id: 2, title: "Brusheard Lynx", subtitle: "Lynx are cats that are related to tigers, lions, domestic cats, jaguars and other members of the Felidae family, according to the Integrated Taxonomic Information System. There are four species of lynx, including the bobcat. What distinguishes these cats from their relatives are their compact legs, stubby tail and erect ears topped with pointed, black tufts of fur. .", description:"", image: "assets/cats/brushearedlynx.jpg" },
		{ id: 3, title: "Sphynx", subtitle: "The Sphynx has been referred to as the ET of the cat world. This is an intelligent, inquisitive, extremely friendly breed that is unusually people-oriented. Sphynx commonly greet their owners (or any other person, for that matter) at the front door, with obvious excitement and happiness. Sphynx are not known to be particularly fond of dogs or other cats, preferring all the available attention for themselves, although many do bond well with other companion animals.", description:"", image: "assets/cats/sphynx.jpg" },
		{ id: 4, title: "Clouded Lepard", subtitle: "Clouded leopards live in forests at elevations of up to 8,000 feet and spend much of their lives in trees. Their bodies are well adapted to this arboreal lifestyle. While their strong tails help them to balance while perched on tree branches, their specially adapted ankle bones and large paws allow them to both climb while hanging upside down under branches and climb down trees head first! When a clouded leopard spots its prey on the forest floor, it leaps down on it from above. The social behavior of clouded leopards is virtually unknown. They are, however, thought to be solitary animals. And though they are mostly nocturnal, evidence has shown them to be active during some periods of the day.", description:"", image: "assets/cats/cloudedlepardcat.jpg",liked: true },
		{ id: 5, title: "Siamese", subtitle: "The Siamese cat is not only beautiful, but also she is highly intelligent. She can be trained to walk on a lead. This intelligence does not mean, however, that she can be trained to do everything you might wish. Like most other highly intelligent breeds, the Siamese has her own desires. The Siamese is an affectionate cat and requires her parent to be as dedicated to her as she is to her parent. Her parent must be affectionate to the Siamese and make time to play with her.", description:"", image: "assets/cats/siamesecat.jpg" },
	  { id: 6, title: "Silver Savannah", subtitle: "The Savannah is an active, confident cat who enjoys interacting with people and other cats. Intelligent and curious, he is always looking for something interesting to do, the more adventurous the better. Provide him with plenty of tough, sturdy toys and frequent playtimes, or you will probably discover that he can be quite destructive. He bonds strongly to his family and makes every effort to be with them, including learning to walk on leash or retrieve toys.", description:"", image: "assets/cats/silversavahana.jpg" },
		{ id: 7, title: "Tabby", subtitle: "Tabbies are extremely playful and friendly by nature, which is quite contrary to the 'aloof demeanor' that most domestic felines are stereotyped with. They love to hang around their family, and are usually more attached to a particular person in the house who does all the tasks related to their day-to-day routines. They are very gentle by nature, and love being the center of attention. They also love sharing the bed with their owners. Most owners say that tabbies are very laid back, and love to spend most of their time having fun. Also, they seem to be sharper and more intelligent than other felines.", description:"", image: "assets/cats/tabbycat.jpg" },
		{ id: 8, title: "British Blue", subtitle: "The British Shorthair is a very pleasant cat to have as a companion. She is easy going and placid. The British is a fiercely loyal, loving cat and will attach herself to every one of her family members. While the British loves to play, she doesn't need hourly attention. If she is in the mood to play, she will find someone and bring a toy to that person. The British also plays well by herself, and thus is a good companion for single people.", description:"", image: "assets/cats/britishblue.jpg" },
		{ id: 9, title: "Abyssinian", subtitle: "Of all the cat breeds, the Abyssinian is perhaps the one who lives life to the fullest. He climbs higher, jumps farther, plays harder. Nothing escapes the notice of this highly intelligent and inquisitive cat, a quality that makes life with him both endlessly entertaining and continuously challenging. Staying a step ahead of an Aby, as the breed is nicknamed, or even just keeping pace with him, requires the fancy footwork of a Fred Astaire, the brainpower of an Einstein and a sense of humor that never stops. You never know what he’ll get into next, although you can assume that if you have something or are doing something, your Aby will want to investigate it closely.", description:"", image: "assets/cats/abyssinian.jpg",liked: true }
	]
  };

class App extends Component {

  render () {

    let  routes = (
        <Switch>
          <Route path="/history" component={History} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={()=><Gallery items={options.galleryItems}/>} />
          <Redirect to="/" />
        </Switch>
      );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
