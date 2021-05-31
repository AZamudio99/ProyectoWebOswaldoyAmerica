import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonFooter,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab3 from './pages/Gatos';
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem} from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* Theme variables */
import home from './pages/home';
import { Menu } from './components/Menu';
import Perros from './pages/Perros';
import Gatos from './pages/Gatos';
import Peces from './pages/Peces';
import Reptiles from './pages/Reptiles';
import Roedores from './pages/Roedores';
import Contacto from './pages/Contacto';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>
      <IonRouterOutlet  id="main">
        <Route path="/home" component={home} exact={true} />
        <Route path="/Perros" component={Perros} exact={true} />
        <Route path="/Gatos" component={Gatos} exact={true} />
        <Route path="/Peces" component={Peces} exact={true} />
        <Route path="/Reptiles" component={Reptiles} exact={true} />
        <Route path="/Roedores" component={Roedores} exact={true} />
        <Route path="/Contacto" component={Contacto} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
    </IonApp>
  );
  
export default App;


