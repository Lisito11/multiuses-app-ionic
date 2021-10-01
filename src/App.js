import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { HomeScreen } from "./pages/HomeScreen";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { SumScreen  } from './pages/SumScreen';
import { TranslateScreen  } from './pages/TranslateScreen';
import { ProductTableScreen } from './pages/ProductTableScreen';
import { VideoScreen } from './pages/VideoScreen';
import { Menu } from './components/Menu';

const App = () => (
  <IonApp>
    <IonReactRouter>
    <Menu/>  
      <IonRouterOutlet id='mainRouter'>   
        <Route exact path="/home"><HomeScreen /></Route>
        <Route exact path="/sum"><SumScreen /></Route>
        <Route exact path="/translate"><TranslateScreen /></Route>
        <Route exact path="/table"><ProductTableScreen /></Route>
        <Route exact path="/video"><VideoScreen /></Route>
        <Route exact path="/"><Redirect to="/home" /></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
