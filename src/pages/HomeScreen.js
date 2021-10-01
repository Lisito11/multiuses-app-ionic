import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonMenuButton,
} from "@ionic/react";
import "./Home.css";
import { menuController } from "@ionic/core";
import { menuOutline } from 'ionicons/icons';
import { HomeContainer } from './../components/HomeContainer';


export const HomeScreen = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton color='primary' menu='first' slot='start'/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};
