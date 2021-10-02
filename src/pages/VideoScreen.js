import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Video.css';
import { VideoContainer } from './../components/VideoContainer';

export const VideoScreen = () => {
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
        <VideoContainer />
      </IonContent>
    </IonPage>
    )
}
